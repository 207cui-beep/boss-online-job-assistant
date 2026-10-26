"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const script = fs.readFileSync(path.join(__dirname, "../assets/learning.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "../assets/styles.css"), "utf8");
const CAD = "CAD 室内平面制图";
const ORIGINAL = [
  "AI＋跨境电商内容执行", "AI 工具与简单自动化", "内容运营与文案",
  "数据与资料整理", "PPT 与商业表达", "网站内容维护", "线上协作与客户支持"
];

class MemoryStorage {
  constructor(data = {}) { this.data = { ...data }; }
  getItem(key) { return Object.hasOwn(this.data, key) ? this.data[key] : null; }
  setItem(key, value) { this.data[key] = String(value); }
  removeItem(key) { delete this.data[key]; }
}

class Element {
  constructor(id) {
    this.id = id;
    this.options = [];
    this.value = "";
    this.listeners = {};
    this.textContent = "";
    this.dataset = {};
  }
  set innerHTML(html) {
    this.html = html;
    if (this.id === "learningFocus" || this.id === "learningTaskSelect") {
      this.options = [...html.matchAll(/<option value="([^"]*)"/g)].map((m) => ({ value: m[1] }));
      this.value = this.options[0]?.value || "";
    }
  }
  get innerHTML() { return this.html || ""; }
  addEventListener(type, handler) { (this.listeners[type] ||= []).push(handler); }
  trigger(type, payload = {}) { (this.listeners[type] || []).forEach((handler) => handler(payload)); }
  focus() { this.focused = true; }
  scrollIntoView() { this.scrolled = true; }
}

function start(storage = new MemoryStorage()) {
  const elements = new Map();
  const $ = (id) => {
    if (!elements.has(id)) elements.set(id, new Element(id));
    return elements.get(id);
  };
  let lastBlob;
  let downloads = 0;
  const alerts = [];
  const context = vm.createContext({
    localStorage: storage, $, window: {},
    escapeHtml: (input) => String(input ?? "").replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;").replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;").replaceAll("'", "&#039;"),
    csvEscape: (input) => '"' + String(input ?? "").replaceAll('"', '""') + '"',
    getRecords: () => JSON.parse(storage.getItem("bossJobRecords") || "[]"),
    document: { createElement: () => ({ click() { downloads++; } }) },
    Blob, URL: { createObjectURL(blob) { lastBlob = blob; return "blob:test"; }, revokeObjectURL() {} },
    alert: (message) => alerts.push(message)
  });
  vm.runInContext(script, context, { filename: "assets/learning.js" });
  return { storage, $, context, alerts, downloads: () => downloads, blob: () => lastBlob,
    evaluate: (expression) => vm.runInContext(expression, context) };
}

test("脚本语法、原7个方向及原岗位缺省推荐不变", () => {
  assert.doesNotThrow(() => new vm.Script(script));
  const app = start();
  const names = Array.from(app.evaluate("Object.keys(learningPaths)"));
  assert.equal(names.length, 8);
  for (const name of ORIGINAL) assert.ok(names.includes(name), name);
  assert.equal(app.evaluate("recommendedLearningFocus([])"), ORIGINAL[0]);
  assert.equal(app.$("learningFocus").value, ORIGINAL[0]);
  assert.equal(app.$("learningFocus").options[0].value, CAD);
  for (const name of ORIGINAL) {
    app.$("learningFocus").value = name;
    app.$("learningFocus").trigger("change");
    assert.equal(app.$("learningTaskSelect").options.length, 3);
    assert.ok(app.$("learningTasks").innerHTML.includes("验收成果"));
  }
});

test("CAD课程24个任务均提供目标、工时、实际文件和验收标准", () => {
  const app = start();
  const tasks = Array.from(app.evaluate('learningPaths["' + CAD + '"].tasks'));
  assert.equal(tasks.length, 24);
  assert.equal(tasks[0][3], 120);
  assert.match(tasks[0][1], /RECTANG/);
  assert.match(tasks[0][1], /3600,3000/);
  assert.match(tasks[0][2], /\.dwg/);
  assert.match(tasks[0][4], /3600×3000mm/);
  assert.equal(new Set(tasks.map((t) => t[5])).size, 5);
  for (const task of tasks) {
    assert.equal(task.length, 6);
    assert.ok(task[0] && task[1] && task[2] && task[4] && task[5]);
    assert.ok(task[3] >= 60 && task[3] <= 120);
    assert.match(task[2], /\.(dwg|pdf|zip|md)/i);
  }
  app.$("learningFocus").value = CAD;
  app.$("learningFocus").trigger("change");
  const html = app.$("learningTasks").innerHTML;
  assert.match(html, /CAD01_单房间起步.dwg/);
  assert.match(html, /验收标准/);
  assert.equal((html.match(/<details /g) || []).length, 24);
  assert.match(html, /2027年1月10日/);
});

