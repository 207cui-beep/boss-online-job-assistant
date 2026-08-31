const remoteKeywords = ["线上办公", "远程办公", "居家办公", "在家办公", "远程", "居家", "线上", "弹性办公", "弹性工作", "不限地点", "无需坐班", "可远程"];
const preferredRoles = ["跨境电商运营助理", "电商运营助理", "运营助理", "内容运营", "新媒体运营", "文案编辑", "资料整理", "数据整理", "AI工具运营", "AI内容助理", "PPT制作", "网站内容维护", "项目助理", "商务助理", "在线客服", "客服支持", "线上助理", "虚拟助理", "远程执行"];
const severeRisks = ["主播", "助播", "团播", "直播销售", "娱乐直播", "颜值直播", "语音直播", "陪聊", "聊天员", "纯销售", "电话销售", "电销", "保险", "贷款", "信贷", "招商加盟", "培训贷", "先交钱", "押金", "收费培训", "刷单", "点赞员", "私域引流", "灰产"];
const negativeKeywords = ["强制坐班", "必须到公司", "全职坐班", "线下办公", "无责底薪", "高提成", "月入过万", "客户开发", "陌拜", "地推", "邀约客户", "销售转化", "本科及以上", "本科以上", "3年以上", "五年以上"];

let lastAnalysis = null;

const $ = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hits(text, words) {
  return words.filter((word) => text.includes(word.toLowerCase()));
}

function uniq(items) {
  return [...new Set(items.filter(Boolean))];
}

function jobFromForm() {
  return {
    title: $("jobTitle").value.trim(),
    company: $("company").value.trim(),
    city: $("city").value.trim(),
    salary: $("salary").value.trim(),
    workMode: $("workMode").value,
    link: $("jobLink").value.trim(),
    description: $("description").value.trim()
  };
}

function combined(job) {
  return Object.values(job).join("\n").toLowerCase();
}

function hasAny(text, words) {
  return hits(text, words).length > 0;
}

function salaryTooLow(salary) {
  if (!salary) return false;
  const text = salary.toLowerCase().replace(/\s/g, "");
  if (text.includes("面议") || text.includes("提成")) return false;
  const nums = [...text.matchAll(/\d+(?:\.\d+)?/g)].map((m) => Number(m[0]));
  if (!nums.length) return false;
  if (text.includes("k") || text.includes("千")) return Math.max(...nums) < 3;
  return text.includes("元") && Math.max(...nums) < 3000;
}

