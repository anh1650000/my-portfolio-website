<script setup>
import { capabilityCards } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="skills" class="section skills" aria-labelledby="skillsTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("navSkills") }}</span></p>
          <h2 id="skillsTitle">{{ t("skillsTitle") }}</h2>
        </div>
        <p>{{ t("skillsIntro") }}</p>
      </header>

      <div class="skill-grid">
        <article v-for="card in capabilityCards" :key="card.code" class="system-card reveal">
          <header><span>{{ card.code }}</span><b>{{ t(card.badgeKey) }}</b></header>
          <div class="system-icon">{{ card.icon }}</div>
          <h3>{{ card.titleKey ? t(card.titleKey) : card.title }}</h3>
          <p>{{ t(card.bodyKey) }}</p>
          <ul><li v-for="tag in card.tags" :key="tag">{{ tag }}</li></ul>
          <footer><span>{{ t("status") }}</span><i></i><b>{{ card.state }}</b></footer>
        </article>
      </div>
    </div>
  </section>
</template>
