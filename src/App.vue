<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import ActivitiesSection from "./components/ActivitiesSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import JourneySection from "./components/JourneySection.vue";
import MetricsStrip from "./components/MetricsStrip.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ResumeSection from "./components/ResumeSection.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SkillsSection from "./components/SkillsSection.vue";
import WorkSection from "./components/WorkSection.vue";

const scrollRatio = ref(0);
const scrolled = ref(false);
const showBackToTop = ref(false);
const activeSection = ref("home");
const cursorGlow = ref(null);

let revealObserver;
let sectionObserver;

function updateScrollUi() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollRatio.value = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrolled.value = window.scrollY > 16;
  showBackToTop.value = window.scrollY > window.innerHeight * 0.7;
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handlePointerMove(event) {
  if (!cursorGlow.value) return;
  cursorGlow.value.style.left = `${event.clientX}px`;
  cursorGlow.value.style.top = `${event.clientY}px`;
  cursorGlow.value.style.opacity = "1";
}

function handlePointerLeave() {
  if (cursorGlow.value) cursorGlow.value.style.opacity = "0";
}

onMounted(async () => {
  updateScrollUi();
  window.addEventListener("scroll", updateScrollUi, { passive: true });

  await nextTick();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px" },
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) activeSection.value = visible.target.id;
    },
    { threshold: [0.2, 0.45, 0.7], rootMargin: "-20% 0px -55%" },
  );

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollUi);
  window.removeEventListener("pointermove", handlePointerMove);
  document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
  revealObserver?.disconnect();
  sectionObserver?.disconnect();
});
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="scroll-progress" aria-hidden="true"><span :style="{ transform: `scaleX(${scrollRatio})` }"></span></div>

  <SiteHeader :scrolled="scrolled" :active-section="activeSection" />

  <main id="main">
    <HeroSection />
    <MetricsStrip />
    <AboutSection />
    <SkillsSection />
    <WorkSection />
    <JourneySection />
    <ActivitiesSection />
    <ResumeSection />
    <ProcessSection />
    <ContactSection />
  </main>

  <SiteFooter />

  <button
    class="back-to-top"
    :class="{ visible: showBackToTop }"
    type="button"
    aria-label="Back to top"
    @click="backToTop"
  >
    ↑
  </button>
  <div ref="cursorGlow" class="cursor-glow" aria-hidden="true"></div>
</template>
