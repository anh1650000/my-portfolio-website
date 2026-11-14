<script setup>
import { profile, stackOverview } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>

<template>
  <section id="home" class="hero section-grid" aria-labelledby="heroTitle">
    <div class="hero-mesh parallax-layer" data-parallax="-0.035" aria-hidden="true"></div>
    <div class="hero-grid-bg parallax-layer" data-parallax="0.018" aria-hidden="true"></div>
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
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10m-4-4 4 4 4-4" /></svg>
            </a>
            <a class="button button-ghost" :href="profile.github" target="_blank" rel="noreferrer">
              <span>{{ t("githubProfile") }}</span>
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
            </a>
          </div>
        </div>

        <aside class="terminal reveal" aria-label="Technical stack overview">
          <div class="terminal-chrome">
            <span class="window-dots"><i></i><i></i><i></i></span>
            <span>~/duy-anh/stack</span>
            <small><i></i> 2026.11</small>
          </div>
          <div class="terminal-body">
            <div class="scan-line" aria-hidden="true"></div>
            <p class="terminal-prompt"><span>$</span> cat stack.toml</p>
            <ul class="stack-overview">
              <li v-for="item in stackOverview" :key="item.area">
                <span>{{ item.area }}</span>
                <strong>{{ item.tools }}</strong>
              </li>
            </ul>
            <div class="terminal-footer"><span>focus: <b>AI · Computer Vision · LLM Systems</b></span><i>▮</i></div>
          </div>
        </aside>
      </div>

      <div class="hero-foot reveal">
        <span>CAN THO UNIVERSITY · K49</span>
        <i></i>
        <span>GITHUB.COM/ANH1650000</span>
      </div>
    </div>
  </section>
</template>
