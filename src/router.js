import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.component.vue'
import ANuevo from './components/aNuevo.component.vue'
import Articulos from './components/articulos.component.vue'
import headerApp from './components/headerApp.component.vue'




export default[

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/aNuevo',
      name: 'aNuevo',
      component: ANuevo
    },
    {
      path: '/headerApp',

      component: headerApp
    },
    {
      path: '/articulos',

      component: Articulos
    }

]
