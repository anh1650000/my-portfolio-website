<script setup>
import { ref } from "vue";
import { quoteItems } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const activeIndex = ref(0);
function moveQuote(direction) {
  activeIndex.value = (activeIndex.value + direction + quoteItems.length) % quoteItems.length;
}
</script>

<template>
  <section id="quotes" class="section quotes-section" aria-labelledby="quotesTitle">
    <div class="quote-orbit quote-orbit-one parallax-layer" data-parallax="-0.025" aria-hidden="true"></div>
    <div class="quote-orbit quote-orbit-two parallax-layer" data-parallax="0.04" aria-hidden="true"></div>
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("navQuotes") }}</span></p>
          <h2 id="quotesTitle">{{ t("quotesTitle") }}</h2>
        </div>
        <p>{{ t("quotesIntro") }}</p>
      </header>

      <div class="quote-stage reveal" aria-live="polite">
        <span class="quote-mark" aria-hidden="true">“</span>
        <div class="quote-reel">
          <div class="quote-track" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
            <article
              v-for="item in quoteItems"
              :key="item.number"
              class="quote-card"
              :aria-hidden="item.number !== quoteItems[activeIndex].number"
            >
              <p class="quote-number">{{ item.number }} / 03</p>
              <blockquote>{{ t(item.quoteKey) }}</blockquote>
              <cite>{{ t(item.authorKey) }}</cite>
            </article>
          </div>
        </div>
        <div class="quote-controls" :aria-label="t('quoteControls')">
          <button type="button" :aria-label="t('previousQuote')" @click="moveQuote(-1)">&lt;</button>
          <button type="button" :aria-label="t('nextQuote')" @click="moveQuote(1)">&gt;</button>
        </div>
      </div>
    </div>
  </section>
</template>
