const THEME_KEY = "portfolio-theme";
const LANGUAGE_KEY = "portfolio-language";
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleLabel = document.querySelector(".theme-toggle-label");
const themeColor = document.querySelector('meta[name="theme-color"]');
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");
const languageButtons = document.querySelectorAll("[data-language]");
const navShell = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const scrollProgress = document.querySelector(".scroll-progress");
const hero = document.querySelector(".hero");
const shopmateSystem = document.querySelector(".shopmate-system");
const workIndex = document.querySelector(".work-index");

const translations = {
  zh: {
    "nav.menu": "菜单", "nav.work": "作品", "nav.profile": "简介", "nav.education": "教育", "nav.contact": "联系", "nav.resume": "简历",
    "hero.context": "软件工程作品集", "hero.baseLabel": "所在地", "hero.base": "澳大利亚墨尔本", "hero.studyLabel": "就读院校", "hero.study": "墨尔本大学", "hero.graduatingLabel": "预计毕业", "hero.graduating": "2026 年 11 月",
    "hero.intro": "Sheldon Liu — AI 驱动的全栈软件工程师", "hero.line1": "我构建 AI 产品", "hero.line2": "从交互界面", "hero.line3": "到系统基础设施。",
    "hero.summary": "我把产品想法变成可靠的 Web 与 Android 系统，连接清晰的交互、后端服务、数据、检索与部署。", "hero.availability": "正在寻找墨尔本的软件工程机会", "hero.workAction": "查看精选作品", "hero.resumeAction": "阅读简历",
    "hero.path": "产品路径", "hero.pathBrief": "需求", "hero.pathInterface": "界面", "hero.pathService": "服务", "hero.pathData": "数据与 AI", "hero.pathDeploy": "部署",
    "work.kicker": "01 / 精选作品", "work.title": "作为系统构建，<br />不止于屏幕。", "work.intro": "每个项目都记录界面背后的判断：产品范围、系统架构、数据边界、评测与交付。", "work.index": "项目索引",
    "actions.source": "查看源码", "actions.sourceShort": "源码", "actions.live": "打开线上产品", "actions.demo": "认证演示",
    "shopmate.type": "核心项目 / AI + Android", "shopmate.role": "全栈负责人 — 2026", "shopmate.lede": "一款对话式购物助手，把自然语言需求转化为有事实依据的推荐、有效对比、安全的购物车操作与模拟结账流程。",
    "shopmate.routeLabel": "系统路径", "shopmate.routeCopy": "意图从应用进入；商品事实和业务变更始终留在受控服务中。", "shopmate.client": "客户端", "shopmate.facts": "事实数据", "shopmate.retrieval": "检索", "shopmate.response": "响应",
    "shopmate.boundaryLabel": "产品边界", "shopmate.boundary": "模型负责理解意图并解释结果；后端服务仍是商品事实的权威来源，并验证购物车变更。目标含糊时，系统默认拒绝执行。", "shopmate.metric1": "恢复后首个流式 token 的目标时间", "shopmate.metric2": "固定 111 条查询基线上的 Recall@5", "shopmate.metric3": "同一离线数据集上的 MRR@10", "shopmate.note": "检索数据来自离线评测，不代表生产环境准确率或延迟。",
    "devstash.type": "重点项目 / 开发者 SaaS", "devstash.role": "独立开发者 — 2026", "devstash.lede": "面向开发者的知识工作台，用于保存、整理并复用代码片段、提示词、命令、笔记、文件、图片与链接。",
    "devstash.decision1": "围绕快速收集、检索与编辑工作流，设计统一的 Prisma 与 Neon PostgreSQL 数据模型。", "devstash.decision2": "将 Auth.js 和 RBAC 与 Stripe 功能权限、Cloudflare R2 上传及 Upstash Redis 控制连接起来。", "devstash.decision3": "加入 AI 辅助标签、摘要和代码解释，并通过 Vitest、CI/CD 与 Vercel 完成生产交付。",
    "property.type": "产品项目 / 房地产", "property.role": "全栈开发者 — 2025", "property.lede": "覆盖房源发现、搜索、详情与登录后管理流程的响应式房地产平台。", "property.decision": "把 Google OAuth、MongoDB 房源数据、Cloudinary 媒体、地理编码和 MapTiler 地图整合为完整工作流。",
    "taskflow.type": "其他作品 / 任务管理", "taskflow.role": "全栈开发者 — 2025", "taskflow.lede": "支持独立用户数据、受保护路由、筛选和拖拽优先级的任务管理器。", "taskflow.detail": "React 与 Vite 客户端、Express REST API、PostgreSQL 持久化、JWT 认证以及 Vercel 部署。",
    "profile.kicker": "02 / 个人简介", "profile.title": "产品思维，<br />工程深度。", "profile.lede": "我是 Sheldon Liu，就读于墨尔本大学计算机科学专业。我喜欢负责从产品需求到可运行、可测试版本的完整路径。", "profile.body": "我的工作覆盖界面设计、API、数据建模、检索、AI 集成、测试与部署。我尤其关注有事实依据的 AI 系统：语言模型帮助理解与解释，而可靠的应用数据控制事实和业务操作。",
    "profile.theme1Title": "从产品到生产", "profile.theme1Body": "把真实用户需求转化为界面、服务边界、数据模型、测试策略与已部署产品。", "profile.theme2Title": "有依据的 AI 系统", "profile.theme2Body": "通过检索和受控后端数据，让 AI 体验保持实用、可检查，并诚实呈现能力边界。", "profile.theme3Title": "跨平台工程", "profile.theme3Body": "贯通 Web、Android、后端服务、数据库和云端交付，同时保持清晰的产品主线。",
    "capabilities.kicker": "03 / 能力结构", "capabilities.title": "相互连接的工程工具箱。", "capabilities.intro": "重要的不是工具数量，而是知道每一种工具在可靠产品系统中应该承担什么职责。", "capabilities.ai": "AI 与 RAG", "capabilities.web": "Web 工程", "capabilities.mobile": "移动端", "capabilities.data": "数据与云", "capabilities.product": "产品工程",
    "capabilities.aiTools": "LLM API、对话式 AI、推荐系统、Qdrant、RAG 设计与评测、提示词工程、摘要生成", "capabilities.webTools": "Next.js、React、TypeScript、JavaScript、Node.js、FastAPI、REST API、SSE", "capabilities.mobileTools": "Kotlin、Android 原生开发、Jetpack Compose、Java", "capabilities.dataTools": "PostgreSQL、MongoDB、Prisma、Mongoose、Redis、AWS、Vercel、Render、Cloudflare R2、Cloudinary", "capabilities.productTools": "数据建模、RBAC、OAuth 2.0、JWT、Stripe、限流、Vitest、CI/CD、部署",
    "education.kicker": "04 / 教育经历", "education.title": "在墨尔本学习计算机科学。", "education.university": "墨尔本大学", "education.degree": "计算机科学理学学士", "education.meta": "2023 年 3 月至 2026 年 11 月 · 澳大利亚墨尔本", "education.courseworkLabel": "核心课程", "education.coursework": "算法与数据结构、软件建模、数据库系统、人工智能基础与 Web 计算",
    "contact.kicker": "05 / 联系", "contact.title": "一起构建真正有用的软件。", "contact.body": "我正在寻找墨尔本的软件工程机会，方向包括全栈 Web、AI 驱动产品与 Android 开发。", "contact.email": "发起沟通", "footer.note": "在墨尔本使用 HTML、CSS 与 JavaScript 构建。"
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

systemTheme.addEventListener?.("change", (event) => {
  if (!getStoredValue(THEME_KEY, ["light", "dark"])) applyTheme(event.matches ? "light" : "dark");
});

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

  if (shopmateSystem) {
    const routeObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0]?.isIntersecting) return;
      shopmateSystem.classList.add("is-routing");
      observer.disconnect();
    }, { rootMargin: "0px 0px -18%", threshold: 0.35 });
    routeObserver.observe(shopmateSystem);
  }
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  shopmateSystem?.classList.add("is-routing");
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
  ["projects", "about", "education", "contact"].forEach((id) => {
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
