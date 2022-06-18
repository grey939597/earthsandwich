import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const customColors = {
  primary: "#173773",
  secondary: "#1BCC5A",
};

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: false,
    themes: {
      light: {
        ...colors,
        ...customColors,
      },
      dark: {
        ...colors,
        ...customColors,
      },
    },
  },
});
