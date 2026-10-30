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
    "nav.menu": "菜单", "nav.work": "作品", "nav.profile": "简介", "nav.experience": "经历", "nav.education": "教育", "nav.contact": "联系", "nav.resume": "简历",
    "hero.context": "软件工程作品集", "hero.baseLabel": "所在地", "hero.base": "澳大利亚墨尔本", "hero.studyLabel": "就读院校", "hero.study": "墨尔本大学", "hero.graduatingLabel": "预计毕业", "hero.graduating": "2027 年 3 月",
    "hero.intro": "Sheldon Liu — AI 全栈软件工程师", "hero.line1": "我构建 AI 产品", "hero.line2": "从交互界面", "hero.line3": "到系统基础设施。",
    "hero.summary": "我把大模型能力变成可衡量、可交付的产品功能，贯通 Flutter、Web 与 Android 界面、后端服务、检索、评测与部署。", "hero.availability": "正在寻找墨尔本的软件工程机会", "hero.workAction": "查看精选作品", "hero.resumeAction": "阅读简历",
    "hero.proof": "量化成果", "hero.proof1": "LLM 路由准确率 · Ft.ured", "hero.proof2": "People Discovery Top-5 召回率", "hero.proof3": "有依据问答通过率，零编造", "hero.proof4": "在 CI 中运行的自动化测试", "hero.proof5": "首 token 延迟降低 · ShopMate",
    "work.kicker": "02 / 精选作品", "work.title": "作为系统构建，<br />不止于屏幕。", "work.intro": "每个项目都记录界面背后的判断：产品范围、系统架构、数据边界、评测与交付。", "work.index": "项目索引",
    "actions.source": "查看源码", "actions.sourceShort": "源码", "actions.live": "打开线上产品", "actions.demo": "认证演示",
    "shopmate.type": "核心项目 / AI + Android", "shopmate.role": "独立开发者 — 2026", "shopmate.lede": "一款对话式购物助手，把自然语言需求转化为有事实依据的推荐、有效对比、安全的购物车操作与模拟结账流程。",
    "shopmate.routeLabel": "系统路径", "shopmate.routeCopy": "意图从应用进入；商品事实和业务变更始终留在受控服务中。", "shopmate.client": "客户端", "shopmate.facts": "事实数据", "shopmate.retrieval": "检索", "shopmate.response": "响应",
    "shopmate.boundaryLabel": "产品边界", "shopmate.boundary": "模型负责理解意图并解释结果；后端服务仍是商品事实的权威来源，并验证购物车变更。目标含糊时，系统默认拒绝执行。", "shopmate.metric1": "通过 SSE 流式输出与提示词压缩降低的首 token 延迟", "shopmate.metric2": "固定 111 条查询基线上的 Recall@5", "shopmate.metric3": "同一离线数据集上的 MRR@10", "shopmate.note": "检索数据来自离线评测，不代表生产环境准确率或延迟。",
    "shopmate.swipe": "左右滑动查看 →", "shopmate.screen1Title": "提问", "shopmate.screen1": "用一句话、一张照片或购物车开始。", "shopmate.screen2Title": "推荐", "shopmate.screen2": "有依据的推荐、简短理由与安全的加购。", "shopmate.screen3Title": "详情", "shopmate.screen3": "为什么推荐、适合谁、用在哪里。", "shopmate.screen4Title": "对比", "shopmate.screen4": "逐项对比参数，并给出按场景的建议。",
    "devstash.type": "重点项目 / 开发者 SaaS", "devstash.role": "独立开发者 — 2026", "devstash.lede": "面向开发者的知识工作台，用于保存、整理并复用代码片段、提示词、命令、笔记、文件、图片与链接。",
    "devstash.decision1": "围绕快速收集、检索与编辑工作流，设计统一的 Prisma 与 Neon PostgreSQL 数据模型。", "devstash.decision2": "将 Auth.js 和 RBAC 与 Stripe 功能权限、Cloudflare R2 上传及 Upstash Redis 控制连接起来。", "devstash.decision3": "加入 AI 辅助标签、摘要和代码解释，并通过 Vitest、CI/CD 与 Vercel 完成生产交付。",
    "property.type": "产品项目 / 房地产", "property.role": "全栈开发者 — 2025", "property.lede": "覆盖房源发现、搜索、详情与登录后管理流程的响应式房地产平台。", "property.decision": "把 Google OAuth、MongoDB 房源数据、Cloudinary 媒体、地理编码和 MapTiler 地图整合为完整工作流。",
    "taskflow.type": "其他作品 / 任务管理", "taskflow.role": "全栈开发者 — 2025", "taskflow.lede": "支持独立用户数据、受保护路由、筛选和拖拽优先级的任务管理器。", "taskflow.detail": "React 与 Vite 客户端、Express REST API、PostgreSQL 持久化、JWT 认证以及 Vercel 部署。",
    "profile.kicker": "03 / 个人简介", "profile.title": "产品思维，<br />工程深度。", "profile.lede": "我是 Sheldon Liu，就读于墨尔本大学计算机科学专业。我喜欢负责从产品需求到可运行、可测试版本的完整路径。", "profile.body": "我的工作覆盖界面设计、API、数据建模、检索、AI 集成、测试与部署。我尤其关注有事实依据的 AI 系统：语言模型帮助理解与解释，而可靠的应用数据控制事实和业务操作。",
    "profile.theme1Title": "从产品到生产", "profile.theme1Body": "把真实用户需求转化为界面、服务边界、数据模型、测试策略与已部署产品。", "profile.theme2Title": "有依据的 AI 系统", "profile.theme2Body": "通过检索和受控后端数据，让 AI 体验保持实用、可检查，并诚实呈现能力边界。", "profile.theme3Title": "跨平台工程", "profile.theme3Body": "贯通 Web、Flutter、Android、后端服务、数据库和云端交付，同时保持清晰的产品主线。",
    "experience.kicker": "01 / 实习经历", "experience.title": "AI 功能，<br />用评测<br />说话。", "experience.intro": "一段实习：路由、检索、有依据的问答和 Flutter 产品功能，每一项都要经得起量化评测。", "experience.status": "实习已完成", "experience.location": "墨尔本 / 远程", "experience.role": "AI 全栈开发实习生 · Flutter / AI 产品方向", "experience.product": "面向创意人群的社交应用 · AI 助手", "experience.lede": "我为 Ft.ured 面向创意人群的社交应用构建了 AI 助手——从 Flutter 对话界面，到负责决策、检索与回答的 Supabase 后端——并对每个环节做了量化评测。", "experience.astro": "应用内 AI 助手", "experience.mapLabel": "决策路由", "experience.mapCopy": "简化示意图 · 非客户生产界面", "experience.mapInput": "输入", "experience.mapMessage": "用户消息", "experience.mapRouter": "路由", "experience.mapClassifier": "LLM 分类器", "experience.route1": "Onboarding 引导", "experience.route2": "People Discovery", "experience.route3": "应用内问答", "experience.route4": "岗位文案生成", "experience.route5": "内容建议", "experience.ledger1": "每次决策都记录：模型 · 成本 · 延迟", "experience.ledger2": "用户数据受行级安全（RLS）保护", "experience.metric1": "路由准确率，从 82.5% 提升", "experience.metric2": "People Discovery 的 Top-5 召回率，精确率 0.91", "experience.metric3": "盲评通过率，零编造回答", "experience.metric4": "在 CI 中运行的后端与 Flutter 测试", "experience.module1Title": "决策路由", "experience.module1": "在 Supabase Edge Functions 上由 LLM 对每条请求分类，并路由到五项产品能力之一；每次决策都记录成本与延迟，用户数据由行级安全保护。", "experience.module2Title": "评测驱动的模型选择", "experience.module2": "构建 241 条消息的评测集，从路由准确率、安全性、延迟和成本对比模型；所有提示词注入测试均通过，P95 延迟约 620 ms。", "experience.module3Title": "People Discovery", "experience.module3": "用自然语言搜索创意人群：结合关键词与 pgvector 检索，再由 LLM 相关性层过滤和排序候选人；在 50 条未见过的查询（每条运行 3 次）上 P95 低于 2.4 秒。", "experience.module4Title": "有依据的问答", "experience.module4": "应用内助手只基于精选知识库回答，跳转仅限已批准的页面；在 211 道盲评问题上完成验证。", "experience.module5Title": "Flutter 产品界面", "experience.module5": "端到端实现多会话聊天、AI 辅助 onboarding、岗位文案生成与内容建议，全程测试先行。",
    "capabilities.kicker": "04 / 能力结构", "capabilities.title": "相互连接的工程工具箱。", "capabilities.intro": "这些能力不是孤立关键词，而是共同服务于产品路径：从界面与服务，到数据、AI、测试和交付。", "capabilities.ai": "AI 与 RAG", "capabilities.web": "Web 工程", "capabilities.mobile": "移动端与跨平台", "capabilities.data": "数据与云", "capabilities.product": "产品工程",
    "capabilities.aiTools": "LLM API（OpenAI、Claude、Gemini、OpenRouter）、LLM 路由与评测、RAG、pgvector、Qdrant、Embedding、提示词工程", "capabilities.webTools": "Next.js、React 19、TypeScript、Node.js、Express、Deno、FastAPI、REST API、SSE", "capabilities.mobileTools": "Flutter、Dart、Kotlin、Jetpack Compose、Android", "capabilities.dataTools": "PostgreSQL、Supabase（Edge Functions、RLS）、MongoDB、Prisma、Upstash Redis、Trigger.dev、Docker、AWS、Vercel、Render、Cloudflare R2", "capabilities.productTools": "测试驱动开发、pgTAP、Vitest、GitHub Actions CI/CD、数据建模、RBAC、OAuth 2.0、JWT、Stripe、限流",
    "education.kicker": "05 / 教育经历", "education.title": "在墨尔本学习计算机科学。", "education.university": "墨尔本大学", "education.degree": "计算机科学理学学士", "education.meta": "2024 年 3 月至 2027 年 3 月 · 澳大利亚墨尔本", "education.courseworkLabel": "核心课程", "education.coursework": "算法与数据结构、软件建模、数据库系统、人工智能基础、网络计算与 IT 项目",
    "contact.kicker": "06 / 联系", "contact.title": "一起构建真正有用的软件。", "contact.body": "我正在寻找墨尔本的软件工程机会，方向包括 AI 产品工程、全栈 Web 与移动端开发。", "contact.email": "发起沟通", "footer.note": "在墨尔本使用 HTML、CSS 与 JavaScript 构建。"
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
  document.getElementById("hero-title")?.setAttribute("aria-label", nextLanguage === "zh" ? "我构建 AI 产品，从交互界面到系统基础设施。" : "I build AI products from interface to infrastructure.");
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
