<script setup>
import { quoteItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="quotes" class="section quotes-section" aria-labelledby="quotesTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("navQuotes") }}</span></p>
          <h2 id="quotesTitle">{{ t("quotesTitle") }}</h2>
        </div>
        <p>{{ t("quotesIntro") }}</p>
      </header>

      <div class="notes-grid">
        <article
          v-for="item in quoteItems"
          :key="item.number"
          class="note-card tilt-card reveal"
        >
          <div class="note-card-top">
            <span class="note-number">{{ item.number }}</span>
            <span class="note-tag">{{ t(item.tagKey) }}</span>
          </div>
          <blockquote>{{ t(item.quoteKey) }}</blockquote>
          <p class="note-context">{{ t(item.contextKey) }}</p>
          <footer>
            <span>{{ t(item.authorKey) }}</span>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>
