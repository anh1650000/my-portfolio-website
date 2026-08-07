<script setup>
import { projects } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();

function hasExtraDetails(project) {
  return Boolean(
    project.duration ||
      project.teamSize ||
      project.responsibilities?.length ||
      project.outcomes?.length,
  );
}
</script>

<template>
  <section id="work" class="section work" aria-labelledby="workTitle">
    <div class="shell">
      <header class="section-heading split-heading reveal">
        <div>
          <p class="section-kicker"><span>§</span> <span>{{ t("selectedWork") }}</span></p>
          <h2 id="workTitle">{{ t("workTitle") }}</h2>
        </div>
        <p>{{ t("workIntro") }}</p>
      </header>

      <div class="project-list">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card reveal"
          :class="{ featured: project.featured }"
        >
          <div class="project-number"><span>{{ project.number }}</span><small>/05</small></div>
          <div class="project-main">
            <p class="project-meta"><span>{{ project.metaKey ? t(project.metaKey) : project.meta }}</span><b>{{ project.year }}</b></p>
            <h3>{{ project.title }}</h3>
            <p>{{ t(project.descriptionKey) }}</p>
            <div class="project-details">
              <div><small>{{ t("role") }}</small><strong>{{ project.roleKey ? t(project.roleKey) : project.role }}</strong></div>
              <div>
                <small>{{ t("stack") }}</small>
                <ul><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul>
              </div>
            </div>

            <div v-if="hasExtraDetails(project)" class="project-case-study">
              <div v-if="project.duration"><small>{{ t("projectDuration") }}</small><strong>{{ project.duration }}</strong></div>
              <div v-if="project.teamSize"><small>{{ t("projectTeamSize") }}</small><strong>{{ project.teamSize }}</strong></div>
              <div v-if="project.responsibilities?.length">
                <small>{{ t("projectResponsibilities") }}</small>
                <ul><li v-for="item in project.responsibilities" :key="item">{{ item }}</li></ul>
              </div>
              <div v-if="project.outcomes?.length">
                <small>{{ t("projectOutcomes") }}</small>
                <ul><li v-for="item in project.outcomes" :key="item">{{ item }}</li></ul>
              </div>
            </div>

            <div class="project-actions">
              <a :href="project.url" target="_blank" rel="noreferrer">
                <span>{{ t("viewRepository") }}</span>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
              </a>
              <a v-if="project.liveDemoUrl" :href="project.liveDemoUrl" target="_blank" rel="noreferrer">
                <span>{{ t("liveDemo") }}</span>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
              </a>
              <span v-else class="project-action-disabled">{{ t("liveDemo") }} · {{ t("comingSoon") }}</span>
              <a v-if="project.videoDemoUrl" :href="project.videoDemoUrl" target="_blank" rel="noreferrer">
                <span>{{ t("videoDemo") }}</span>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
              </a>
              <span v-else class="project-action-disabled">{{ t("videoDemo") }} · {{ t("comingSoon") }}</span>
            </div>
          </div>

          <div v-if="project.featured" class="project-visual ai-visual" aria-hidden="true">
            <div class="nodes"><i></i><i></i><i></i><i></i><i></i></div>
            <div class="query">QUERY → RETRIEVE → GROUND → ANSWER</div>
            <span>RAG.PIPELINE / LIVE</span>
          </div>
        </article>
      </div>

      <a
        class="dossier-link reveal"
        href="https://github.com/anh1650000?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <span>★ END OF DOSSIER · {{ t("allProjects") }} ★</span>
      </a>
    </div>
  </section>
</template>
