import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#112a53",
        secondary: "#f89406",
        accent: "#8c9eff",
        error: "#b71c1c",
        abcd: "#ffffff",
      },
    },
  },
});
