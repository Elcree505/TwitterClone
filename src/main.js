import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/tailwind.css";

createApp(App).use(store).use(router).mount("#app");
