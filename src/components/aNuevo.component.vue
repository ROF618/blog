<style scoped>

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.cStyle {
  margin: 0 auto;
}

</style>

<template>
  <div class="container-fluid">

    <div class="row">
      <textarea rows="1" cols="15" id="titulo" class="cStyle"></textarea>
    </div>
    <div class="row">
      <textarea rows="10" cols="70" id="contenido" class="cStyle"></textarea>
    </div>
    <button type="button" name="button" v-on:click="createArticulo()">Post</button>

  </div>

</template>

<script>
export default {
    name: 'ANuevo',
    props: {
        id: Number
    },
    methods: {
      /*articulo: function(index, titulo, contenido){
        this.index = index
        this.titulo = titulo
        this.contenido = contenido
      },*/
      createArticulo: function(){
        let tituloId = document.getElementById('titulo').value
        let contenidoId = document.getElementById('contenido').value
        return console.log(tituloId)
        //push(tituloId, contenidoId)
      }
    }

}

/*new vue ({
  el: '#titulo'
})*/
</script>
