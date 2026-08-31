const learningPaths = {
  "AI＋跨境电商内容执行": {
    keywords: ["跨境", "电商", "亚马逊", "独立站", "shopify", "tiktok shop", "商品", "listing"],
    reason: "把跨境电商和 AI 工具能力合成一个可以求职、展示或接单的作品。",
    tasks: [
      ["拆一份真实商品需求", "任选一个真实商品，整理目标客户、使用场景、3 个竞品卖点和 10 个关键词。", "一页商品需求卡，信息来源和假设分开写清楚。", 30],
      ["做一个商品内容包", "完成英文标题、5 条卖点、详情描述、关键词、图片提示词和竞品差异。", "一份可以发给客户或 HR 的完整案例。", 75],
      ["拿作品换真实反馈", "把案例用于 1 个匹配岗位或发给 1 位潜在客户，由你人工发送。", "记录岗位或客户类型、发出的内容和真实回复状态。", 20]
    ]
  },
  "AI 工具与简单自动化": {
    keywords: ["ai", "chatgpt", "gpt", "prompt", "提示词", "自动化", "智能工具", "python"],
    reason: "把 AI 使用能力变成一个能演示、能复用、能节省时间的小工具。",
    tasks: [
      ["找到一个重复动作", "从求职、资料整理或跨境电商中选择一个每周重复 3 次以上的动作。", "写清输入、处理步骤、输出和当前耗时。", 20],
      ["做出最小可用工具", "用 Python、网页或现有 AI 工具完成最短流程，只保留一个核心功能。", "可运行工具、启动方式和一份示例输出。", 90],
      ["录一次真实验证", "用真实输入跑通工具，记录修改前后耗时，并让 1 位用户试用。", "运行截图、耗时对比和一条真实反馈。", 20]
    ]
  },
  "内容运营与文案": {
    keywords: ["内容运营", "新媒体", "文案", "编辑", "短视频", "脚本", "公众号", "社媒"],
    reason: "用成品证明内容理解、选题、表达和交付能力。",
    tasks: [
      ["拆解一个对标内容", "选择一条目标行业的高质量内容，拆出标题、开头、结构、证据和行动引导。", "一页拆解表和 3 条可复用规律。", 25],
      ["完成一份内容成品", "围绕同一主题写一条完整图文或 60 秒短视频脚本。", "一份可直接发布或放进作品集的成稿。", 60],
      ["获取一次外部反馈", "让目标读者回答：哪里看不懂，哪里不想继续看？", "原始反馈和据此完成的一处修改。", 20]
    ]
  },
  "数据与资料整理": {
    keywords: ["数据", "资料", "表格", "excel", "录入", "统计", "整理", "文档"],
    reason: "这是远程执行类岗位的高频基本功，适合快速做出前后对比样例。",
    tasks: [
      ["定义整理标准", "找一份不含隐私的杂乱数据，写清字段、命名、缺失值和重复项规则。", "一页数据字典和清洗规则。", 20],
      ["完成一次清洗交付", "完成去重、格式统一、缺失值标记和汇总。", "原始样例、整理后文件和 5 行以内处理说明。", 60],
      ["验证可用性", "随机抽查 10 行，并让另一人按说明找到一个结论。", "抽查结果、发现的问题和修正版文件。", 20]
    ]
  },
  "PPT 与商业表达": {
    keywords: ["ppt", "演示", "汇报", "提案", "商业计划", "路演"],
    reason: "把 PPT 能力升级为可以解决商业沟通问题的作品。",
    tasks: [
      ["写清汇报目标", "用一句话写清受众、问题和希望对方采取的行动。", "一页包含受众、结论、证据和行动的内容骨架。", 20],
      ["做 5 页商业小稿", "完成封面、问题、方案、证据和行动 5 页。", "一份可加入作品集的 PPTX 或 PDF。", 75],
      ["做 30 秒可读性测试", "让真实读者看 30 秒并复述核心结论，再按偏差修改。", "复述结果、修改点和最终版本。", 15]
    ]
  },
  "网站内容维护": {
    keywords: ["网站", "网页", "wordpress", "shopify", "cms", "前端", "页面维护"],
    reason: "用一个可访问的小页面证明执行力和基础网站能力。",
    tasks: [
      ["定义一个页面任务", "选择商品页、作品集或活动页，明确受众、核心信息和主要按钮。", "一页页面结构草图和验收清单。", 20],
      ["完成可运行页面", "做出电脑和手机都可用的最小页面。", "本地可运行页面、启动方式和双端截图。", 90],
      ["让真实用户完成任务", "请一位用户完成主要操作，记录卡点并修复一个问题。", "测试记录、修复说明和更新后截图。", 20]
    ]
  },
  "线上协作与客户支持": {
    keywords: ["客服", "客户支持", "线上助理", "虚拟助理", "项目助理", "商务助理", "协作"],
    reason: "远程岗位需要信息确认、进度同步和问题闭环能力。",
    tasks: [
      ["拆一条真实需求", "选一条岗位或客户需求，写出已知、未知、风险和 3 个确认问题。", "一页需求确认单。", 20],
      ["模拟一次完整交付", "按需求完成任务，并写开始确认、进度同步和交付说明。", "交付物和三段可复制的协作消息。", 50],
      ["复盘一次闭环", "检查文件位置、使用方法、验收方式和失败处理是否完整。", "一份可复用的远程交付检查表。", 15]
    ]
  }
};

const learningStorageKey = "bossLearningLogs";

