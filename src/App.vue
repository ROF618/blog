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
        <router-view v-bind:articleList="articleList, reset" ref="router" :key="$route.path"  v-on:updateBlog="updateArt()"></router-view>
      </div>
      <div class="col-lg-3">
        <Articulos v-bind:articleList="articleList" v-on:updateBlog="updateArt()"/>
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
      //the singleArt component does not register for some reason; find out why
      articleList: [],
      reset: 0
    }
  },
//make a Watch method to monitor a property; watch method will reload the function that runs on the created hook
  methods: {
    updateArt: function(){
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
  },

  created(){
    //pulls data from firebase and attaches it to articleList property
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