function analyze(job) {
  const text = combined(job);
  let score = 50;
  const match = [];
  const mismatch = [];
  const risks = [];
  const advantages = [];
  const remote = hits(text, remoteKeywords);
  const roles = hits(text, preferredRoles);
  const severe = hits(text, severeRisks);
  const negative = hits(text, negativeKeywords);

  if (remote.length) {
    score += 22;
    match.push(`岗位包含线上/远程/弹性办公信号：${remote.slice(0, 5).join("、")}`);
    advantages.push("线上协作");
  } else {
    mismatch.push("没有明确写出线上、远程、居家或弹性办公");
  }

  if (roles.length) {
    score += Math.min(18, 8 + roles.length * 3);
    match.push(`岗位方向与目标岗位接近：${roles.slice(0, 5).join("、")}`);
    advantages.push("执行力", "资料整理", "内容处理");
  }

  if (hasAny(text, ["大专", "专科", "学历不限", "不限学历"])) {
    score += 8;
    match.push("学历门槛对大专更友好");
  }
  if (hasAny(text, ["不限经验", "经验不限", "应届", "实习", "学生", "小白可", "可培养"])) {
    score += 10;
    match.push("经验要求较友好，适合学生或初级求职者");
  }
  if (hasAny(text, ["资料", "数据", "表格", "文档", "整理", "录入", "内容", "文案", "运营辅助", "客服"])) {
    score += 10;
    match.push("工作内容偏资料整理、内容处理或线上执行");
    advantages.push("资料整理", "内容整理");
  }
  if (hasAny(text, ["ai", "chatgpt", "gpt", "人工智能", "智能工具", "prompt", "提示词"])) {
    score += 6;
    match.push("岗位能结合 AI 工具使用");
    advantages.push("AI工具");
  }
  if (hasAny(text, ["跨境", "电商", "亚马逊", "独立站", "shopify", "虾皮", "tiktok shop"])) {
    score += 7;
    match.push("岗位与跨境电商或电商运营方向相关");
    advantages.push("跨境电商学习实践");
  }
  if ((job.city + job.description).includes("武汉")) {
    score += 4;
    match.push("城市与武汉优先目标匹配");
  }
  if (/\d/.test(job.salary) || job.salary.includes("面议")) {
    score += 3;
    match.push("薪资信息相对清晰");
  }
  if (salaryTooLow(job.salary)) {
    score -= 10;
    mismatch.push("薪资区间偏低，需要确认工作量和结算方式");
  }
  if (hasAny(text, ["线下办公", "必须到公司", "强制坐班", "全职坐班"])) {
    score -= 22;
    mismatch.push("岗位偏线下或强制坐班，不符合优先线上办公目标");
  }
  if (hasAny(text, ["本科及以上", "本科以上", "统招本科"])) {
    score -= 15;
    mismatch.push("存在本科及以上硬性门槛");
  }
  if (hasAny(text, ["3年以上", "三年以上", "5年以上", "五年以上", "资深"])) {
    score -= 15;
    mismatch.push("经验要求偏高");
  }
  if (negative.length) {
    score -= Math.min(25, 8 + negative.length * 4);
    mismatch.push(`存在降分信号：${negative.slice(0, 6).join("、")}`);
  }
  if (hasAny(text, ["工作内容简单", "轻松高薪", "日入", "躺赚", "无需任何技能", "大量招人"])) {
    score -= 12;
    risks.push("存在过度宣传或工作内容不清晰的信号");
  }
  if (severe.length) {
    score = Math.min(score - 35, 25);
    risks.push(`命中直接排除或强风险关键词：${severe.slice(0, 8).join("、")}`);
  }
  if (hasAny(text, ["交费", "收费", "押金", "保证金", "培训贷", "先付"])) {
    score = Math.min(score, 20);
    risks.push("涉及收费、押金或培训贷，应直接谨慎或拒绝");
  }

  score = Math.max(0, Math.min(100, Math.round(score)));
  const level = severe.length || score < 40 ? "不建议" : score < 60 ? "谨慎" : score < 80 ? "可以尝试" : "强烈建议";
  const suggest = !(severe.length || score < 40);

  return {
    score,
    level,
    suggest,
    match: uniq(match.length ? match : ["暂未看到明显匹配点，需要补充岗位详情后再判断"]),
    mismatch: uniq(mismatch.length ? mismatch : ["暂无明显不匹配点"]),
    risks: uniq(risks.length ? risks : ["暂未发现明显高风险信号，但仍需人工确认薪资结构、工作时间和是否收费"]),
    advantages: uniq([...advantages, "学习能力", "执行力", "线上协作", "AI工具", "资料整理", "内容处理"]).slice(0, 6)
  };
}

function roleFocus(job) {
  const text = `${job.title} ${job.description}`;
  if (/跨境|电商|运营/.test(text)) return "电商运营、资料整理和线上执行";
  if (/内容|文案|新媒体/.test(text)) return "内容整理、文案处理和新媒体运营辅助";
  if (/客服|在线/.test(text)) return "线上客服、信息整理和沟通支持";
  if (/PPT|资料|数据|表格/.test(text)) return "资料整理、数据处理和文档制作";
  return "线上执行、资料整理和运营辅助";
}

function greetings(job, result) {
  const name = job.title || "这个岗位";
  const focus = roleFocus(job);
  const adv = result.advantages.slice(0, 4).join("、");
  return {
    "简洁直接版": `您好，我看了${name}的岗位要求，主要偏${focus}，和我目前跨境电子商务专业方向比较匹配。我平时会用AI工具辅助整理资料、处理内容和提升执行效率，方便的话想进一步了解一下岗位具体工作内容。`,
    "真诚求职版": `您好，我是跨境电子商务专业学生，正在重点找线上/远程/弹性办公相关岗位。我看这个${name}比较偏${focus}，我可以从基础执行类工作认真做起，也会用AI工具辅助提升效率，想了解一下岗位安排。`,
    "岗位匹配版": `您好，我关注到${name}的工作内容和${focus}相关，这和我的学习方向以及实践方向比较匹配。我能重点发挥${adv}等优势，适合做线上执行和运营辅助类工作，想进一步了解岗位要求和工作时间。`
  };
}

