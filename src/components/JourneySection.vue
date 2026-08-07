<script setup>
import { certificates, journeyItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="journey" class="section journey" aria-labelledby="journeyTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("navJourney") }}</span></p>
          <h2 id="journeyTitle">{{ t("journeyTitle") }}</h2>
        </div>
        <p>{{ t("journeyIntro") }}</p>
      </header>

      <div class="timeline">
        <article v-for="item in journeyItems" :key="item.number" class="timeline-item reveal">
          <div class="timeline-marker"><span>{{ item.number }}</span></div>
          <div class="timeline-date">{{ item.date }} <span v-if="item.dateKey">{{ t(item.dateKey) }}</span></div>
          <div class="timeline-content">
            <p>{{ item.phase }}</p>
            <h3>{{ t(item.titleKey) }}</h3>
            <p>{{ t(item.bodyKey) }}</p>
            <ul><li v-for="tag in item.tags" :key="tag">{{ tag }}</li></ul>
          </div>
        </article>
      </div>

      <div class="recognition reveal">
        <div class="award-symbol">✦</div>
        <div>
          <small>{{ t("recognition") }}</small>
          <h3>{{ certificates[0].provider }} · {{ t(certificates[0].titleKey) }}</h3>
          <p>{{ t(certificates[0].bodyKey) }}</p>
        </div>
        <span>DETAILS / SOON</span>
      </div>
    </div>
  </section>
</template>
