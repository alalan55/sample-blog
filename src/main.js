import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/main.scss";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
};

app.use(createPinia());
app.use(router);
app.use(Toast, options);

app.mount("#app");