function renderAnalysis(job, result, messageMap) {
  const resultBox = $("result");
  const greetingHtml = Object.entries(messageMap).map(([name, text]) => `
    <article class="greeting">
      <h4>${escapeHtml(name)}</h4>
      <div>${escapeHtml(text)}</div>
      <div class="actions"><button data-copy="${encodeURIComponent(text)}">复制这版</button></div>
    </article>
  `).join("");

  resultBox.innerHTML = `
    <div class="score-row">
      <div class="metric">匹配度<strong>${result.score}/100</strong></div>
      <div class="metric">推荐等级<strong>${result.level}</strong></div>
      <div class="metric">建议沟通<strong>${result.suggest ? "是" : "否"}</strong></div>
    </div>
    <div class="blocks">
      <div class="block"><h3>匹配原因</h3><ul>${result.match.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
      <div class="block"><h3>不匹配原因</h3><ul>${result.mismatch.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
      <div class="block"><h3>风险提醒</h3><ul>${result.risks.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
      <div class="block"><h3>建议突出优势</h3><ul>${result.advantages.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul></div>
    </div>
    <div class="block"><h3>BOSS 打招呼语</h3>${greetingHtml}</div>
  `;
  resultBox.classList.remove("hidden");
}

function getRecords() {
  try {
    const value = JSON.parse(localStorage.getItem("bossJobRecords") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function setRecords(records) {
  localStorage.setItem("bossJobRecords", JSON.stringify(records));
}

function renderRecords() {
  const tbody = document.querySelector("#recordsTable tbody");
  const rows = getRecords();
  tbody.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.title || "-")}</td>
      <td>${escapeHtml(row.city || "-")}</td>
      <td>${escapeHtml(row.salary || "-")}</td>
      <td>${escapeHtml(row.score)}</td>
      <td>${escapeHtml(row.level)}</td>
      <td>${escapeHtml(row.status)}</td>
    </tr>
  `).join("");
}

function replyFor(type, job) {
  const replies = {
    "要简历": "可以的，我稍后把简历发您。也想同步确认一下，这个岗位主要负责哪些日常工作？是否支持线上/远程办公，以及薪资结构和工作时间大概是怎样的？",
    "问经验": "我目前主要是跨境电子商务专业学习和线上工具实践，做过资料整理、内容处理、PPT制作和简单网站维护相关练习。如果岗位偏基础执行、运营辅助或内容整理，我可以较快上手，也愿意按流程稳定完成任务。",
    "问薪资": "我的期望是按岗位工作量和远程/线上安排来匹配，优先看工作内容是否清晰、结算方式是否稳定。方便的话，您可以先介绍一下薪资结构、试用期安排和是否有绩效或提成部分吗？",
    "问到岗时间": "如果是线上或远程岗位，我可以较快开始配合；如果需要线下到岗，需要看具体地点和时间安排。请问这个岗位前期是线上培训还是需要到公司？",
    "约面试": "可以的，我愿意进一步沟通。请问面试是线上还是线下？大概需要准备简历、作品或测试任务吗？我这边会提前准备好相关资料。",
    "问作品": "可以，我可以整理一些和岗位相关的资料整理、PPT、内容处理或简单页面维护案例给您参考。请问您更想看哪一类作品，偏运营内容、表格资料，还是PPT/页面整理？",
    "让加微信": "可以，我可以加微信继续沟通。加之前想先确认一下岗位的具体工作内容、办公方式、薪资结构，以及是否存在任何收费、押金或培训贷，这样我也方便判断是否合适。",
    "问是否接受线下": "我目前优先考虑线上、远程、居家或弹性办公。如果只是偶尔线下沟通可以看具体安排，但如果长期强制坐班，可能和我的当前求职方向不太匹配。",
    "问是否长期做": "如果岗位内容清晰、结算稳定，并且适合线上长期协作，我是愿意稳定做的。也想了解一下这个岗位的工作周期、考核方式和每天大概投入时间。",
    "拒绝或不合适": "好的，感谢您的回复。我理解岗位匹配有具体要求，后续如果有更偏线上执行、运营辅助、资料整理或内容处理的岗位，也欢迎再联系我。",
    "可疑内容": "我想先确认几个信息：这个岗位是否需要交费、押金、培训贷或购买课程？是否需要拉人、刷单、引流私域或做纯销售？如果涉及这些内容，我这边就不考虑了。"
  };
  return replies[type] || `好的，我了解了。关于${job || "这个岗位"}，我想进一步确认具体工作内容、办公方式、薪资结构、工作时间，以及是否有收费或培训要求。确认清楚后，我再判断是否继续沟通。`;
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const rows = getRecords();
  const header = ["岗位", "公司", "城市", "薪资", "分数", "等级", "状态", "时间"];
  const body = rows.map((r) => [r.title, r.company, r.city, r.salary, r.score, r.level, r.status, r.time].map(csvEscape).join(","));
  const csv = "\ufeff" + [header.join(","), ...body].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "BOSS求职投递记录.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function renderKeywords() {
  const items = [
    ["线上办公 运营助理", "武汉"],
    ["远程办公 电商运营助理", "不限"],
    ["居家办公 数据整理", "不限"],
    ["AI内容助理 远程", "不限"],
    ["在线客服 远程", "不限"],
    ["跨境电商运营助理", "武汉"],
    ["内容运营 远程", "不限"],
    ["新媒体运营助理 武汉", "武汉"],
    ["虚拟助理 远程", "不限"],
    ["PPT制作 远程", "不限"]
  ];
  $("keywordList").innerHTML = items.map(([key, city]) => `<div class="keyword-item"><strong>${key}</strong><span>城市：${city}</span></div>`).join("");
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((x) => x.classList.remove("active"));
    tab.classList.add("active");
    $(`panel-${tab.dataset.tab}`).classList.add("active");
    if (tab.dataset.tab === "records") renderRecords();
    if (tab.dataset.tab === "learning" && window.renderLearning) window.renderLearning();
  });
});

$("analyzeBtn").addEventListener("click", () => {
  const job = jobFromForm();
  if (!job.title && !job.description) {
    alert("至少填写岗位名称或岗位描述。");
    return;
  }
  const result = analyze(job);
  const messageMap = greetings(job, result);
  lastAnalysis = { job, result, messageMap };
  renderAnalysis(job, result, messageMap);
});

$("saveBtn").addEventListener("click", () => {
  if (!lastAnalysis) {
    alert("请先分析岗位。");
    return;
  }
  const records = getRecords();
  records.unshift({
    ...lastAnalysis.job,
    score: lastAnalysis.result.score,
    level: lastAnalysis.result.level,
    status: "待沟通",
    time: new Date().toLocaleString()
  });
  setRecords(records);
  alert("已保存到本机浏览器记录。");
});

$("replyBtn").addEventListener("click", () => {
  const type = $("replyType").value;
  const job = $("replyJob").value.trim();
  const raw = $("hrMessage").value;
  const suspicious = /交费|押金|培训|贷款|刷单|拉人|引流/.test(raw);
  $("replyOutput").textContent = suspicious ? replyFor("可疑内容", job) : replyFor(type, job);
});

$("copyReplyBtn").addEventListener("click", async () => {
  const text = $("replyOutput").textContent.trim();
  if (!text) return;
  await navigator.clipboard.writeText(text);
  alert("已复制。");
});

$("exportBtn").addEventListener("click", downloadCsv);
$("clearBtn").addEventListener("click", () => {
  if (confirm("确定清空本机浏览器里的投递记录？")) {
    setRecords([]);
    renderRecords();
  }
});

document.addEventListener("click", async (event) => {
  const btn = event.target.closest("[data-copy]");
  if (!btn) return;
  await navigator.clipboard.writeText(decodeURIComponent(btn.dataset.copy));
  alert("已复制。");
});

renderKeywords();
renderRecords();

