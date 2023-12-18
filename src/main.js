import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./js/copy";
import VirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import router from "./router";

async function mount() {
  const app = await createApp(App);
  app.use(VirtualScroller);
  app.use(router);
  app.mount("#app");
}

async function bootstrapWorker() {
  const { worker } = await import("./mocks");
  worker.start().then(() => {
    mount;
  });
}

if (process.env.NODE_ENV !== "development") {
  bootstrapWorker();
} else {
  mount();
}
