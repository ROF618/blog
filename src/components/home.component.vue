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

textarea {
  margin-left: 150px;
}

#titulo {
  display: block;
  margin: 0 auto;
}

</style>

<template>

<div class="hello">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        Titulo<input type="text" name="titulo" value="" id="titulo">
      </div>
    </div>
    <div class="row">
      <div class="col-md-11">
      <form class="" action="index.html" method="post">

        <textarea name="Text1" rows="10" cols="70"></textarea>
      </form>
      </div>
      <div class="col-md-1">
        <ul>
          <li><a href="#">link1</a></li>
          <li><a href="#">link2</a></li>
          <li><a href="#">link3</a></li>
        </ul>
      </div>
    </div>
  </div>
  <button v-on:click="createArticulo('1', 'titulo', 'LoremIpsul')" type="button" name="button">Post</button>



</div>

</template>

<script>

export default {
    name: 'Home',
    props: {
        msg: String
    },
    methods: {
      createArticulo: function (index,titulo, contenido){
        return alert(index, titulo, contenido)
      }
    }
}

</script>
