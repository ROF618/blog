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



#titulo {
  display: block;
  margin: 0 auto;
}

</style>

<template>

<div>
  <div class="container-fluid">
    <div class="row">
      <div v-if="posted" class="col-lg-12">
        <h3>{{ test[0].title }}</h3>

      </div>
      <div v-else class="col-lg-12">

      <textarea v-model="title" name="name" rows="1" cols="15"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-md-11">
      <form class="" action="index.html" method="post">
        <div v-if="posted" class="col-md-10">{{ test[0].content}}</div>
        <div v-else class="col-md-11"><textarea name="Text1" rows="10" cols="70" id="contenido" v-model="content"></textarea></div>

      </form>

      </div>

    </div>
  </div>
  <button v-if="posted" v-on:click="editFn()" type="button" name="button">editar</button>



</div>

</template>

<script>
export default {


    name: 'Home',
    data() {
        return{
          posted: true,
          id: 0,

          title: 'Lorem Ipsum',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          titulo: ''



        }
    },
    methods: {
      /*
      articulo: function(index, titulo, contenido){
        this.index = index
        this.titulo = titulo
        this.contenido = contenido
      },*/


      editFn: function(){
        return this.posted = !this.posted
      }
    },

    props: ['test']

}

/*new vue ({
  el: '#titulo'
})*/
</script>
