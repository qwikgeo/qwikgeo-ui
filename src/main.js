import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {globalFunctions} from './globalFunctions';

import { LoaderPlugin } from "vue-google-login";

import '@/styles/styles.scss'

Vue.config.productionTip = false;

Vue.prototype.globalFunctions = globalFunctions;
Vue.prototype.GOOGLE_CLIENT_ID = "406362590745-cj472811c26nu77fm5m981vkvk2ph8me.apps.googleusercontent.com";

if(window.location.href.includes('localhost')){
  Vue.prototype.apiUrl = 'http://127.0.0.1:8000'
}else{
  // Vue.prototype.apiUrl = 'https://api.qwikgeo.com'
  Vue.prototype.apiUrl = 'http://127.0.0.1:8000'
}

Vue.use(LoaderPlugin, {
  client_id: Vue.prototype.GOOGLE_CLIENT_ID,
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
