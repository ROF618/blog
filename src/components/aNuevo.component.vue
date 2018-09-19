<template>
  <div class="container-fluid">
    <form id="newAForm">


      <div class="row">
        <textarea rows="1" cols="15" id="titulo" class="cStyle" v-model="blog.title"></textarea>
      </div>
      <div class="row">
        <textarea rows="10" cols="70" id="contenido" class="cStyle" v-model="blog.content"></textarea>
      </div>
      <div class="row">
        <button type="button" name="button" v-on:click="post()" class="cStyle">Post</button>
      </div>
    </form>

    <div class="row">
      <span class="cStyle">{{blog.title}}</span>
    </div>
    <div class="row">
      <span class="cStyle">{{blog.content}}</span>
    </div>
  </div>

</template>

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

<script>
export default {
    name: 'ANuevo',
    props: ['articleList', 'artNuevo'],
    data(){
      return{
        blog: {
          title: "",
          content: "",
        }
      }
    },
    methods: {
      post: function(){

        this.$http.post('https://workylabtecnico.firebaseio.com/posts.json', this.blog).then(function(data){
          this.blog.title = ""
          this.blog.content = ""
          document.getElementById('newAForm').reset();

          if(data.status > 300){
            console.log('there was an error')
          }else{
            console.log('There was no error')
          }
        })




      }
    }

}


</script>
