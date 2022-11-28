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
  Vue.prototype.apiUrl = 'https://api.qwikgeo.com'
  // Vue.prototype.apiUrl = 'http://127.0.0.1:8000'
}

Vue.use(LoaderPlugin, {
  client_id: Vue.prototype.GOOGLE_CLIENT_ID,
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.mapboxToken = "pk.eyJ1IjoibWtlbGxlcjMiLCJhIjoieFdYUUg5TSJ9.qzhP1v5f1elHrnTV4YpkiA"

Vue.prototype.basemaps = [
    {
        "name": "Streets",
        "styleID": "mapbox/streets-v11"
    },
    {
        "name": "Outdoors",
        "styleID": "mapbox/outdoors-v11"
    },
    {
        "name": "Light",
        "styleID": "mapbox/light-v10"
    },
    {
        "name": "Dark",
        "styleID": "mapbox/dark-v10"
    },
    {
        "name": "Satellite ",
        "styleID": "mapbox/satellite-v9"
    },
    {
        "name": "Satellite Streets",
        "styleID": "mapbox/satellite-streets-v11"
    },
    {
        "name": "Navigation Day",
        "styleID": "mapbox/navigation-day-v1"
    }
]