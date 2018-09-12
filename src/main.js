import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router'
import routes from './router'
import VueResource from 'vue-resource'
import firebase from 'firebase'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkEWcFXwkOSK_aM_amtq2RqL3jJEPNeWE",
    authDomain: "workylabtecnico.firebaseapp.com",
    databaseURL: "https://workylabtecnico.firebaseio.com",
    projectId: "workylabtecnico",
    storageBucket: "workylabtecnico.appspot.com",
    messagingSenderId: "1000188479094"
  };
  firebase.initializeApp(config);

const router = new VueRouter({ routes: routes })

new Vue({
  router,
  render: h => h(App),
  el: '#app',
}).$mount('#app')
