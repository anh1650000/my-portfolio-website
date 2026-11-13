<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from "vue";
import { useI18n } from "../composables/useI18n";

const { language, t } = useI18n();
const isOpen = ref(false);
const draft = ref("");
const isTyping = ref(false);
const messageList = ref(null);
const messageInput = ref(null);
const messages = ref([{ role: "assistant", text: t("chatWelcome") }]);
const quickPrompts = ["chatPromptProjects", "chatPromptSkills", "chatPromptContact"];

let responseTimer;

function scrollToLatest() {
  nextTick(() => {
    if (messageList.value) {
      messageList.value.scrollTop = messageList.value.scrollHeight;
    }
  });
}

function openChat() {
  isOpen.value = true;
  nextTick(() => messageInput.value?.focus());
}

function closeChat() {
  isOpen.value = false;
}

function handleKeydown(event) {
  if (event.key === "Escape") closeChat();
}

function getPreviewResponse(question) {
  const normalized = question.toLocaleLowerCase();

  if (/project|projects|dự án|du an|built|xây dựng/.test(normalized)) {
    return t("chatAnswerProjects");
  }
  if (/skill|skills|stack|technology|công nghệ|cong nghe|kỹ năng|ky nang/.test(normalized)) {
    return t("chatAnswerSkills");
  }
  if (/contact|email|liên hệ|lien he/.test(normalized)) {
    return t("chatAnswerContact");
  }

  return t("chatAnswerGeneral");
}

function sendMessage(text = draft.value) {
  const content = text.trim();
  if (!content || isTyping.value) return;

  messages.value.push({ role: "user", text: content });
  draft.value = "";
  isTyping.value = true;
  scrollToLatest();

  responseTimer = window.setTimeout(() => {
    messages.value.push({ role: "assistant", text: getPreviewResponse(content) });
    isTyping.value = false;
    scrollToLatest();
  }, 700);
}

watch(isOpen, (open) => {
  if (open) {
    window.addEventListener("keydown", handleKeydown);
  } else {
    window.removeEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  if (responseTimer) window.clearTimeout(responseTimer);
});
</script>

<template>
  <div class="chat-widget">
    <Transition name="chat-panel">
      <section
        v-if="isOpen"
        id="portfolioChat"
        class="chat-panel"
        role="dialog"
        aria-modal="false"
        aria-labelledby="chatTitle"
      >
        <header class="chat-header">
          <div class="chat-identity">
            <span class="chat-avatar" aria-hidden="true">AI</span>
            <div>
              <h2 id="chatTitle">{{ t("chatTitle") }}</h2>
              <p><i></i>{{ t("chatPreviewStatus") }}</p>
            </div>
          </div>
          <button
            class="chat-close"
            type="button"
            :aria-label="t('chatClose')"
            @click="closeChat"
          >
            ×
          </button>
        </header>

        <div ref="messageList" class="chat-messages" aria-live="polite">
          <div v-for="(message, index) in messages" :key="index" class="chat-message-row" :class="message.role">
            <span v-if="message.role === 'assistant'" class="chat-message-avatar" aria-hidden="true">AI</span>
            <p class="chat-message">{{ message.text }}</p>
          </div>

          <div v-if="isTyping" class="chat-message-row assistant" aria-label="Assistant is typing">
            <span class="chat-message-avatar" aria-hidden="true">AI</span>
            <div class="chat-message chat-typing" aria-hidden="true"><i></i><i></i><i></i></div>
          </div>

          <div v-if="messages.length === 1" class="chat-prompts">
            <button
              v-for="promptKey in quickPrompts"
              :key="promptKey"
              type="button"
              @click="sendMessage(t(promptKey))"
            >
              {{ t(promptKey) }} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <p class="chat-preview-note">{{ t("chatPreviewNote") }}</p>
        <form class="chat-composer" @submit.prevent="sendMessage()">
          <input
            ref="messageInput"
            v-model="draft"
            :placeholder="t('chatPlaceholder')"
            :aria-label="t('chatPlaceholder')"
            autocomplete="off"
          />
          <button type="submit" :disabled="!draft.trim() || isTyping" :aria-label="t('chatSend')">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
          </button>
        </form>
      </section>
    </Transition>

    <button
      class="chat-launcher"
      type="button"
      aria-controls="portfolioChat"
      :aria-expanded="isOpen"
      :aria-label="isOpen ? t('chatClose') : t('chatOpen')"
      @click="isOpen ? closeChat() : openChat()"
    >
      <svg v-if="!isOpen" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.5-.8L4 20l1.2-4.1A7.4 7.4 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5h.5A7.5 7.5 0 0 1 20 11v.5Z" />
        <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
      </svg>
      <span v-else aria-hidden="true">×</span>
    </button>
  </div>
</template>
