<script setup>
import avatarUrl from "../assets/images/avatar.jpg";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="about" class="section about" aria-labelledby="aboutTitle">
    <div class="shell">
      <header class="section-heading reveal">
        <p class="section-kicker"><span>§</span> <span>{{ t("navAbout") }}</span></p>
        <h2 id="aboutTitle">{{ t("aboutTitle") }}</h2>
      </header>

      <div class="about-layout">
        <div class="portrait-card reveal">
          <img
            class="portrait-image"
            :src="avatarUrl"
            alt="Phạm Duy Anh"
            width="1368"
            height="2048"
            loading="lazy"
            decoding="async"
          />
          <div class="portrait-grid" aria-hidden="true"></div>
          <div class="portrait-caption">
            <span>PHẠM DUY ANH</span>
            <small>AI / SOFTWARE / RESEARCH</small>
          </div>
        </div>

        <div class="about-chapters">
          <article class="reveal">
            <p>// CH. 01 — <span>{{ t("background") }}</span></p>
            <h3>{{ t("aboutChapter1Title") }}</h3>
            <div class="chapter-copy">
              <span>01</span>
              <p>{{ t("aboutChapter1Body") }}</p>
            </div>
          </article>
          <article class="reveal">
            <p>// CH. 02 — <span>{{ t("direction") }}</span></p>
            <h3>{{ t("aboutChapter2Title") }}</h3>
            <div class="chapter-copy">
              <span>02</span>
              <p>{{ t("aboutChapter2Body") }}</p>
            </div>
          </article>
          <blockquote class="reveal">
            <span>“</span>
            <p>{{ t("quote") }}</p>
            <footer>— PHẠM DUY ANH · CẦN THƠ</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
