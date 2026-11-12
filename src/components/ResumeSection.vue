<script setup>
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { profile } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const hasResume = computed(() => Boolean(profile.resumeUrl));
const isModalOpen = ref(false);

const resumeFacts = computed(() => [
  { label: t("resumeTargetLabel"), value: t("resumeTargetValue") },
  { label: t("resumeAvailabilityLabel"), value: t("resumeAvailabilityValue") },
  { label: t("resumeWorkModeLabel"), value: t("resumeWorkModeValue") },
  { label: t("resumeEducationLabel"), value: t("resumeEducationValue") },
]);

function openModal() {
  if (!hasResume.value) return;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function handleKeydown(event) {
  if (event.key === "Escape" && isModalOpen.value) {
    closeModal();
  }
}

watch(isModalOpen, (open) => {
  document.body.classList.toggle("modal-open", open);
  if (open) {
    window.addEventListener("keydown", handleKeydown);
  } else {
    window.removeEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.classList.remove("modal-open");
});
</script>

<template>
  <section id="resume" class="section resume" aria-labelledby="resumeTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("resumeKicker") }}</span></p>
          <h2 id="resumeTitle">{{ t("resumeTitle") }}</h2>
        </div>
        <p>{{ hasResume ? t("resumeIntroReady") : t("resumeIntro") }}</p>
      </header>

      <div class="resume-panel reveal">
        <button
          v-if="hasResume"
          type="button"
          class="resume-preview ready"
          :aria-label="t('viewCv')"
          @click="openModal"
        >
          <header><span>PHẠM DUY ANH</span><small>CV / 2026</small></header>
          <div class="resume-preview-title">AI<br />ENGINEER</div>
          <div class="resume-preview-lines"><i></i><i></i><i></i><i></i></div>
          <footer><span>PDF</span><span>01 PAGE</span></footer>
        </button>
        <div v-else class="resume-preview" aria-hidden="true">
          <header><span>PHẠM DUY ANH</span><small>CV / 2026</small></header>
          <div class="resume-preview-title">AI<br />ENGINEER</div>
          <div class="resume-preview-lines"><i></i><i></i><i></i><i></i></div>
          <footer><span>PDF</span><span>01 PAGE</span></footer>
        </div>

        <div class="resume-content">
          <div class="resume-status" :class="{ ready: hasResume }">
            <i></i><span>{{ hasResume ? t("resumeStatusReady") : t("resumeStatus") }}</span>
          </div>
          <div class="resume-facts">
            <article v-for="fact in resumeFacts" :key="fact.label">
              <small>{{ fact.label }}</small><strong>{{ fact.value }}</strong>
            </article>
          </div>

          <div v-if="hasResume" class="resume-actions">
            <a
              class="button button-primary resume-download"
              :href="profile.resumeUrl"
              download="pham-duy-anh-cv.pdf"
            >
              <span>{{ t("downloadCv") }}</span><b>↓</b>
            </a>
            <button
              type="button"
              class="button button-ghost resume-view"
              @click="openModal"
            >
              <span>{{ t("viewCv") }}</span><b>↗</b>
            </button>
          </div>
          <button v-else class="button button-ghost resume-download" type="button" disabled aria-disabled="true">
            <span>{{ t("cvPending") }}</span><b>—</b>
          </button>
          <p class="resume-hint">{{ hasResume ? t("resumeFileMeta") : t("resumeHint") }}</p>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isModalOpen && hasResume"
        class="cv-modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cvModalTitle"
        @click.self="closeModal"
      >
        <div class="cv-modal">
          <header class="cv-modal-header">
            <div class="cv-modal-title">
              <span class="cv-modal-badge">PDF</span>
              <strong id="cvModalTitle">{{ t("cvModalTitle") }}</strong>
            </div>
            <div class="cv-modal-actions">
              <a
                class="button button-ghost cv-modal-btn"
                :href="profile.resumeUrl"
                target="_blank"
                rel="noreferrer"
              >
                <span>{{ t("openNewTab") }}</span><b>↗</b>
              </a>
              <a
                class="button button-primary cv-modal-btn"
                :href="profile.resumeUrl"
                download="pham-duy-anh-cv.pdf"
              >
                <span>{{ t("downloadCv") }}</span><b>↓</b>
              </a>
              <button
                class="cv-modal-close"
                type="button"
                :aria-label="t('closeModal')"
                @click="closeModal"
              >
                ×
              </button>
            </div>
          </header>

          <div class="cv-modal-body">
            <iframe
              class="cv-modal-frame"
              :src="`${profile.resumeUrl}#view=FitH`"
              :title="t('cvModalTitle')"
            ></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
