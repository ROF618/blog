<script>
export default {
  name: 'Articulos',
  el: '#v-for-test',
  //remember to add the Key: to v-for; look up vue documentation saved
  data() {
    test: [{
      titulo: "lorem",
      contenido: "Ipsum depsum crestum"
    },
    {
      titulo: "Iorem",
      contenido: "frasum Marasum tacsum"
    }]
  }
}
</script>

<style lang="css">
  ul {
    background-color: #081c3d;
  }
</style>

<template>
<div class="container-fluid">
  <ul id="v-for-test">
    <li v-for="value in test">{{value}}</li>
  </ul>
</div>
</template>
