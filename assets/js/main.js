const THEME_KEY = "portfolio-theme";
const LANGUAGE_KEY = "portfolio-language";
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle-label");
const themeColor = document.querySelector('meta[name="theme-color"]');
const languageButtons = document.querySelectorAll("[data-language]");
const navShell = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const scrollProgress = document.querySelector(".scroll-progress");
const hero = document.querySelector(".hero");
const routeDiagrams = document.querySelectorAll(".shopmate-system, .route-map");
const workIndex = document.querySelector(".work-index");

const translations = {
  zh: {
    "nav.skip": "跳到主要内容", "nav.menu": "菜单", "nav.work": "项目", "nav.profile": "简介", "nav.experience": "经历", "nav.education": "教育", "nav.contact": "联系", "nav.resume": "简历",
    "hero.context": "个人作品集", "hero.baseLabel": "所在地", "hero.base": "澳大利亚墨尔本", "hero.studyLabel": "院校", "hero.study": "墨尔本大学", "hero.graduatingLabel": "预计毕业", "hero.graduating": "2027 年 3 月",
    "hero.intro": "Sheldon Liu · 软件工程师", "hero.line1": "专注 AI 产品的", "hero.line2": "全栈工程师", "hero.line3": "",
    "hero.summary": "专注将大模型能力落地为可度量的产品功能，技术栈覆盖 Flutter、Web、Android、后端服务、RAG 检索与模型评测。", "hero.availability": "正在寻找墨尔本地区的软件工程岗位", "hero.workAction": "查看项目", "hero.resumeAction": "查看简历",
    "hero.proof": "关键指标", "hero.proof1": "LLM 路由准确率 · Ft.ured", "hero.proof2": "人才搜索 Top-5 召回率 · Ft.ured", "hero.proof3": "知识库问答盲评通过率，无虚构回答", "hero.proof4": "CI 中运行的自动化测试", "hero.proof5": "首 Token 延迟降幅 · ShopMate",
    "work.kicker": "02 / 项目经历", "work.title": "系统设计<br />与工程实现", "work.intro": "以下项目记录了产品范围、系统架构、数据边界、评测方法与交付过程中的关键决策。", "work.index": "项目索引",
    "actions.source": "查看源码", "actions.sourceShort": "源码", "actions.live": "访问线上版本", "actions.demo": "在线演示",
    "shopmate.type": "核心项目 / AI + Android", "shopmate.role": "独立开发者 · 2026", "shopmate.lede": "基于 RAG 的对话式电商导购应用。用户以自然语言描述需求，系统提供商品推荐、对比与问答，并支持购物车操作和模拟下单。",
    "shopmate.routeLabel": "系统链路", "shopmate.routeCopy": "用户请求由客户端发起，商品数据与写操作由后端服务统一控制。", "shopmate.client": "客户端", "shopmate.facts": "商品数据", "shopmate.retrieval": "向量检索", "shopmate.response": "流式响应",
    "shopmate.boundaryLabel": "设计原则", "shopmate.boundary": "模型负责意图识别与回复生成；商品数据以数据库为准，购物车操作经后端校验，目标不明确时不执行写入。", "shopmate.metric1": "通过 SSE 流式输出与 Prompt 压缩实现的首 Token 延迟降幅", "shopmate.metric2": "111 条固定查询离线基线上的 Recall@5", "shopmate.metric3": "同一离线基线上的 MRR@10", "shopmate.note": "检索指标来自离线评测，不代表线上准确率或延迟。",
    "shopmate.swipe": "左右滑动查看更多 →", "shopmate.screen1Title": "需求输入", "shopmate.screen1": "支持文字、图片和购物车入口。", "shopmate.screen2Title": "商品推荐", "shopmate.screen2": "基于检索结果给出推荐理由，并支持加入购物车。", "shopmate.screen3Title": "商品详情", "shopmate.screen3": "展示推荐依据、适用人群与使用场景。", "shopmate.screen4Title": "商品对比", "shopmate.screen4": "按参数逐项对比，并结合使用场景给出建议。",
    "devstash.type": "重点项目 / 开发者 SaaS", "devstash.role": "独立开发者 · 2026", "devstash.lede": "面向开发者的知识管理平台，用于存储、检索和复用代码片段、Prompt、命令、笔记、文件、图片与链接。",
    "devstash.decision1": "基于 Prisma 与 Neon PostgreSQL 设计统一数据模型，支撑内容的快速录入、检索与编辑。", "devstash.decision2": "集成 Auth.js 与 RBAC 权限控制，结合 Stripe 实现付费功能限制，并接入 Cloudflare R2 文件存储与 Upstash Redis。", "devstash.decision3": "接入大模型实现自动标签、内容摘要与代码解释，通过 Vitest、CI/CD 与 Vercel 完成测试和部署。",
    "property.type": "产品项目 / 房地产", "property.role": "全栈开发者 · 2025", "property.lede": "响应式房产信息平台，覆盖房源浏览、搜索、详情查看与登录后的房源管理。", "property.decision": "集成 Google OAuth、MongoDB、Cloudinary、地理编码与 MapTiler 地图服务，打通完整业务流程。",
    "taskflow.type": "其他项目 / 任务管理", "taskflow.role": "全栈开发者 · 2025", "taskflow.lede": "支持多用户数据隔离、路由鉴权、任务筛选与拖拽排序的任务管理应用。", "taskflow.detail": "前端采用 React 与 Vite，后端提供 Express REST API，使用 PostgreSQL 存储数据并通过 JWT 完成身份认证，部署于 Vercel。",
    "profile.kicker": "03 / 个人简介", "profile.title": "产品视角<br />与工程实践", "profile.lede": "我是 Sheldon Liu，墨尔本大学计算机科学专业在读，预计 2027 年 3 月毕业。", "profile.body": "主要从事全栈与 AI 应用开发，工作范围涵盖界面开发、API 设计、数据建模、检索、模型集成、评测、测试与部署。我重点关注 RAG 检索、模型评测以及大模型在实际产品中的可靠落地：由模型完成理解与解释，由应用数据把控事实与业务操作。",
    "profile.theme1Title": "从需求到上线", "profile.theme1Body": "将用户需求拆解为界面、服务、数据模型与测试方案，并完成部署上线。", "profile.theme2Title": "可靠的 AI 系统", "profile.theme2Body": "依托检索与后端数据约束模型输出，使 AI 功能可用、可验证，并明确其能力范围。", "profile.theme3Title": "跨平台开发", "profile.theme3Body": "具备 Web、Flutter、Android、后端服务、数据库与云端部署的全链路开发经验。",
    "experience.kicker": "01 / 实习经历", "experience.title": "以评测驱动的<br />AI 产品研发", "experience.intro": "负责 AI 助手的路由、检索、知识库问答与 Flutter 功能开发，各项能力均以量化指标评估。", "experience.status": "实习已结束", "experience.date": "2026 年 7 月 — 10 月", "experience.location": "墨尔本 / 远程", "experience.role": "AI 全栈开发实习生 · Flutter / AI 产品", "experience.product": "创作者社交应用 · AI 助手 Astro", "experience.lede": "参与 Ft.ured 创作者社交应用的 AI 助手 Astro 研发，负责 Supabase 后端的决策路由、人才搜索与知识库问答，以及 Flutter 端聊天和新用户引导等功能开发，各模块均通过量化评测验证效果。", "experience.astro": "应用内 AI 助手",
    "experience.mapLabel": "决策路由", "experience.mapCopy": "简化示意图，非客户生产界面", "experience.mapInput": "输入", "experience.mapMessage": "用户消息", "experience.mapRouter": "路由层", "experience.mapClassifier": "LLM 分类器", "experience.route1": "新用户引导", "experience.route2": "人才搜索", "experience.route3": "应用内问答", "experience.route4": "职位内容生成", "experience.route5": "内容建议", "experience.ledger1": "记录每次决策的模型、成本与延迟", "experience.ledger2": "通过行级安全（RLS）保护用户数据",
    "experience.metric1": "路由准确率（优化前 82.5%）", "experience.metric2": "人才搜索 Top-5 召回率，精确率 0.91", "experience.metric3": "盲评通过率，无虚构回答", "experience.metric4": "CI 中运行的后端与 Flutter 测试",
    "experience.module1Title": "决策路由", "experience.module1": "基于 Supabase Edge Functions 实现路由层，由 LLM 对用户请求进行分类并分发至五项产品能力，记录每次决策的成本与延迟，并通过行级安全保护用户数据。", "experience.module2Title": "评测驱动的模型选型", "experience.module2": "构建包含 241 条消息的评测集，从路由准确率、安全性、延迟与成本四个维度对比模型；Prompt 注入测试全部通过，P95 延迟约 620 ms。", "experience.module3Title": "人才搜索", "experience.module3": "支持以自然语言检索创作者，结合关键词与 pgvector 混合检索，并由 LLM 相关性层完成过滤和排序；在 50 条未见查询（各运行 3 次）上 P95 延迟低于 2.4 秒。", "experience.module4Title": "知识库问答", "experience.module4": "应用内助手仅依据人工整理的知识库作答，页面跳转限定在已批准范围内；通过 211 道题目的盲评验证。", "experience.module5Title": "Flutter 功能开发", "experience.module5": "端到端实现多会话聊天、AI 辅助新用户引导、职位内容生成与内容建议，采用测试驱动开发。",
    "capabilities.kicker": "04 / 技术能力", "capabilities.title": "技术栈与工程能力", "capabilities.intro": "按实际项目中的使用场景整理。", "capabilities.ai": "AI 与 RAG", "capabilities.languages": "编程语言", "capabilities.web": "Web 开发", "capabilities.mobile": "移动端与跨平台", "capabilities.data": "数据与云服务", "capabilities.product": "工程实践",
    "capabilities.aiTools": "LLM API（OpenAI、Claude、Gemini、OpenRouter）、LLM 路由与评测、RAG、pgvector、Qdrant、Embedding、Hugging Face、Prompt 工程", "capabilities.languagesTools": "TypeScript、Python、Dart、Kotlin、JavaScript、SQL、Java、C#、C", "capabilities.webTools": "Next.js、React 19、HTML、CSS、Tailwind CSS、Node.js、Express、FastAPI、ASP.NET、Deno、REST API、SSE", "capabilities.mobileTools": "Flutter、Android（Jetpack Compose）", "capabilities.dataTools": "PostgreSQL、Supabase（Edge Functions、RLS）、MongoDB、Prisma、Upstash Redis、Trigger.dev、Docker、Azure、AWS、Vercel、Render、Cloudflare R2", "capabilities.productTools": "测试驱动开发、单元与集成测试、pgTAP、Vitest、GitHub Actions CI/CD、数据建模、RBAC、OAuth 2.0、JWT、Stripe、限流",
    "education.kicker": "05 / 教育背景", "education.title": "计算机科学专业", "education.university": "墨尔本大学", "education.degree": "理学学士（计算机科学专业）", "education.meta": "2024 年 3 月至 2027 年 3 月 · 澳大利亚墨尔本", "education.courseworkLabel": "主修课程", "education.coursework": "算法与数据结构、软件建模、数据库系统、人工智能基础、网络计算、IT 项目",
    "contact.kicker": "06 / 联系方式", "contact.title": "期待与您交流", "contact.body": "目前正在寻找墨尔本地区的软件工程岗位，方向包括 AI 应用开发、全栈开发与移动端开发，欢迎通过邮件联系。", "contact.email": "发送邮件", "footer.note": "使用 HTML、CSS 与 JavaScript 开发。"
  }
};

