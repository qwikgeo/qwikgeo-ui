import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#393e46',
          secondary: '#f9bf22',
          accent: '#17bebb'
        },
      },
    },
})
