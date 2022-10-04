import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueHead from "vue-head";
import {globalFunctions} from './globalFunctions';

import { LoaderPlugin } from "vue-google-login";

import '@/styles/styles.scss'

Vue.config.productionTip = false;

Vue.prototype.globalFunctions = globalFunctions;

if(window.location.href.includes('localhost')){
  Vue.prototype.apiUrl = 'http://127.0.0.1:8000'
}else{
  // Vue.prototype.apiUrl = 'https://api.qwikgeo.com'
  Vue.prototype.apiUrl = 'http://127.0.0.1:8000'
}

Vue.use(LoaderPlugin, {
  client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
});

Vue.use(VueHead);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