function getLearningLogs() {
  try {
    const value = JSON.parse(localStorage.getItem(learningStorageKey) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function setLearningLogs(logs) {
  localStorage.setItem(learningStorageKey, JSON.stringify(logs));
}

function recommendedLearningFocus(records) {
  const scores = Object.fromEntries(Object.keys(learningPaths).map((name) => [name, 0]));
  records.forEach((record) => {
    const text = `${record.title || ""} ${record.description || ""}`.toLowerCase();
    Object.entries(learningPaths).forEach(([name, config]) => {
      scores[name] += config.keywords.filter((keyword) => text.includes(keyword.toLowerCase())).length;
    });
  });
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return winner && winner[1] > 0 ? winner[0] : "AI＋跨境电商内容执行";
}

function learningEvidenceTitles(records, focus) {
  const keywords = learningPaths[focus].keywords;
  return records
    .filter((record) => keywords.some((keyword) => `${record.title || ""} ${record.description || ""}`.toLowerCase().includes(keyword.toLowerCase())))
    .map((record) => record.title || "未命名岗位")
    .filter((title, index, items) => items.indexOf(title) === index)
    .slice(0, 3);
}

function renderLearningHistory() {
  const logs = getLearningLogs();
  $("learningLogCount").textContent = String(logs.length);
  $("learningMinutes").textContent = `${logs.reduce((sum, log) => sum + Number(log.minutes || 0), 0)} 分钟`;
  const container = $("learningHistory");
  if (!logs.length) {
    container.innerHTML = '<div class="empty-state">还没有成果。先完成第一项任务，并保存可验证的结果。</div>';
    return;
  }
  container.innerHTML = logs.slice(0, 12).map((log) => `
    <article class="history-item">
      <div><span>${escapeHtml(log.focus)}</span><time>${escapeHtml(log.time)}</time></div>
      <strong>${escapeHtml(log.task)}</strong>
      <p>${escapeHtml(log.evidence)}</p>
      <small>${Number(log.minutes || 0)} 分钟</small>
    </article>
  `).join("");
}

function renderLearningPlan() {
  const focus = $("learningFocus").value;
  const config = learningPaths[focus];
  const records = getRecords();
  const titles = learningEvidenceTitles(records, focus);
  $("learningJobCount").textContent = String(records.length);
  $("learningSource").textContent = titles.length
    ? `来自本机岗位记录：${titles.join("、")}`
    : records.length
      ? "现有岗位未命中该方向，先按你的选择练习"
      : "暂无岗位记录，先按默认成长主线练习";
  $("learningReason").textContent = config.reason;
  $("learningTasks").innerHTML = config.tasks.map((task, index) => `
    <article class="task-card">
      <span class="task-number">0${index + 1}</span>
      <div>
        <h3>${escapeHtml(task[0])}<small>约 ${task[3]} 分钟</small></h3>
        <p>${escapeHtml(task[1])}</p>
        <div class="deliverable"><strong>验收成果</strong>${escapeHtml(task[2])}</div>
      </div>
    </article>
  `).join("");
  $("learningTaskSelect").innerHTML = config.tasks.map((task) => `<option value="${escapeHtml(task[0])}">${escapeHtml(task[0])}</option>`).join("");
  $("learningTaskMinutes").value = String(config.tasks[0][3]);
}

function renderLearning() {
  const records = getRecords();
  const focusSelect = $("learningFocus");
  if (!focusSelect.options.length) {
    focusSelect.innerHTML = Object.keys(learningPaths).map((focus) => `<option value="${escapeHtml(focus)}">${escapeHtml(focus)}</option>`).join("");
    focusSelect.value = recommendedLearningFocus(records);
  }
  renderLearningPlan();
  renderLearningHistory();
}

function exportLearningLogs() {
  const logs = getLearningLogs();
  const header = ["学习方向", "任务", "成果证据", "分钟", "完成时间"];
  const rows = logs.map((log) => [log.focus, log.task, log.evidence, log.minutes, log.time].map(csvEscape).join(","));
  const csv = "\ufeff" + [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "实战学习成果.csv";
  anchor.click();
  URL.revokeObjectURL(url);
}

$("learningFocus").addEventListener("change", renderLearningPlan);
$("learningTaskSelect").addEventListener("change", () => {
  const task = learningPaths[$("learningFocus").value].tasks.find((item) => item[0] === $("learningTaskSelect").value);
  if (task) $("learningTaskMinutes").value = String(task[3]);
});
$("saveLearningBtn").addEventListener("click", () => {
  const evidence = $("learningEvidence").value.trim();
  const minutes = Number($("learningTaskMinutes").value);
  if (!evidence) {
    alert("请填写文件路径、链接、完成内容或真实反馈。只写学完了不算成果。");
    return;
  }
  if (!Number.isFinite(minutes) || minutes < 1) {
    alert("请填写正确的实际投入分钟数。");
    return;
  }
  const logs = getLearningLogs();
  logs.unshift({
    focus: $("learningFocus").value,
    task: $("learningTaskSelect").value,
    evidence,
    minutes,
    time: new Date().toLocaleString()
  });
  setLearningLogs(logs);
  $("learningEvidence").value = "";
  renderLearningHistory();
  alert("成果已保存在当前手机浏览器。下一步优先拿作品换一次真实反馈。");
});
$("exportLearningBtn").addEventListener("click", exportLearningLogs);

window.renderLearning = renderLearning;
renderLearning();

