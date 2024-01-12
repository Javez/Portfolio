import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import colors from "vuetify/util/colors";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";



const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: colors.grey.lighten5,
        },
      },
    },
  },
});

createApp(App).use(vuetify).mount("#app");
