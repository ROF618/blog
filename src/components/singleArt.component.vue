<template lang="html">
  <div class="container-fluid">
    <div v-if="posted">
      <h3>{{blog.title}}</h3>
      <article>{{blog.content}}</article>
      <button type="button" v-on:click="editFn()">Edit</button><button type="button" v-on:click="removeFn()">Delete</button>
      <div class="alert alert-success alert-dismissible invisible" id="successMes">
        <a href="#" class="close" data-dismiss="alert">&times;</a>
        <strong>Success!</strong> Your post has been updated.
      </div>
      <div class="alert alert-danger alert-dismissible invisible" id="failedMes">
        <a href="#" class="close" data-dismiss="alert">&times;</a>
        <strong>OOPS!</strong> Your post was not updated. Please try again later.
      </div>
    </div>

      <div v-else>
        <div class="row">
          <textarea rows="1" cols="15" class="editBox" v-model="blog.title" id="title"></textarea>
        </div>
        <div class="row">
          <textarea rows="10" cols="70" class="editBox" v-model="blog.content" id="content"></textarea>
        </div>

        <button type="button" v-on:click="updateFn()">Update</button>
      </div>

  </div>
</template>

<style lang="css">
.editBox {
  margin: 0 auto;
}
</style>

<script>
import firebase from 'firebase'
export default {
  props: ['articleList', 'reset'],
  data(){
    return {
      id: this.$route.params.id,
      posted: true,
      blog: {}
    }
  },
  methods: {
    editFn: function(){
        return this.posted = !this.posted
      },
    updateFn: function(){
      firebase.database().ref('posts/' + this.id).set({
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,

      }, function(error){
        if(error){
          let successSArt = document.getElementById('failedMes')
           return successSArt.classList.remove("invisible")
        }else{
          let successSArt = document.getElementById('successMes')
           return successSArt.classList.remove("invisible")
        }
      })
      this.$emit('updateBlog')
      return this.posted = !this.posted
    },
    removeFn: function(){
      let delMessage = 'Are you sure you want to delete this post?'
        if(confirm(delMessage)){
          firebase.database().ref('posts/' + this.id).remove()
          this.$emit('updateBlog')
          return this.$router.replace({ path: '/' })
        }else{
          console.log('Nice')
        }
    }

  },

  created(){
    this.$http.get('https://workylabtecnico.firebaseio.com/posts/' + this.id +'.json').then(function(response){
      return response.json()
    }).then(function(data){
      return this.blog = data

    })
  }

}
</script>
