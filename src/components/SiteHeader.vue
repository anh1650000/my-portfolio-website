<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { navItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

defineProps({
  scrolled: { type: Boolean, default: false },
  activeSection: { type: String, default: "home" },
});

const { language, nextLanguage, t, toggleLanguage } = useI18n();
const menuOpen = ref(false);

function closeMenu() {
  menuOpen.value = false;
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  document.body.classList.toggle("menu-open", menuOpen.value);
}

function handleResize() {
  if (window.innerWidth > 1100) closeMenu();
}

onMounted(() => window.addEventListener("resize", handleResize));
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  document.body.classList.remove("menu-open");
});
</script>

<template>
  <header id="siteHeader" class="site-header" :class="{ scrolled }">
    <div class="header-blur" aria-hidden="true"></div>
    <div class="header-inner shell">
      <a class="brand" href="#home" aria-label="Phạm Duy Anh — Home" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">DA</span>
        <span class="brand-copy">
          <strong>PHM.DANH</strong>
          <small>{{ t("brandTag") }}</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
        >
          {{ t(item.labelKey) }}
        </a>
      </nav>

      <div class="header-actions">
        <button class="language-toggle" type="button" aria-label="Switch language" @click="toggleLanguage">
          <span>{{ language.toUpperCase() }}</span><span class="muted">/{{ nextLanguage.toUpperCase() }}</span>
        </button>
        <a class="header-cta" href="#contact">
          <span>{{ t("startConversation") }}</span>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
        </a>
        <button
          class="menu-toggle"
          type="button"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          aria-controls="mobileMenu"
          :aria-expanded="menuOpen"
          @click="toggleMenu"
        >
          <span></span><span></span>
        </button>
      </div>
    </div>

    <nav id="mobileMenu" class="mobile-menu" :class="{ open: menuOpen }" aria-label="Mobile navigation">
      <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" @click="closeMenu">
        {{ t(item.labelKey) }}
      </a>
    </nav>
  </header>
</template>
