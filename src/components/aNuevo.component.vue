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
    <form id="newAForm">


      <div class="row">
        <textarea rows="1" cols="15" id="titulo" class="cStyle"></textarea>
      </div>
      <div class="row">
        <textarea rows="10" cols="70" id="contenido" class="cStyle"></textarea>
      </div>
      <button type="button" name="button" v-on:click="createArticulo()">Post</button>
    </form>
  </div>

</template>

<script>
export default {
    name: 'ANuevo',
    props: ['articleList', 'artNuevo'],
    methods: {

      createArticulo: function(){
        let tituloId = document.getElementById('titulo').value
        let contenidoId = document.getElementById('contenido').value
        //find a way to add one to the ID property on the articleList object
        let pNArticulo = this.articleList.push(  { title: tituloId, content: contenidoId })
        let newArtForm = document.getElementById('newAForm').reset()
        return pNArticulo
        //push(tituloId, contenidoId)
      }
    }

}

/*new vue ({
  el: '#titulo'
})*/
</script>
