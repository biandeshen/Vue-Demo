<template>
  <div id="app">
    <header>我是App</header>
    <!-- 这里是一个模板 -->
    <hello-world></hello-world>
    <ul>
      <!-- 这里是路由 -->
      <li><router-link to="/first">跳转到first</router-link></li>
      <!-- 2. 在second中添加按钮，实现嵌套路由 -->
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
  text-decoration:none;
}
a:link {color: #42b983; text-decoration:none;} /* 未访问：蓝色、无下划线 */
a:active {color: red; } /* 激活：红色 */

a:hover {color: red; text-decoration:underline;} /* 鼠标移近：红色、下划线 */
</style>
