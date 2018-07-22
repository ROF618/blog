import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router'
import routes from './router'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)

const router = new VueRouter({ routes: routes })

new Vue({
  router,
  render: h => h(App),
  el: '#app',
}).$mount('#app')
