import { computed, readonly, ref, watch } from "vue";
import { translations } from "../data/translations";

const supportedLanguages = ["en", "vi"];
const savedLanguage = window.localStorage.getItem("portfolio-language");
const language = ref(supportedLanguages.includes(savedLanguage) ? savedLanguage : "en");

watch(
  language,
  (value) => {
    document.documentElement.lang = value;
    window.localStorage.setItem("portfolio-language", value);
  },
  { immediate: true },
);

export function useI18n() {
  const nextLanguage = computed(() => (language.value === "en" ? "vi" : "en"));

  function t(key) {
    return translations[language.value]?.[key] ?? translations.en[key] ?? key;
  }

  function toggleLanguage() {
    language.value = nextLanguage.value;
  }

  return {
    language: readonly(language),
    nextLanguage,
    t,
    toggleLanguage,
  };
}
