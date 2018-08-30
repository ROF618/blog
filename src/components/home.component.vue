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
      <div v-if="posted" class="col-lg-12" v-for="blog in articleList">
        <h3>{{ blog.title }}</h3>
        {{ blog.content}}

      </div>
      <div v-else class="col-lg-12">

      <textarea v-model="title" name="name" rows="1" cols="15"></textarea><br>
      <textarea name="Text1" rows="10" cols="70" id="contenido" v-model="content"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-md-11">
      <form class="" action="index.html" method="post">


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
          posted: true

        }
    },
    methods: {

      editFn: function(){
        return this.posted = !this.posted
      }
    },


    props: ['articleList']

}

/*new vue ({
  el: '#titulo'
})*/
</script>
