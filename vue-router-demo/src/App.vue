<template>
  <div id="app">
    <header>我是App</header>
    <hello-world></hello-world>
    <ul>
      <li><router-link to="/first">跳转到first</router-link></li>
      <li><router-link to="/second">跳转到second</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  data () {
    return {}
  },
  components: {
    'hello-world': HelloWorld
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
