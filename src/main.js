import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./js/higherOrderFunction";

async function bootstrapWorker() {
  const { worker } = await import("./mocks");

  worker.start().then(() => {
    createApp(App).mount("#app");
  });
}

if (process.env.NODE_ENV !== "development") {
  bootstrapWorker();
} else {
  createApp(App).mount("#app");
}
