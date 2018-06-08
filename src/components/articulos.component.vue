

<style lang="css">
  ul {
    background-color: #081c3d;
  }
</style>

<template>
<div class="container-fluid">
  <ul id="#v-for-object">
    <li v-for="value in test" v-bind:key="test.id">{{ value.title }}</li>

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
        { id: 1, title: 'lorem ipsum'},
        { id: 2, title: 'dolor sit amet'},
        { id: 3, title: 'consectetur adipiscing'}
      ]
    }
  }

}
</script>
