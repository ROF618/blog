<template lang="html">
  <div class="container-fluid">
    <div v-if="posted">
      <h3>{{blog.title}}</h3>
      <article>{{blog.content}}</article>
      <button type="button" v-on:click="editFn()">Edit</button>
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
          content: document.getElementById('content').value
        }, function(error){
          if(error){
            console.log('the write failed')
          }else{
            console.log('the write succeeded')
          }
        })
        return this.posted = !this.posted
      }
  },
  created(){
    this.$http.get('https://workylabtecnico.firebaseio.com/posts/' + this.id +'.json').then(function(response){
      return response.json()
    }).then(function(data){
      return this.blog = data

    })
  },
  props: ['articleList']
}
</script>
