const THEME_KEY = "portfolio-theme";
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const themeToggleLabel = document.querySelector(".theme-toggle-label");
const themeColor = document.querySelector('meta[name="theme-color"]');
const systemTheme = window.matchMedia("(prefers-color-scheme: light)");

const getStoredTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme, persist = false) => {
  const nextTheme = theme === "light" ? "light" : "dark";
  const targetTheme = nextTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;

  if (themeColor) {
    themeColor.content = nextTheme === "light" ? "#fff9ed" : "#08101d";
  }

  if (themeToggle) {
    const action = `Switch to ${targetTheme} theme`;
    themeToggle.setAttribute("aria-label", action);
    themeToggle.title = action;
  }

  if (themeToggleIcon) {
    themeToggleIcon.textContent = targetTheme === "light" ? "☀" : "☾";
  }

  if (themeToggleLabel) {
    themeToggleLabel.textContent = targetTheme === "light" ? "Light" : "Dark";
  }

  if (persist) {
    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
      // The chosen theme still applies for this session if storage is unavailable.
    }
  }
};

applyTheme(document.documentElement.dataset.theme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme, true);
});

systemTheme.addEventListener?.("change", (event) => {
  if (!getStoredTheme()) {
    applyTheme(event.matches ? "light" : "dark");
  }
});
