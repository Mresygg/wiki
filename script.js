const wikiEntries = [
  {
    category: "国家与地区",
    title: "中国",
    description: "世界人口大国之一，拥有连续数千年的文明史与多元地理环境。",
    facts: ["首都：北京", "官方语言：普通话", "代表成就：四大发明、高铁网络、数字支付生态"]
  },
  {
    category: "国家与地区",
    title: "巴西",
    description: "拉丁美洲面积最大的国家，生物多样性丰富，拥有亚马逊雨林。",
    facts: ["首都：巴西利亚", "官方语言：葡萄牙语", "代表文化：桑巴、狂欢节、足球"]
  },
  {
    category: "国家与地区",
    title: "埃及",
    description: "连接非洲与中东的文明古国，尼罗河孕育了古埃及文明。",
    facts: ["首都：开罗", "语言：阿拉伯语", "地标：吉萨金字塔、狮身人面像"]
  },
  {
    category: "历史与文明",
    title: "文艺复兴",
    description: "14-17世纪欧洲文化运动，推动艺术、科学与人文思想转型。",
    facts: ["核心地区：意大利城邦", "代表人物：达·芬奇、米开朗基罗", "影响：现代科学与现代国家观念形成"]
  },
  {
    category: "历史与文明",
    title: "丝绸之路",
    description: "连接亚欧非的古代贸易与文化交流网络，不仅运输丝绸，也传播技术与思想。",
    facts: ["横跨：中国—中亚—地中海", "交换内容：香料、玻璃、纸张、宗教", "意义：早期全球化通道"]
  },
  {
    category: "科学与技术",
    title: "量子力学",
    description: "描述微观粒子行为的核心理论，是现代物理和信息技术基础。",
    facts: ["关键概念：叠加、纠缠、不确定性", "应用：半导体、激光、核磁共振", "前沿：量子计算与量子通信"]
  },
  {
    category: "科学与技术",
    title: "人工智能",
    description: "通过算法让机器执行感知、推理与生成任务，正广泛影响产业与社会。",
    facts: ["分支：机器学习、深度学习、强化学习", "应用：医疗、教育、自动驾驶、创作", "挑战：伦理、公平、隐私与安全"]
  },
  {
    category: "自然与地理",
    title: "亚马逊雨林",
    description: "全球最大的热带雨林生态系统之一，被称为“地球之肺”。",
    facts: ["覆盖：南美洲多个国家", "价值：碳循环、生物多样性、气候调节", "风险：砍伐与火灾"]
  },
  {
    category: "自然与地理",
    title: "喜马拉雅山脉",
    description: "世界海拔最高山系，形成于板块碰撞，影响亚洲气候系统。",
    facts: ["主峰：珠穆朗玛峰", "地质机制：印度板块与欧亚板块碰撞", "影响：冰川水源、季风系统"]
  },
  {
    category: "文化与艺术",
    title: "电影",
    description: "20世纪以来最具影响力的综合艺术形式之一，融合叙事、影像与声音。",
    facts: ["重要工业：好莱坞、宝莱坞、华语电影", "代表奖项：奥斯卡、戛纳、柏林电影节", "趋势：流媒体与虚拟制作"]
  },
  {
    category: "文化与艺术",
    title: "世界音乐",
    description: "涵盖各地区民族传统与现代流行风格，映射社会与身份认同。",
    facts: ["类型：古典、爵士、摇滚、电子、民谣", "工具：乐器与数字音频工作站", "交流：跨文化合作与融合"]
  },
  {
    category: "语言与社会",
    title: "语言家族",
    description: "世界语言可按历史源流划分为语系，反映人群迁徙与文化接触。",
    facts: ["常见语系：印欧、汉藏、闪含、尼日尔-刚果", "重要性：翻译、教育、文化保护", "趋势：濒危语言数字化保存"]
  },
  {
    category: "语言与社会",
    title: "城市化",
    description: "人口向城市集中并形成都市系统的长期过程，深刻塑造现代社会结构。",
    facts: ["驱动：工业化、就业、教育和基础设施", "挑战：住房、交通、污染", "机会：创新集群与公共服务规模化"]
  },
  {
    category: "未来与全球议题",
    title: "气候变化",
    description: "长期气候系统变化与极端天气增加，已成为全球协同治理核心议题。",
    facts: ["驱动：温室气体排放", "行动：减排、碳市场、清洁能源", "共识：需要国际合作与技术转型"]
  },
  {
    category: "未来与全球议题",
    title: "太空探索",
    description: "人类向近地轨道、月球、火星及更远深空拓展，推动科学与工程创新。",
    facts: ["里程碑：阿波罗登月、空间站、火星探测车", "参与者：各国航天机构与商业公司", "前景：深空通信、资源利用、行星防御"]
  }
];

const grid = document.getElementById("wikiGrid");
const template = document.getElementById("cardTemplate");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const categoryNav = document.getElementById("categoryNav");
const stats = document.getElementById("stats");

let activeCategory = "全部";

const categories = ["全部", ...new Set(wikiEntries.map((entry) => entry.category))];

function renderCategories() {
  categoryNav.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = `category-btn ${category === activeCategory ? "active" : ""}`;
    btn.textContent = category;
    btn.type = "button";
    btn.addEventListener("click", () => {
      activeCategory = category;
      renderCategories();
      renderEntries();
    });
    categoryNav.appendChild(btn);
  });
}

function normalizedText(text) {
  return text.trim().toLowerCase();
}

function filterEntries() {
  const keyword = normalizedText(searchInput.value);

  return wikiEntries.filter((entry) => {
    const inCategory = activeCategory === "全部" || entry.category === activeCategory;

    if (!inCategory) {
      return false;
    }

    if (!keyword) {
      return true;
    }

    const haystack = `${entry.category} ${entry.title} ${entry.description} ${entry.facts.join(" ")}`.toLowerCase();

    return haystack.includes(keyword);
  });
}

function renderEntries() {
  const result = filterEntries();
  grid.innerHTML = "";

  stats.textContent = `已收录 ${wikiEntries.length} 个词条，当前显示 ${result.length} 个。`;

  if (result.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "没有找到匹配词条，请尝试其他关键词或切换分类。";
    grid.appendChild(empty);
    return;
  }

  result.forEach((entry) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".chip").textContent = entry.category;
    node.querySelector("h2").textContent = entry.title;
    node.querySelector(".desc").textContent = entry.description;

    const factsList = node.querySelector(".facts");
    entry.facts.forEach((fact) => {
      const li = document.createElement("li");
      li.textContent = fact;
      factsList.appendChild(li);
    });

    grid.appendChild(node);
  });
}

searchInput.addEventListener("input", renderEntries);
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "全部";
  renderCategories();
  renderEntries();
  searchInput.focus();
});

renderCategories();
renderEntries();
