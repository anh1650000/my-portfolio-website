<script setup>
import { skillSnapshot } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="home" class="hero section-grid" aria-labelledby="heroTitle">
    <div class="hero-mesh" aria-hidden="true"></div>
    <div class="hero-grid-bg" aria-hidden="true"></div>
    <div class="shell hero-inner">
      <div class="top-meta reveal">
        <div class="meta-sequence">
          <strong>PHẠM DUY ANH</strong><span>/</span><span>{{ t("metaFinalYear") }}</span><span>/</span
          ><span>{{ t("metaAvailable") }}</span><span>/</span><span>{{ t("metaRoute") }}</span>
        </div>
        <span class="availability"><i></i><span>{{ t("available") }}</span></span>
      </div>

      <div class="hero-layout">
        <div class="hero-copy reveal">
          <p class="eyebrow">{{ t("heroEyebrow") }}</p>
          <h1 id="heroTitle">
            <span>{{ t("heroLine1") }}</span>
            <em>{{ t("heroLine2") }}</em>
          </h1>
          <div class="byline">
            <div><i></i><strong>Phạm Duy Anh</strong><b></b><span>{{ t("heroRole") }}</span></div>
            <small>{{ t("heroMeta") }}</small>
          </div>
          <p class="hero-description">{{ t("heroDescription") }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#work">
              <span>{{ t("exploreWork") }}</span>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
            </a>
            <a class="button button-ghost" href="#about">
              <span>{{ t("seeJourney") }}</span>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10m-4-4 4 4 4-4" /></svg>
            </a>
          </div>
        </div>

        <aside class="terminal reveal" aria-label="Technical profile snapshot">
          <div class="terminal-chrome">
            <span class="window-dots"><i></i><i></i><i></i></span>
            <span>~/duy-anh/profile</span>
            <small><i></i> read-only</small>
          </div>
          <div class="terminal-body">
            <div class="scan-line" aria-hidden="true"></div>
            <p class="terminal-prompt"><span>$</span> cat strengths.toml</p>
            <p class="terminal-comment"># current capability snapshot</p>
            <ul class="skill-snapshot">
              <li
                v-for="(skill, index) in skillSnapshot"
                :key="skill.name"
                :style="{ '--level': `${skill.level}%`, '--delay': `${0.1 + index * 0.08}s` }"
              >
                <span>{{ skill.name }}</span><i><b></b></i><strong>{{ skill.level }}</strong>
              </li>
            </ul>
            <div class="terminal-footer"><span>status: <b>learning_every_day</b></span><i>▮</i></div>
          </div>
        </aside>
      </div>

      <div class="hero-foot reveal">
        <span>SCROLL TO INSPECT</span>
        <i></i>
        <span>01 / 06</span>
      </div>
    </div>
  </section>
</template>
