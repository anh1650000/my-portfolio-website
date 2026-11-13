<script setup>
import { activityItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
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
        <article v-for="item in activityItems" :key="item.number" class="activity-card reveal">
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
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
