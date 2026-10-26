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

// 附加第八个方向，不改动原有七个方向的数据。
learningPaths["CAD 室内平面制图"] = {
  "keywords": [
    "cad",
    "autocad",
    "室内设计",
    "室内平面",
    "平面制图",
    "施工图",
    "制图员",
    "户型",
    "dwg",
    "家具布置",
    "绘图员"
  ],
  "reason": "从零训练 CAD 室内平面制图：每天约 2 小时，先完成 3.6×3.0 米房间，再独立交付一套住宅平面图。目标是在 2027-01-10 前形成可复核的 DWG＋PDF 作品集；接单前仍须做尺寸与规范复核。",
  "tasks": [
    [
      "01｜今天开画：3.6×3.0米房间",
      "新建公制图纸，UNITS 设毫米；用 RECTANG 以 (0,0) 和 (3600,3000) 画室内净空框；OFFSET 向外偏移 200 画墙线；ZOOM E 检查并 SAVEAS。今天先不画门窗。",
      "CAD01_单房间起步.dwg；CAD01_截图.png",
      120,
      "室内净空精确为3600×3000mm，墙厚200mm，四角直角且线条闭合；关闭后重新打开DWG仍能编辑，截图能看全图。",
      "第一阶段｜画出第一个房间"
    ],
    [
      "02｜熟悉基础命令与撤销",
      "在CAD01副本中练 LINE、RECTANG、CIRCLE、MOVE、COPY、ERASE、UNDO、REDO、ZOOM；画4个指定图形，逐一删改重建，最后保存。",
      "CAD02_命令练习.dwg；CAD02_操作清单.txt",
      100,
      "有矩形、圆、直线、复制图形共4组对象；能独立撤销/重做，并在清单中写出至少8个命令的用途。",
      "第一阶段｜画出第一个房间"
    ],
    [
      "03｜图层、颜色与线宽",
      "建立 WALL、DOOR、WINDOW、FURNITURE、DIM、TEXT 六个图层；分别设颜色及线宽，将房间墙线放入WALL，检查锁定和隐藏功能。",
      "CAD03_标准图层模板.dwg；CAD03_图层截图.png",
      110,
      "六个图层名称准确且各有颜色；隐藏WALL后墙线消失，重新显示恢复；墙线不在0层。",
      "第一阶段｜画出第一个房间"
    ],
    [
      "04｜坐标、正交与精准修改",
      "打开正交、对象捕捉（端点/中点/交点）；使用相对坐标和 OFFSET、TRIM、EXTEND，在房间外绘制900×1200mm测试矩形和1000mm定位线。",
      "CAD04_精准定位.dwg；CAD04_尺寸核对.txt",
      120,
      "测量矩形尺寸为900×1200mm，定位线为1000mm；所有端点正确吸附，没有肉眼对齐产生的缝隙。",
      "第一阶段｜画出第一个房间"
    ],
    [
      "05｜完整墙体与墙厚",
      "在CAD01副本中整理200mm墙体双线，使用OFFSET和TRIM消除多余交叉线；建立外墙轮廓，增加一道100mm厚的内隔墙。",
      "CAD05_墙体练习.dwg；CAD05_墙厚检查.png",
      120,
      "外墙厚200mm、隔墙厚100mm；墙角闭合，交点处无多余穿插线，实体之间不依赖徒手拖动。",
      "第二阶段｜门窗和家具"
    ],
    [
      "06｜单扇门及开启弧线",
      "在房间下侧墙上以距左内角600mm为起点，留900mm净门洞；用LINE与ARC画向室内开启的门扇，门及开启弧放DOOR层。",
      "CAD06_900门洞.dwg；CAD06_局部放大.png",
      120,
      "门洞净宽900mm；两道墙线都正确断开；门扇长度900mm、开启弧清晰，门与墙分层，门不会碰到其它墙。",
      "第二阶段｜门窗和家具"
    ],
    [
      "07｜标准窗和定位",
      "在房间上侧墙居中开1500mm窗洞；画窗框双线及玻璃中线，将窗放WINDOW层，用DIST核对窗洞宽度。",
      "CAD07_门窗房间.dwg；CAD07_窗洞截图.png",
      110,
      "窗洞1500mm且水平居中；内外墙线同时断开，窗框有独立图层，无残留断线。",
      "第二阶段｜门窗和家具"
    ],
    [
      "08｜放入床、桌和柜",
      "以毫米为单位创建并布置1500×2000mm床、1200×600mm书桌、1800×600mm衣柜；先用矩形表达，再转成可复用块BLOCK。",
      "CAD08_卧室家具.dwg；CAD08_家具块清单.txt",
      120,
      "床、桌、柜三个尺寸正确且在FURNITURE层；至少建立3个独立块；门扇可正常开启，主要通道宽度标注不小于600mm（练习目标，非规范判定）。",
      "第二阶段｜门窗和家具"
    ],
    [
      "09｜文字、尺寸与面积",
      "建立DIM标注样式，标出房间净长净宽、门洞900mm、窗洞1500mm及两种墙厚；用TEXT/MTEXT写房间名和净面积。",
      "CAD09_卧室尺寸图.dwg；CAD09_标注截图.png",
      120,
      "显示3600与3000mm净尺寸；净面积10.80㎡；标注关联实测对象、字不压线、单位统一，标注图层正确。",
      "第二阶段｜门窗和家具"
    ],
    [
      "10｜打印首张房间平面图",
      "在布局空间设置A4横向纸张、1:50视口，配置黑白打印样式与线宽；预览无裁切后导出PDF，并重新打开核对。",
      "CAD10_卧室平面图.dwg；CAD10_卧室平面图.pdf",
      120,
      "PDF页数为1，图纸完整；标注清晰无错码；标题含房间名、比例1:50和绘图日期，DWG与PDF内容一致。",
      "第二阶段｜门窗和家具"
    ],
    [
      "11｜厨房与卫生间基础块",
      "画600mm深操作台、灶台、洗涤盆、马桶、洗手盆、淋浴区的俯视简化块；标注每个块的参考尺寸及适用范围。",
      "CAD11_厨卫常用块.dwg；CAD11_块尺寸表.csv",
      120,
      "至少6类块可通过INSERT重复插入；块不含无关散线，尺寸表中的参考尺寸与实际绘图一致，尺寸不是强制施工规范。",
      "第三阶段｜空间组合"
    ],
    [
      "12｜绘制两房组合户型",
      "在统一图层模板中组合两间房和走道，补出隔墙、两樘门与一扇窗；使用DIST检查走道净宽并制作基础标注。",
      "CAD12_双房间组合.dwg；CAD12_预览.pdf",
      120,
      "两个空间有独立边界且门能通行；至少2樘门和1扇窗；过道净宽≥900mm作为练习目标，且交接墙体无断漏。",
      "第三阶段｜空间组合"
    ],
    [
      "13｜住宅资料与绘图约定",
      "采用虚拟两居室练习数据：建筑外轮廓10000×8000mm、外墙200mm、内墙100mm；列出客厅、两卧、厨、卫、过道的关系和预期门窗位置；统一图层及命名。",
      "CAD13_两居室需求说明.md；CAD13_布局草图.png",
      90,
      "写清外轮廓、墙厚、房间列表、门窗数量和画图假设；方案注明“虚拟练习，非真实测绘/施工依据”。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "14｜住宅外墙及隔墙",
      "按CAD13约定画10000×8000mm外轮廓及200mm外墙，再按草图规划至少6个房间/区域；用OFFSET画100mm内墙，TRIM整理墙角。",
      "CAD14_两居室墙体.dwg；CAD14_墙体检查.png",
      120,
      "外轮廓精确10000×8000mm；外墙200mm、内墙100mm；至少6个功能区域可辨认，墙线无明显重叠和悬空端点。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "15｜安装全屋门窗",
      "设置900mm入户门、800mm卧室门、700mm卫生间门等练习尺寸；根据空间布置门窗、标开启方向和窗线，并测量全部洞口。",
      "CAD15_两居室门窗.dwg；CAD15_洞口尺寸表.csv",
      120,
      "全屋至少5樘门、4扇窗，门洞宽与表格一致；墙体双线均按洞口截断，门扇开启方向无明显冲突。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "16｜客厅与卧室家具布局",
      "在CAD15上布置沙发、茶几、电视柜、餐桌、两张床和衣柜；用块复用并测量主要行走净宽。",
      "CAD16_家具布置方案A.dwg；CAD16_家具清单.csv",
      120,
      "至少8个家具对象且按类别分层；各家具块尺寸可查；主要通道净宽写入清单，明显碰撞或挡门已消除。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "17｜厨房卫浴布局",
      "使用CAD11块为厨房布置灶、洗、操作台，为卫生间布置厕、浴、洗；检查门开启及设备之间的冲突。",
      "CAD17_厨卫布置.dwg；CAD17_冲突检查.txt",
      120,
      "厨卫设备各至少3项；标注台面深度和主要净距；记录至少3条检查项及结论，所有块属于正确图层。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "18｜房间名称与编号",
      "添加每个房间名称、净面积、门窗编号和图例，统一文字高度和标注样式；把家具、墙体、文字分层展示。",
      "CAD18_住宅信息标记.dwg；CAD18_图例说明.pdf",
      110,
      "至少6个空间名称且面积计算方法一致；文字不相互覆盖、图层正确，图例能解释主要线型与符号。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "19｜全屋尺寸链与校核",
      "建立三层尺寸链（洞口、分段、总尺寸）；测量外轮廓及关键房间净尺寸，对照CAD13尺寸与开口表逐项核对。",
      "CAD19_全屋标注图.dwg；CAD19_尺寸核对.csv",
      120,
      "横向外总尺寸10000mm、纵向8000mm；关键房间与门窗有尺寸；无空值、矛盾尺寸或明显标注遮挡。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "20｜A3布局与双份图纸",
      "创建A3横版布局；分别输出1:100住宅原始平面图和1:100家具布置图（两个布局或两份PDF），统一图名、日期和比例。",
      "CAD20_两居室交付版.dwg；CAD20_原始平面.pdf；CAD20_家具布置.pdf",
      120,
      "两份PDF均单页、无裁切，比例文字正确；墙线、门窗、家具、尺寸和标题栏清晰，PDF与DWG对应。",
      "第四阶段｜完整住宅平面"
    ],
    [
      "21｜清理与二次复核",
      "复制交付版执行PURGE和OVERKILL（支持时）；检查断线、重复线、图层错误、误放的家具以及尺寸标注一致性，并记录改动。",
      "CAD21_质量复核.dwg；CAD21_复核清单.csv",
      120,
      "复核清单覆盖墙厚、洞口、净尺寸、图层、重复线、PDF六类；至少10条逐项标记通过或修复，旧版DWG保留。",
      "第五阶段｜模拟接单"
    ],
    [
      "22｜根据客户需求制作B方案",
      "模拟需求：主卧增加1200mm书桌并保持门通畅、客厅新增储物柜；复制A方案做B方案，不改动已确认的外轮廓尺寸。",
      "CAD22_家具布置方案B.dwg；CAD22_A_B对比.pdf",
      120,
      "A/B两个版本均保留；两项需求有体现，家具不挡门；对比PDF清楚说明至少3处差异或取舍。",
      "第五阶段｜模拟接单"
    ],
    [
      "23｜模拟客户提出修改并迭代",
      "模拟客户反馈：调整一处卧室门开启方向、优化衣柜位置、修正一处文字碰线；在B版上修改并记录修改前后截图。",
      "CAD23_客户修改终稿.dwg；CAD23_变更记录.md",
      110,
      "三项变更均完成；变更记录有需求、操作、核对结论及前后对比；未修改无关房间尺寸。",
      "第五阶段｜模拟接单"
    ],
    [
      "24｜打包首个CAD接单作品集",
      "将房间练习、两居室A/B方案、DWG、PDF、预览PNG和变更清单分目录归档；写一页交付说明和报价前需确认的问题。",
      "CAD24_室内平面作品集.zip；CAD24_交付说明.pdf",
      120,
      "压缩包可解压，至少包含2份DWG、3份PDF、2张预览图和变更说明；文件名统一，任意抽取1份DWG可打开，明确练习作品不冒充施工图。",
      "第五阶段｜模拟接单"
    ]
  ]
};

