<script setup>
import { processItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section class="section process" aria-labelledby="processTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("process") }}</span></p>
          <h2 id="processTitle">{{ t("processTitle") }}</h2>
        </div>
        <p>{{ t("processIntro") }}</p>
      </header>

      <div class="process-grid">
        <article v-for="item in processItems" :key="item.number" class="reveal">
          <span>{{ item.number }}</span>
          <small>{{ item.stage }}</small>
          <h3>{{ t(item.titleKey) }}</h3>
          <p>{{ t(item.bodyKey) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
