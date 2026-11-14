<script setup>
import { computed, onBeforeUnmount, ref } from "vue";
import { profile } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const copied = ref(false);
let resetTimer;

const channels = computed(() => [
  {
    index: "CH 01",
    type: "EMAIL",
    value: profile.email,
    description: t("preferredChannel"),
    href: `mailto:${profile.email}`,
  },
  {
    index: "CH 02",
    type: "PHONE",
    value: profile.phoneDisplay,
    description: t("workPreferenceShort"),
    href: profile.phoneHref,
  },
  {
    index: "CH 03",
    type: "GITHUB",
    value: profile.githubDisplay,
    description: t("publicCode"),
    href: profile.github,
    external: true,
  },
  {
    index: "CH 04",
    type: "FACEBOOK",
    value: "facebook.com/phmdanh1650",
    description: t("socialProfile"),
    href: profile.facebook,
    external: true,
  },
  {
    index: "CH 05",
    type: "ZALO",
    value: profile.zaloDisplay,
    description: t("directMessenger"),
    href: profile.zaloHref,
  },
  {
    index: "CH 06",
    type: "LINKEDIN",
    value: profile.name,
    description: t("professionalProfile"),
    href: profile.linkedin,
    external: true,
  },
]);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = profile.email;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  window.clearTimeout(resetTimer);
  copied.value = true;
  resetTimer = window.setTimeout(() => (copied.value = false), 1800);
}

onBeforeUnmount(() => window.clearTimeout(resetTimer));
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contactTitle">
    <div class="contact-grid-bg" aria-hidden="true"></div>
    <div class="shell contact-inner">
      <div class="contact-heading reveal">
        <p class="section-kicker"><span>§</span> <span>{{ t("navContact") }}</span></p>
        <h2 id="contactTitle">{{ t("contactTitle") }}</h2>
        <p>{{ t("contactIntro") }}</p>
        <div class="contact-actions">
          <a class="button button-primary" :href="`mailto:${profile.email}`">
            <span>{{ t("writeEmail") }}</span>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
          </a>
          <button class="button button-ghost" type="button" @click="copyEmail">
            <span>{{ copied ? t("copied") : t("copyEmail") }}</span><b>↗</b>
          </button>
        </div>
      </div>

      <div class="contact-channels reveal">
        <a
          v-for="channel in channels"
          :key="channel.index"
          :href="channel.href"
          :target="channel.external ? '_blank' : undefined"
          :rel="channel.external ? 'noreferrer' : undefined"
        >
          <span>{{ channel.index }}</span>
          <div>
            <small>{{ channel.type }}</small>
            <strong>{{ channel.value }}</strong>
            <p>{{ channel.description }}</p>
          </div>
          <b>↗</b>
        </a>
      </div>
    </div>
  </section>
</template>
