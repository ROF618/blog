import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import Router from './router'


Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  Router,
  render: h => h(App),
  el: '#app',
}).$mount('#app')