const learningStorageKey = "bossLearningLogs"; // 沿用原键，不迁移、不覆盖历史学习记录
const learningFocusStorageKey = "bossLearningSelectedFocus";
const learningTasksStorageKey = "bossLearningSelectedTasks";
const cadLearningFocus = "CAD 室内平面制图";

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

function getLearningSelections() {
  try {
    const value = JSON.parse(localStorage.getItem(learningTasksStorageKey) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function rememberLearningTask(focus, title) {
  const selections = getLearningSelections();
  selections[focus] = title;
  localStorage.setItem(learningTasksStorageKey, JSON.stringify(selections));
}

function recommendedLearningFocus(records) {
  const scores = Object.fromEntries(Object.keys(learningPaths).map((name) => [name, 0]));
  records.forEach((record) => {
    const text = (String(record.title || "") + " " + String(record.description || "")).toLowerCase();
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
    .filter((record) => keywords.some((keyword) =>
      (String(record.title || "") + " " + String(record.description || "")).toLowerCase().includes(keyword.toLowerCase())))
    .map((record) => record.title || "未命名岗位")
    .filter((title, index, items) => items.indexOf(title) === index)
    .slice(0, 3);
}

function renderLearningHistory() {
  const logs = getLearningLogs().filter((log) => log && typeof log === "object");
  $("learningLogCount").textContent = String(logs.length);
  $("learningMinutes").textContent = String(logs.reduce((sum, log) => sum + (Number(log.minutes) || 0), 0)) + " 分钟";
  const container = $("learningHistory");
  if (!logs.length) {
    container.innerHTML = '<div class="empty-state">还没有成果。先完成第一项任务，并保存可验证的结果。</div>';
    return;
  }
  container.innerHTML = logs.slice(0, 12).map((log) => [
    '<article class="history-item">',
    '<div><span>', escapeHtml(log.focus), '</span><time>', escapeHtml(log.time), '</time></div>',
    '<strong>', escapeHtml(log.task), '</strong>',
    '<p>', escapeHtml(log.evidence), '</p>',
    '<small>', escapeHtml(Number(log.minutes) || 0), ' 分钟</small>',
    '</article>'
  ].join("")).join("");
}

function renderLearningPlan() {
  const focus = $("learningFocus").value;
  const config = learningPaths[focus];
  if (!config) return;
  const records = getRecords();
  const titles = learningEvidenceTitles(records, focus);
  $("learningJobCount").textContent = String(records.length);
  $("learningSource").textContent = titles.length
    ? "来自本机岗位记录：" + titles.join("、")
    : records.length
      ? "现有岗位未命中该方向，先按您选择的课程练习"
      : "暂无岗位记录，先按当前选择练习";
  $("learningReason").textContent = config.reason;

  const cad = focus === cadLearningFocus;
  const completed = new Set(getLearningLogs()
    .filter((log) => log && log.focus === focus)
    .map((log) => log.task));
  const completedCount = config.tasks.filter((task) => completed.has(task[0])).length;
  const nextIndex = config.tasks.findIndex((task) => !completed.has(task[0]));
  const selectedTitle = getLearningSelections()[focus];
  let selectedIndex = config.tasks.findIndex((task) => task[0] === selectedTitle);
  if (selectedIndex < 0) selectedIndex = cad && nextIndex >= 0 ? nextIndex : 0;
  const selectedTask = config.tasks[selectedIndex];

  if (cad) {
    const nextName = nextIndex >= 0 ? config.tasks[nextIndex][0] : "已完成全部任务，可继续复练和更新作品集";
    const progress = [
      '<div class="learning-progress" role="status"><strong>CAD 课程进度：',
      completedCount, ' / ', config.tasks.length, ' 项</strong>',
      '<span>每日约120分钟 · 目标日期：2027年1月10日</span>',
      '<div class="learning-progress-bar" role="progressbar" aria-label="CAD课程完成比例" aria-valuemin="0" aria-valuemax="',
      config.tasks.length, '" aria-valuenow="', completedCount,
      '"><span style="width:', Math.round(100 * completedCount / config.tasks.length), '%"></span></div>',
      '<p>下一项未完成任务：', escapeHtml(nextName), '。依次练习并用真实文件路径记录成果。</p></div>'
    ].join("");
    let stage = "";
    const cards = config.tasks.map((task, index) => {
      const phase = task[5] || "课程任务";
      let header = "";
      if (phase !== stage) {
        stage = phase;
        header = '<h3 class="learning-stage-heading">' + escapeHtml(phase) + '</h3>';
      }
      const done = completed.has(task[0]);
      return header + [
        '<details class="cad-task', done ? ' is-complete' : '', '"', index === selectedIndex ? ' open' : '', '>',
        '<summary><span class="cad-task-index">', String(index + 1).padStart(2, "0"), '</span>',
        '<span class="cad-task-name">', escapeHtml(task[0]), '</span>',
        '<span class="cad-task-status">', done ? '已记录' : '未完成', '</span>',
        '<span class="cad-task-time">约 ', escapeHtml(task[3]), ' 分钟</span></summary>',
        '<div class="cad-task-body"><p><strong>操作目标与步骤：</strong>', escapeHtml(task[1]), '</p>',
        '<div class="deliverable"><strong>交付文件</strong>', escapeHtml(task[2]), '</div>',
        '<div class="cad-acceptance"><strong>验收标准</strong>', escapeHtml(task[4]), '</div>',
        '<button class="cad-pick-task" type="button" data-learning-task-index="', index,
        '">选择此任务并填写成果</button></div></details>'
      ].join("");
    }).join("");
    $("learningTasks").innerHTML = progress + cards;
  } else {
    $("learningTasks").innerHTML = config.tasks.map((task, index) => [
      '<article class="task-card"><span class="task-number">0', index + 1, '</span><div>',
      '<h3>', escapeHtml(task[0]), '<small>约 ', escapeHtml(task[3]), ' 分钟</small></h3>',
      '<p>', escapeHtml(task[1]), '</p>',
      '<div class="deliverable"><strong>验收成果</strong>', escapeHtml(task[2]), '</div>',
      '</div></article>'
    ].join("")).join("");
  }
  $("learningTaskSelect").innerHTML = config.tasks.map((task) =>
    '<option value="' + escapeHtml(task[0]) + '">' + escapeHtml(task[0]) + '</option>').join("");
  $("learningTaskSelect").value = selectedTask[0];
  $("learningTaskMinutes").value = String(selectedTask[3]);
}

function renderLearning() {
  const records = getRecords();
  const focusSelect = $("learningFocus");
  if (!focusSelect.options.length) {
    // 将CAD放在选项列表首位，原七个方向和默认岗位推荐规则保持不变。
    const focuses = [cadLearningFocus, ...Object.keys(learningPaths).filter((key) => key !== cadLearningFocus)];
    focusSelect.innerHTML = focuses.map((focus) =>
      '<option value="' + escapeHtml(focus) + '">' + escapeHtml(focus) + '</option>').join("");
    let storedFocus = "";
    try { storedFocus = localStorage.getItem(learningFocusStorageKey) || ""; } catch {}
    focusSelect.value = Object.hasOwn(learningPaths, storedFocus) ? storedFocus : recommendedLearningFocus(records);
  }
  renderLearningPlan();
  renderLearningHistory();
}

function exportLearningLogs() {
  const logs = getLearningLogs();
  const header = ["学习方向", "任务", "成果证据", "分钟", "完成时间"];
  const rows = logs.map((log) =>
    [log.focus, log.task, log.evidence, log.minutes, log.time].map(csvEscape).join(","));
  const csv = "\ufeff" + [header.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "实战学习成果.csv";
  anchor.click();
  URL.revokeObjectURL(url);
}

$("learningFocus").addEventListener("change", () => {
  try { localStorage.setItem(learningFocusStorageKey, $("learningFocus").value); } catch {}
  renderLearningPlan();
});

$("learningTaskSelect").addEventListener("change", () => {
  const focus = $("learningFocus").value;
  const task = learningPaths[focus].tasks.find((item) => item[0] === $("learningTaskSelect").value);
  if (!task) return;
  $("learningTaskMinutes").value = String(task[3]);
  try { rememberLearningTask(focus, task[0]); } catch {}
  // 切换CAD任务时展开对应的操作说明，保留当前填写的成果文本。
  if (focus === cadLearningFocus) renderLearningPlan();
});

$("learningTasks").addEventListener("click", (event) => {
  const button = event.target.closest("[data-learning-task-index]");
  if (!button) return;
  const index = Number(button.dataset.learningTaskIndex);
  const focus = $("learningFocus").value;
  const task = learningPaths[focus]?.tasks[index];
  if (!task) return;
  $("learningTaskSelect").value = task[0];
  $("learningTaskMinutes").value = String(task[3]);
  try { rememberLearningTask(focus, task[0]); } catch {}
  renderLearningPlan();
  $("learningEvidence").focus();
  $("learningEvidence").scrollIntoView({ behavior: "smooth", block: "center" });
});

$("saveLearningBtn").addEventListener("click", () => {
  const evidence = $("learningEvidence").value.trim();
  const minutes = Number($("learningTaskMinutes").value);
  if (!evidence) {
    alert("请填写DWG/PDF文件路径、链接、完成内容或真实反馈。只写学完了不算成果。");
    return;
  }
  if (!Number.isFinite(minutes) || minutes < 1 || minutes > 600) {
    alert("请填写1至600之间的实际投入分钟数。");
    return;
  }
  const focus = $("learningFocus").value;
  const task = $("learningTaskSelect").value;
  if (!learningPaths[focus]?.tasks.some((item) => item[0] === task)) return;
  const logs = getLearningLogs();
  logs.unshift({
    focus,
    task,
    evidence,
    minutes,
    time: new Date().toLocaleString()
  });
  setLearningLogs(logs);
  $("learningEvidence").value = "";
  if (focus === cadLearningFocus) {
    const next = learningPaths[focus].tasks.find((item) =>
      !logs.some((log) => log && log.focus === focus && log.task === item[0]));
    if (next) {
      try { rememberLearningTask(focus, next[0]); } catch {}
    }
  }
  renderLearningPlan();
  renderLearningHistory();
  alert(focus === cadLearningFocus
    ? "CAD成果已保存在当前浏览器的学习记录中；请保留原始DWG/PDF文件并按验收标准复核。"
    : "成果已保存在当前浏览器。下一步优先拿作品换一次真实反馈。");
});
$("exportLearningBtn").addEventListener("click", exportLearningLogs);

window.renderLearning = renderLearning;
renderLearning();