const translatableText = [...document.querySelectorAll("[data-i18n]")];
const translatableHtml = [...document.querySelectorAll("[data-i18n-html]")];

translatableText.forEach((element) => { element.dataset.i18nDefault = element.textContent; });
translatableHtml.forEach((element) => { element.dataset.i18nDefaultHtml = element.innerHTML; });

const getStoredValue = (key, allowed) => {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : null;
  } catch {
    return null;
  }
};

const updateThemeControl = (theme) => {
  if (!themeToggle) return;
  const language = root.lang === "zh-CN" ? "zh" : "en";
  const targetTheme = theme === "dark" ? "light" : "dark";
  const label = language === "zh" ? (targetTheme === "light" ? "浅色" : "深色") : (targetTheme === "light" ? "Light" : "Dark");
  const action = language === "zh" ? `切换到${label}主题` : `Switch to ${label.toLowerCase()} theme`;
  themeToggle.setAttribute("aria-label", action);
  themeToggle.title = action;
  if (themeToggleLabel) themeToggleLabel.textContent = label;
};

const applyTheme = (theme, persist = false) => {
  const nextTheme = theme === "light" ? "light" : "dark";
  root.classList.add("is-theme-changing");
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
  if (themeColor) themeColor.content = nextTheme === "light" ? "#ecedeb" : "#101214";
  updateThemeControl(nextTheme);
  window.setTimeout(() => root.classList.remove("is-theme-changing"), 260);
  if (persist) {
    try { localStorage.setItem(THEME_KEY, nextTheme); } catch { /* Theme still applies for this session. */ }
  }
};

