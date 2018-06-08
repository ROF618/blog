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
    <button type="button" name="artNuevo" v-if="!artNuevo" v-on:click="artNuevoFN()">Articulo Nuevo</button>

    <div class="row">
      <div v-if="artNuevo" class="col-lg-10">
        <ANuevo />
      </div>
      <div v-else class="col-lg-9">
        <Home />
      </div>
      <!--remeber to switch the this out for the articulo component-->
      <div class="col-lg-3">
        <Articulos />
      </div>
    </div>


  </div>
</template>

<script>
import Home from './components/home.component.vue'
import ANuevo from './components/aNuevo.component.vue'
import Articulos from './components/articulos.component.vue'

export default {
  name: 'app',
  components: {
    Home,
    ANuevo,
    Articulos
  }, data(){
    return {
      artNuevo: false
    }
  },
  props: {
    articulo: {
      type: Array
    }
  },
  methods: {
    artNuevoFN: function(){
      return this.artNuevo = !this.artNuevo
    }
  }

}
</script>
