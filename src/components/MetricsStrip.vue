<script setup>
import { metrics } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section class="metrics" aria-label="Profile metrics">
    <div class="shell metrics-grid reveal">
      <article v-for="metric in metrics" :key="metric.index">
        <span>{{ metric.index }}</span>
        <strong>{{ metric.value }}<small>{{ metric.suffix }}</small></strong>
        <p>{{ metric.labelKey ? t(metric.labelKey) : metric.label }}</p>
      </article>
    </div>
  </section>
</template>
