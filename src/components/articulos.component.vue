

<style lang="css">
  ul {
    background-color: #081c3d;
    list-style: none;
  }
  li{
    text-align: left;
  }
</style>

<template>
<div class="container-fluid">
  <ul >
    <!--add on click event to update the position of the article array, do this on the home component -->
    <li v-for="value in articleList" v-bind:key="articleList.id"><a href="#" v-on:click="chArticle(this)">{{ value.title }}</a></li>

  </ul>


</div>

</template>


<script>
export default {
  name: 'Articulos',
  props: ['articleList'],
  data(){
    return {
      //start to add the articleList as links in the html
      el: '#v-for-object',

    }
  }

}
</script>
