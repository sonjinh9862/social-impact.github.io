import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import LoadScript from "vue-plugin-load-script";

createApp(App)
  .use(router)
  .use(LoadScript)
  .provide("$axios", axios)
  .mount("#app");
