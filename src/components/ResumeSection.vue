<script setup>
import { computed } from "vue";
import { profile } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const hasResume = computed(() => Boolean(profile.resumeUrl));

const resumeFacts = computed(() => [
  { label: t("resumeTargetLabel"), value: t("resumeTargetValue") },
  { label: t("resumeAvailabilityLabel"), value: t("resumeAvailabilityValue") },
  { label: t("resumeWorkModeLabel"), value: t("resumeWorkModeValue") },
  { label: t("resumeEducationLabel"), value: t("resumeEducationValue") },
]);
</script>

<template>
  <section id="resume" class="section resume" aria-labelledby="resumeTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("resumeKicker") }}</span></p>
          <h2 id="resumeTitle">{{ t("resumeTitle") }}</h2>
        </div>
        <p>{{ t("resumeIntro") }}</p>
      </header>

      <div class="resume-panel reveal">
        <div class="resume-preview" aria-hidden="true">
          <header><span>PHẠM DUY ANH</span><small>CV / 2026</small></header>
          <div class="resume-preview-title">AI<br />ENGINEER</div>
          <div class="resume-preview-lines"><i></i><i></i><i></i><i></i></div>
          <footer><span>PDF</span><span>01 PAGE</span></footer>
        </div>

        <div class="resume-content">
          <div class="resume-status"><i></i><span>{{ hasResume ? "CV FILE · READY" : t("resumeStatus") }}</span></div>
          <div class="resume-facts">
            <article v-for="fact in resumeFacts" :key="fact.label">
              <small>{{ fact.label }}</small><strong>{{ fact.value }}</strong>
            </article>
          </div>

          <a v-if="hasResume" class="button button-primary resume-download" :href="profile.resumeUrl" download>
            <span>{{ t("downloadCv") }}</span><b>↓</b>
          </a>
          <button v-else class="button button-ghost resume-download" type="button" disabled aria-disabled="true">
            <span>{{ t("cvPending") }}</span><b>—</b>
          </button>
          <p class="resume-hint">// {{ t("resumeHint") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
