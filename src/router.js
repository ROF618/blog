import Home from './components/home.component.vue'
import ANuevo from './components/aNuevo.component.vue'
import Articulos from './components/articulos.component.vue'
import headerApp from './components/headerApp.component.vue'
import singleArt from './components/singleArt.component.vue'




export default[

    {
      path: '/',
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
      path: '/singleArt/:id',
      name: 'singleArt',
      component: singleArt
    },
    {
      path: '/articulos',

      component: Articulos
    }

]
