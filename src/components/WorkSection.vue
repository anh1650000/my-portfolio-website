<script setup>
import { onBeforeUnmount, ref, watch } from "vue";
import { profile, projects } from "../data/portfolio";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const totalProjects = String(projects.length).padStart(2, "0");
const activeDemoProject = ref(null);

function isYouTubeUrl(url) {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname.includes("youtube.com") || parsedUrl.hostname.includes("youtu.be");
  } catch {
    return false;
  }
}

function getVideoEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;

      const embeddedMatch = parsedUrl.pathname.match(/\/embed\/([^/?]+)/);
      if (embeddedMatch?.[1]) {
        return `https://www.youtube.com/embed/${embeddedMatch[1]}`;
      }
    }
  } catch {
    return url;
  }

  return url;
}

function openDemo(project) {
  if (!project?.videoDemoUrl) return;
  activeDemoProject.value = project;
}

function closeDemo() {
  activeDemoProject.value = null;
}

function handleKeydown(event) {
  if (event.key === "Escape" && activeDemoProject.value) {
    closeDemo();
  }
}

watch(activeDemoProject, (project) => {
  document.body.classList.toggle("modal-open", Boolean(project));
  if (project) {
    window.addEventListener("keydown", handleKeydown);
  } else {
    window.removeEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.body.classList.remove("modal-open");
});
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
          :class="{ featured: Boolean(project.flow) }"
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

              <button
                v-if="project.videoDemoUrl"
                type="button"
                class="project-demo-btn"
                @click="openDemo(project)"
              >
                <span class="demo-play" aria-hidden="true">▶</span>
                <span>{{ t("watchDemo") }}</span>
              </button>
              <button
                v-else-if="project.hasDemo"
                type="button"
                class="project-demo-btn is-pending"
                disabled
                aria-disabled="true"
                :title="t('demoPendingHint')"
              >
                <span class="demo-play" aria-hidden="true">▶</span>
                <span>{{ t("demoPending") }}</span>
              </button>
            </div>
          </div>

          <div v-if="project.flow" class="project-visual agent-flow" aria-hidden="true">
            <header class="flow-head">
              <span>{{ project.flow.title }}</span>
              <small :class="`tone-${project.flow.badgeTone || 'cyan'}`">{{ project.flow.badge }}</small>
            </header>

            <div class="flow-graph">
              <template v-for="(group, groupIndex) in project.flow.groups" :key="groupIndex">
                <div
                  v-if="groupIndex > 0"
                  class="flow-connector"
                  :style="{ '--flow-index': groupIndex }"
                >
                  <i></i>
                </div>

                <div v-if="group.type === 'retry'" class="flow-retry-zone">
                  <div class="flow-retry-nodes">
                    <template v-for="(node, nodeIndex) in group.nodes" :key="node.step">
                      <div
                        v-if="nodeIndex > 0"
                        class="flow-connector"
                        :style="{ '--flow-index': groupIndex + nodeIndex }"
                      >
                        <i></i>
                      </div>
                      <div
                        class="flow-node"
                        :class="node.tone ? `flow-node-${node.tone}` : ''"
                        :style="{ '--flow-index': groupIndex + nodeIndex + 1 }"
                      >
                        <span class="flow-step">{{ node.step }}</span>
                        <div class="flow-copy">
                          <strong>{{ node.name }}</strong>
                          <small>{{ node.detail }}</small>
                        </div>
                      </div>
                    </template>
                  </div>
                  <div class="flow-retry-rail">
                    <span>{{ group.label }}</span>
                  </div>
                </div>

                <div
                  v-else
                  class="flow-node"
                  :class="group.tone ? `flow-node-${group.tone}` : ''"
                  :style="{ '--flow-index': groupIndex + 1 }"
                >
                  <span class="flow-step">{{ group.step }}</span>
                  <div class="flow-copy">
                    <strong>{{ group.name }}</strong>
                    <small>{{ group.detail }}</small>
                  </div>
                </div>
              </template>
            </div>
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

    <Teleport to="body">
      <div
        v-if="activeDemoProject"
        class="cv-modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demoModalTitle"
        @click.self="closeDemo"
      >
        <div class="cv-modal demo-modal">
          <header class="cv-modal-header">
            <div class="cv-modal-title">
              <span class="cv-modal-badge">MP4</span>
              <strong id="demoModalTitle">{{ activeDemoProject.title }}</strong>
            </div>
            <div class="cv-modal-actions">
              <a
                v-if="activeDemoProject.url"
                class="button button-ghost cv-modal-btn"
                :href="activeDemoProject.url"
                target="_blank"
                rel="noreferrer"
              >
                <span>{{ t("viewRepository") }}</span><b>↗</b>
              </a>
              <button
                class="cv-modal-close"
                type="button"
                :aria-label="t('closeDemoModal')"
                @click="closeDemo"
              >
                ×
              </button>
            </div>
          </header>

          <div class="demo-modal-body">
            <iframe
              v-if="isYouTubeUrl(activeDemoProject.videoDemoUrl)"
              :key="activeDemoProject.videoDemoUrl"
              class="demo-modal-video demo-modal-iframe"
              :src="getVideoEmbedUrl(activeDemoProject.videoDemoUrl)"
              title="Demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>

            <video
              v-else
              :key="activeDemoProject.videoDemoUrl"
              class="demo-modal-video"
              :src="activeDemoProject.videoDemoUrl"
              controls
              autoplay
              playsinline
            ></video>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