const applyLanguage = (language, persist = false) => {
  const nextLanguage = language === "zh" ? "zh" : "en";
  const dictionary = translations[nextLanguage] || {};
  root.lang = nextLanguage === "zh" ? "zh-CN" : "en";
  root.dataset.language = nextLanguage;

  translatableText.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key] ?? element.dataset.i18nDefault;
  });
  translatableHtml.forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = dictionary[key] ?? element.dataset.i18nDefaultHtml;
  });
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === nextLanguage)));
  document.getElementById("hero-title")?.setAttribute("aria-label", nextLanguage === "zh" ? "专注 AI 产品的全栈工程师" : "I build AI products from interface to infrastructure.");
  updateThemeControl(root.dataset.theme);

  if (persist) {
    try { localStorage.setItem(LANGUAGE_KEY, nextLanguage); } catch { /* Language still applies for this session. */ }
  }
};

applyTheme(root.dataset.theme);
applyLanguage(getStoredValue(LANGUAGE_KEY, ["en", "zh"]) || "en");

themeToggle?.addEventListener("click", () => applyTheme(root.dataset.theme === "light" ? "dark" : "light", true));
languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language, true)));


const closeMenu = () => {
  navShell?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

menuToggle?.addEventListener("click", () => {
  const open = !navShell?.classList.contains("is-open");
  navShell?.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navShell?.classList.contains("is-open")) {
    closeMenu();
    menuToggle?.focus();
  }
});

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: 0.1 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const routeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-routing");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -18%", threshold: 0.35 });
  routeDiagrams.forEach((diagram) => routeObserver.observe(diagram));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  routeDiagrams.forEach((diagram) => diagram.classList.add("is-routing"));
}

