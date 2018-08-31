<template lang="html">
  <div class="container-fluid">
    
    <h3>{{blog.title}}</h3>
    <article>{{blog.content}}</article>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created(){
    this.$http.get('https://workylabtecnico.firebaseio.com/posts/' + this.id +'.json').then(function(response){
      return response.json()
    }).then(function(data){

      this.blog = data
      return console.log(this.blog)

    })
  },
  props: ['articleList']
}
</script>

<style lang="css">
</style>
