<template lang="html">
  <nav>
    <ul id="navUL">
      <li><router-link :class="{ 'router-link-active': isProjectTypeRoute }" :to="{ name: 'Home', params: {} }">Blogs</router-link></li>
      <li><router-link :to="{ name: 'aNuevo', params: {} }"> Add a New Blog</router-link></li>

    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
#navUL{
  background-color: #444;
  list-style-type:none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
</style>
