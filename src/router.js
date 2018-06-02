import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.component.vue'
import ANuevo from './components/aNuevo.component.vue'
import Articulos from './components/articulos.component.vue'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aNuevo',
      name: 'ANuevo',
      component: ANuevo
    },
    {
      path: '/articulos',
      name: 'Articulos',
      component: Articulos
    }
  ]
})
