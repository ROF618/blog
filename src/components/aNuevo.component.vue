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
    <div class="alert alert-success alert-dismissible invisible" id="successMes">
      <a href="#" class="close" data-dismiss="alert">&times;</a>
      <strong>Success!</strong> Your post has been updated.
    </div>
    <div class="alert alert-danger alert-dismissible invisible" id="failedMes">
      <a href="#" class="close" data-dismiss="alert">&times;</a>
      <strong>OOPS!</strong> Your post was not updated. Please try again later.
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
          this.$emit('updateBlog')
          if(data.status > 300){
            let successSArt = document.getElementById('failedMes')
             return successSArt.classList.remove("invisible")
          }else{
            let successSArt = document.getElementById('successMes')
             return successSArt.classList.remove("invisible")
          }
        })
        
      }
    }

}


</script>
