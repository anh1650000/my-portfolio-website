<script setup>
import { profile, projects } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const totalProjects = String(projects.length).padStart(2, "0");
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
          <div class="project-number"><span>{{ project.number }}</span><small>/{{ totalProjects }}</small></div>
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

            <div v-if="project.outcomes?.length" class="project-case-study">
              <div>
                <small>{{ t("projectOutcomes") }}</small>
                <ul>
                  <li v-for="item in project.outcomes" :key="item.textKey">{{ t(item.textKey) }}</li>
                </ul>
              </div>
            </div>

            <div class="project-actions">
              <a v-if="project.url" :href="project.url" target="_blank" rel="noreferrer">
                <span>{{ t("viewRepository") }}</span>
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M5 5h6v6" /></svg>
              </a>
              <span v-else-if="project.noteKey" class="project-note">{{ t(project.noteKey) }}</span>
            </div>
          </div>

          <div v-if="project.featured" class="project-visual ai-visual" aria-hidden="true">
            <div class="nodes"><i></i><i></i><i></i><i></i><i></i></div>
            <div class="query">PARSE → EXTRACT → VERIFY → RECONCILE → REPORT</div>
            <span>LANGGRAPH.STATEGRAPH</span>
          </div>
        </article>
      </div>

      <a
        class="dossier-link reveal"
        :href="`${profile.github}?tab=repositories`"
        target="_blank"
        rel="noreferrer"
      >
        <span>{{ t("allProjects") }} ↗</span>
      </a>
    </div>
  </section>
</template>
