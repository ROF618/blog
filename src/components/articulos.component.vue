

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
    <li v-for="value in articleList" v-bind:key="articleList.id"><a href="#" v-on:click="chArticle(this.value)">{{ value.title }}</a></li>

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
  },
  methods:{
    // make the createArituclo method and the articleList object have their id = indexof() current position of the array
    chArticle: function(info){
      console.log(info)
    }
  }

}
</script>
