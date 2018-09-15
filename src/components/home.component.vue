<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12" v-for="blog in articleList" v-bind:key="blog.id">
          <router-link :to="'/singleArt/' + blog.id"><h3>{{ blog.title }}</h3></router-link>
          {{ blog.content}}

        </div>

      </div>
      <div class="row">
        <div class="col-md-11">
        <form class="" action="index.html" method="post">


        </form>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: block;
    margin: 0 10px;
}

a {
    color: #42b983;
}



#titulo {
  display: block;
  margin: 0 auto;
}

</style>

<script>
export default {
    name: 'Home',
    data() {
        return{
        }
    },
    props: ['articleList']
}

/*new vue ({
  el: '#titulo'
})*/
</script>
