<template lang="html">
  <div class="container-fluid">
    <div v-if="posted">
      <h3>{{blog.title}}</h3>
      <article>{{blog.content}}</article>
      <button type="button" v-on:click="editFn()">Edit</button>
    </div>
    <div v-else>
      <textarea class="editBox">{{blog.title}}</textarea>
      <textarea class="editBox">{{blog.content}}</textarea>
      <button type="button" v-on:click="editFn()">Edit</button>
    </div>
  </div>
</template>

<style lang="css">
</style>

<script>
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
