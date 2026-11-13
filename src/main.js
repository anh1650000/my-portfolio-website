import { inject } from "@vercel/analytics";
import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.css";

inject({ framework: "vue" });

createApp(App).mount("#app");
