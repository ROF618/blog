<template lang="html">
  <div class="container-fluid">
    test
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
  
  props: ['articleList']
}
</script>

<style lang="css">
</style>
