<template>
<div class="container-fluid">
  <ul >
    <!--add on click event to update the position of the article array, do this on the home component -->
    <li v-for="value in articleList" v-bind:key="value.id" style="display: block;"><router-link :to="'/singleArt/' + value.id" class="artList">{{ value.title }}</router-link></li>

  </ul>


</div>

</template>

<style lang="css">
  ul {
    background-color: #081c3d;
    list-style: none;
  }
  li{
    text-align: left;
  }

</style>

<script>
export default {
  name: 'Articulos',
  props: ['articleList'],
  data(){
    return {
      //start to add the articleList as links in the html
      el: '#v-for-object',
    //  articulos: this.$http.get('https://workylabtecnico.firebaseio.com/posts.json').then((data)=> console.log(data.data))
    }
  }

}
</script>
