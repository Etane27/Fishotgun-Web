import { langEnButton, langFrButton } from "./dom.js";
import { translations } from "./translations.js";

function updateLanguageButton(button, isActive) {
  button.classList.toggle("bg-leaf-400", isActive);
  button.classList.toggle("text-white", isActive);
  button.classList.toggle("text-soil/65", !isActive);
  button.classList.toggle("hover:bg-leaf-50", !isActive);
  button.setAttribute("aria-pressed", String(isActive));
}

export function setLanguage(language) {
  if (!translations[language] || !langEnButton || !langFrButton) {
    return;
  }

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language]?.[key];

    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  const isEnglish = language === "en";
  updateLanguageButton(langEnButton, isEnglish);
  updateLanguageButton(langFrButton, !isEnglish);

  localStorage.setItem("fishotgun-language", language);
}

export function initLanguageSwitcher() {
  if (!langEnButton || !langFrButton) {
    return;
  }

  setLanguage(localStorage.getItem("fishotgun-language") || "en");
  langEnButton.addEventListener("click", () => setLanguage("en"));
  langFrButton.addEventListener("click", () => setLanguage("fr"));
}
