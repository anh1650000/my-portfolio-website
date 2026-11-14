<script setup>
import { personalItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="life" class="section personal-life" aria-labelledby="lifeTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("navLife") }}</span></p>
          <h2 id="lifeTitle">{{ t("lifeTitle") }}</h2>
        </div>
        <p>{{ t("lifeIntro") }}</p>
      </header>

      <div class="personal-grid">
        <article
          v-for="item in personalItems"
          :key="item.number"
          class="personal-card tilt-card reveal"
        >
          <div class="personal-card-top">
            <span class="personal-index">{{ item.number }}</span>
            <span class="personal-icon">{{ item.icon }}</span>
          </div>
          <h3>{{ t(item.titleKey) }}</h3>
          <p>{{ t(item.bodyKey) }}</p>
          <footer>{{ t(item.noteKey) }}</footer>
        </article>
      </div>
    </div>
  </section>
</template>