test("切换方向与任务、刷新恢复，不覆盖旧的学习和岗位记录", () => {
  const legacy = { focus: ORIGINAL[0], task: "拆一份真实商品需求",
    evidence: 'old,work "case"', minutes: 25, time: "2026/10/20 12:00:00" };
  const oldJobs = [{ title: "跨境电商助理", description: "产品整理" }];
  const storage = new MemoryStorage({
    bossLearningLogs: JSON.stringify([legacy]), bossJobRecords: JSON.stringify(oldJobs)
  });
  const app = start(storage);
  assert.equal(app.$("learningLogCount").textContent, "1");
  app.$("learningFocus").value = CAD;
  app.$("learningFocus").trigger("change");
  const task = app.evaluate('learningPaths["' + CAD + '"].tasks[8][0]');
  app.$("learningTaskSelect").value = task;
  app.$("learningTaskSelect").trigger("change");
  assert.equal(app.$("learningTaskMinutes").value, "120");
  assert.ok(app.$("learningTasks").innerHTML.includes(" open"));
  let reloaded = start(storage);
  assert.equal(reloaded.$("learningFocus").value, CAD);
  assert.equal(reloaded.$("learningTaskSelect").value, task);
  assert.deepEqual(JSON.parse(storage.getItem("bossLearningLogs")), [legacy]);
  assert.deepEqual(JSON.parse(storage.getItem("bossJobRecords")), oldJobs);
  reloaded.$("learningFocus").value = ORIGINAL[1];
  reloaded.$("learningFocus").trigger("change");
  reloaded.$("learningFocus").value = CAD;
  reloaded.$("learningFocus").trigger("change");
  assert.equal(reloaded.$("learningTaskSelect").value, task);
});

test("保存CAD证据、累计实际分钟数、进度更新、刷新后历史记录仍兼容", () => {
  const previous = { focus: ORIGINAL[3], task: "定义整理标准",
    evidence: "old.csv", minutes: 30, time: "2026/10/25 08:30:00" };
  const storage = new MemoryStorage({ bossLearningLogs: JSON.stringify([previous]) });
  const app = start(storage);
  app.$("learningFocus").value = CAD;
  app.$("learningFocus").trigger("change");
  assert.match(app.$("learningTaskSelect").value, /今天开画/);
  app.$("learningTaskMinutes").value = "95";
  app.$("learningEvidence").value = "C:/CAD/CAD01_单房间起步.dwg";
  app.$("saveLearningBtn").trigger("click");
  const logs = JSON.parse(storage.getItem("bossLearningLogs"));
  assert.equal(logs.length, 2);
  assert.deepEqual(logs[1], previous);
  assert.equal(logs[0].focus, CAD);
  assert.equal(logs[0].minutes, 95);
  assert.equal(app.$("learningMinutes").textContent, "125 分钟");
  assert.match(app.$("learningTasks").innerHTML, /1 \/ 24 项/);
  assert.match(app.$("learningTaskSelect").value, /熟悉基础命令/);
  const reloaded = start(storage);
  assert.equal(reloaded.$("learningLogCount").textContent, "2");
  assert.equal(reloaded.$("learningMinutes").textContent, "125 分钟");
  assert.match(reloaded.$("learningHistory").innerHTML, /CAD01_单房间起步.dwg/);
  assert.match(reloaded.$("learningHistory").innerHTML, /old.csv/);
  assert.match(reloaded.$("learningTasks").innerHTML, /已记录/);
});

test("非法时间和空成果不得保存，HTML文本正常转义", () => {
  const app = start();
  app.$("learningFocus").value = CAD;
  app.$("learningFocus").trigger("change");
  app.$("saveLearningBtn").trigger("click");
  assert.equal(app.evaluate("getLearningLogs().length"), 0);
  app.$("learningEvidence").value = "<img src=x onerror=alert(1)>";
  app.$("learningTaskMinutes").value = "0";
  app.$("saveLearningBtn").trigger("click");
  assert.equal(app.evaluate("getLearningLogs().length"), 0);
  app.$("learningTaskMinutes").value = "45";
  app.$("saveLearningBtn").trigger("click");
  assert.ok(app.$("learningHistory").innerHTML.includes("&lt;img"));
  assert.ok(!app.$("learningHistory").innerHTML.includes("<img "));
});

test("保留原CSV表头、正确转义逗号和引号，并包含CAD新数据", async () => {
  const storage = new MemoryStorage({ bossLearningLogs: JSON.stringify([{
    focus: ORIGINAL[0], task: "原任务", evidence: 'a,"b"', minutes: 20, time: "旧时间"
  }]) });
  const app = start(storage);
  app.$("learningFocus").value = CAD;
  app.$("learningFocus").trigger("change");
  app.$("learningEvidence").value = 'C:/work/"cad".dwg';
  app.$("saveLearningBtn").trigger("click");
  app.$("exportLearningBtn").trigger("click");
  assert.equal(app.downloads(), 1);
  const csv = await app.blob().text();
  const fileBytes = Buffer.from(await app.blob().arrayBuffer());
  assert.equal(fileBytes.subarray(0, 3).toString("hex"), "efbbbf"); // Excel可识别的UTF-8 BOM
  assert.ok(csv.replace(/^\ufeff/, "").startsWith("学习方向,任务,成果证据,分钟,完成时间"));
  assert.match(csv, /CAD 室内平面制图/);
  assert.match(csv, /"a,""b"""/);
  assert.match(csv, /"C:\/work\/""cad"".dwg"/);
});

test("移动端专用样式存在，列表为可展开的任务，不挤压原布局", () => {
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.match(css, /\.cad-task > summary/);
  assert.match(css, /grid-template-columns: 26px minmax\(0, 1fr\) auto/);
  assert.match(css, /\.cad-task-body \{ padding: 0 12px 14px/);
  assert.match(css, /\.cad-pick-task \{ width: 100%/);
  const app = start();
  app.$("learningFocus").value = CAD;
  app.$("learningFocus").trigger("change");
  assert.equal((app.$("learningTasks").innerHTML.match(/<summary>/g) || []).length, 24);
});
