import { langEnButton, langFrButton } from "./dom.js";
import { translations } from "./translations.js";

function updateLanguageButton(button, isActive) {
  button.classList.toggle("is-active", isActive);
  button.setAttribute("aria-pressed", String(isActive));
}

export function setLanguage(language) {
  const copy = translations[language];

  if (!copy || !langEnButton || !langFrButton) {
    return;
  }

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = copy[key];

    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  updateLanguageButton(langEnButton, language === "en");
  updateLanguageButton(langFrButton, language === "fr");
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
