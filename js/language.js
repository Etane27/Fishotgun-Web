import { langEnButton, langFrButton } from "./dom.js";
import { translations } from "./translations.js";

export function setLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language][key];

    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  const isEnglish = language === "en";
  langEnButton.classList.toggle("bg-meadow-400", isEnglish);
  langEnButton.classList.toggle("text-white", isEnglish);
  langEnButton.classList.toggle("text-bark/65", !isEnglish);
  langEnButton.classList.toggle("hover:bg-white", !isEnglish);
  langFrButton.classList.toggle("bg-meadow-400", !isEnglish);
  langFrButton.classList.toggle("text-white", !isEnglish);
  langFrButton.classList.toggle("text-bark/65", isEnglish);
  langFrButton.classList.toggle("hover:bg-white", isEnglish);

  localStorage.setItem("fishotgun-language", language);
}

export function initLanguageSwitcher() {
  setLanguage(localStorage.getItem("fishotgun-language") || "en");
  langEnButton.addEventListener("click", () => setLanguage("en"));
  langFrButton.addEventListener("click", () => setLanguage("fr"));
}
