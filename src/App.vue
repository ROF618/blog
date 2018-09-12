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
        <router-view v-bind:articleList="articleList, prueba" :key="$route.path"></router-view>
      </div>
      <div class="col-lg-3">
        <Articulos v-bind:articleList="articleList" />
      </div>
    </div>


  </div>
</template>

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

<script>
import Home from './components/home.component.vue'
import ANuevo from './components/aNuevo.component.vue'
import Articulos from './components/articulos.component.vue'
import headerApp from './components/headerApp.component.vue'
import singleArt from './components/singleArt.component.vue'

export default {
  name: 'app',
  components: {
    Home,
    ANuevo,
    Articulos,
    singleArt,
    headerApp
  }, data(){
    return {
      artNuevo: false,
      //the singleArt component does not register for some reason; find out why
      prueba: 0,
      articleList: []
    }
  },

  methods: {
    artNuevoFN: function(){
      return this.artNuevo = !this.artNuevo
    }
  },
  created(){
    this.$http.get('https://workylabtecnico.firebaseio.com/posts.json').then(function(data){
      return data.json()
    }).then(function(data){
      let blogsArray = []
      for(let key in data){
        data[key].id = key
        blogsArray.push(data[key])
      }
      this.articleList = blogsArray

    })
  }


}
</script>
