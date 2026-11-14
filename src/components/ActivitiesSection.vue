<script setup>
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { activityItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const activeActivity = ref(null);

const activeImages = computed(() => {
  if (!activeActivity.value) return [];
  const list = [];
  if (Array.isArray(activeActivity.value.images) && activeActivity.value.images.length > 0) {
    for (const item of activeActivity.value.images) {
      if (typeof item === "string" && item.trim()) {
        list.push({ url: item.trim(), caption: "" });
      } else if (item && typeof item === "object" && item.url) {
        list.push({ url: item.url, caption: item.caption || "" });
      }
    }
  }
  if (list.length === 0 && activeActivity.value.imageUrl) {
    list.push({ url: activeActivity.value.imageUrl, caption: "" });
  }
  return list;
});

function openActivity(item) {
  activeActivity.value = item;
}

function closeActivity() {
  activeActivity.value = null;
}

function handleKeydown(event) {
  if (event.key === "Escape" && activeActivity.value) {
    closeActivity();
  }
}

watch(activeActivity, (activity) => {
  document.body.classList.toggle("modal-open", Boolean(activity));
  if (activity) {
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
  <section id="activities" class="section activities" aria-labelledby="activitiesTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("navActivities") }}</span></p>
          <h2 id="activitiesTitle">{{ t("activitiesTitle") }}</h2>
        </div>
        <p>{{ t("activitiesIntro") }}</p>
      </header>

      <div class="activity-grid">
        <button
          v-for="item in activityItems"
          :key="item.number"
          type="button"
          class="activity-card reveal"
          :aria-label="`${t(item.titleKey)} — ${t('openActivity')}`"
          @click="openActivity(item)"
        >
          <div class="activity-photo">
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="t(item.titleKey)"
              loading="lazy"
            />
            <div v-else class="activity-photo-placeholder" aria-hidden="true">
              <span class="activity-photo-index">{{ item.number }}</span>
              <span class="activity-photo-caption">{{ t("activityPhotoPending") }}</span>
            </div>
            <div class="activity-photo-tint" aria-hidden="true"></div>
            <span class="activity-year">{{ item.year || "—" }}</span>
          </div>

          <div class="activity-copy">
            <p>{{ t(item.categoryKey) }}</p>
            <h3>{{ t(item.titleKey) }}</h3>
            <span>{{ t(item.descriptionKey) }}</span>

            <div class="activity-footer">
              <span class="activity-view-hint">
                <span>{{ t("activityViewGallery") }}</span>
                <b aria-hidden="true">↗</b>
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activeActivity"
        class="cv-modal-backdrop activity-modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="activityModalTitle"
        @click.self="closeActivity"
      >
        <div class="cv-modal activity-modal">
          <header class="cv-modal-header">
            <div class="cv-modal-title">
              <span class="cv-modal-badge">{{ activeActivity.number }}</span>
              <strong id="activityModalTitle">{{ t(activeActivity.titleKey) }}</strong>
              <span v-if="activeActivity.year" class="activity-modal-year">{{ activeActivity.year }}</span>
            </div>
            <div class="cv-modal-actions">
              <span v-if="activeImages.length > 0" class="activity-modal-count">
                {{ activeImages.length }} {{ t("activityPhotoCount") }}
              </span>
              <button
                class="cv-modal-close"
                type="button"
                :aria-label="t('closeActivityModal')"
                @click="closeActivity"
              >
                ×
              </button>
            </div>
          </header>

          <div class="cv-modal-body activity-modal-body">
            <div class="activity-modal-intro">
              <span class="activity-modal-category">{{ t(activeActivity.categoryKey) }}</span>
              <p class="activity-modal-description">{{ t(activeActivity.descriptionKey) }}</p>
            </div>

            <!-- Gallery grid if images exist -->
            <div v-if="activeImages.length > 0" class="activity-gallery-grid">
              <figure
                v-for="(img, idx) in activeImages"
                :key="idx"
                class="activity-gallery-item"
              >
                <div class="activity-gallery-photo">
                  <img
                    :src="img.url"
                    :alt="img.caption || t(activeActivity.titleKey)"
                    loading="lazy"
                  />
                </div>
                <figcaption v-if="img.caption" class="activity-gallery-caption">
                  {{ img.caption }}
                </figcaption>
              </figure>
            </div>

            <!-- Empty state when no images added yet -->
            <div v-else class="activity-modal-empty">
              <div class="activity-modal-empty-badge">
                <span>{{ activeActivity.number }}</span>
              </div>
              <h4 class="activity-modal-empty-title">{{ t("activityNoImages") }}</h4>
              <p class="activity-modal-empty-text">{{ t("activityNoImagesHint") }}</p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
