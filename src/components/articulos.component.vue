

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
  <ul id="#v-for-object">
    <li v-for="value in test" v-bind:key="test.id"><a href="#">{{ value.title }}</a></li>

  </ul>


</div>

</template>


<script>
export default {
  name: 'Articulos',
  data(){
    return {
      //start to add the test as links in the html
      el: '#v-for-object',
      //this array of objects will be the container for the articles of the site, remember to add a content property
      test: [
        { id: 1, title: 'lorem ipsum', content: ''},
        { id: 2, title: 'dolor sit amet', content: ''},
        { id: 3, title: 'consectetur adipiscing', content: ''}
      ]
    }
  }

}
</script>
