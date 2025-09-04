import { createApp } from "vue";
import "@/assets/styles/index.css";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/fonts/Poppins-Medium.ttf";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(router); // Add this line!
app.mount("#app");
