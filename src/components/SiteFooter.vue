<script setup>
import { profile } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

const socials = [
  { label: "GH", href: profile.github },
  { label: "LI", href: profile.linkedin },
  { label: "IG", href: profile.instagram },
  { label: "FB", href: profile.facebook },
];
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-inner">
      <div class="footer-brand">
        <span class="brand-mark">DA</span>
        <div><strong>PHẠM DUY ANH</strong><small>AI ENGINEERING / SOFTWARE</small></div>
      </div>
      <div class="footer-location">
        <span>10.0452° N</span><i></i><span>105.7469° E</span><small>CẦN THƠ · VN</small>
      </div>
      <div class="footer-socials">
        <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" rel="noreferrer">
          {{ social.label }}
        </a>
      </div>
      <div class="footer-bottom">
        <span>© 2026 PHẠM DUY ANH</span><span>{{ t("crafted") }}</span><a href="#home">BACK TO TOP ↑</a>
      </div>
    </div>
  </footer>
</template>