const setActiveLink = (links, href) => {
  links.forEach((link) => {
    const active = link.getAttribute("href") === href;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveLink([...navLinks], `#${visible.target.id}`);
  }, { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] });
  ["projects", "about", "experience", "education", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });

  const workLinks = [...document.querySelectorAll(".work-index a")];
  const projectObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) {
      const href = `#${visible.target.id}`;
      setActiveLink(workLinks, href);
      const index = workLinks.findIndex((link) => link.getAttribute("href") === href);
      if (workIndex && index >= 0) {
        workIndex.style.setProperty("--work-progress", String(index / Math.max(1, workLinks.length - 1)));
      }
    }
  }, { rootMargin: "-20% 0px -55%", threshold: [0, 0.15, 0.4] });
  document.querySelectorAll(".project-chapter[id]").forEach((chapter) => projectObserver.observe(chapter));
}

if (hero && !reducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 7;
    hero.style.setProperty("--hero-shift-x", `${x.toFixed(2)}px`);
    hero.style.setProperty("--hero-shift-y", `${y.toFixed(2)}px`);
  }, { passive: true });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
  });
}

let scrollFrame = 0;
const updateScrollProgress = () => {
  scrollFrame = 0;
  if (!scrollProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
};

window.addEventListener("scroll", () => {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(updateScrollProgress);
}, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();
