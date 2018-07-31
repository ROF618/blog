<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <div class="row">
      <div class="col-lg-12">
        <headerApp />
      </div>
    </div>
    <!--<button type="button" name="artNuevo" v-if="!artNuevo" v-on:click="artNuevoFN()">Articulo Nuevo</button>-->

    <div class="row">
      <div class="col-lg-9">
        <router-view v-bind:articleList="articleList, prueba"></router-view>
      </div>


    <!--

      <div v-if="artNuevo" class="col-lg-9">
        <ANuevo v-bind:articleList="articleList, artNuevo" />
      </div>
      <div v-else class="col-lg-9">
        <Home v-bind:articleList="articleList, prueba" />
      </div>
    -->
      <div class="col-lg-3">
        <Articulos v-bind:articleList="articleList" />
      </div>
    </div>


  </div>
</template>

<script>
import Home from './components/home.component.vue'
import ANuevo from './components/aNuevo.component.vue'
import Articulos from './components/articulos.component.vue'
import headerApp from './components/headerApp.component.vue'

export default {
  name: 'app',
  components: {
    Home,
    ANuevo,
    Articulos,
    headerApp
  }, data(){
    return {
      artNuevo: false,
      //add articleList as a mixin so you can import to each compnent instead of binding through props
      prueba: 0,
      articleList: [
        { id: 1, title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
        { id: 2, title: 'dolor sit amet', content: ''},
        { id: 3, title: 'consectetur adipiscing', content: ''}
      ],

    }
  },

  methods: {
    artNuevoFN: function(){
      return this.artNuevo = !this.artNuevo
    }
  }

}
</script>
