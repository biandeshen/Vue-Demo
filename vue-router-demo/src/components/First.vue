<template>
  <div class="First">
  <p>这是我的{{message}}</p>
  <!-- 3. 动态路由 -->
  输入要前往的路径：<input type="text" name="path" v-model="pathnametext">
<!--   <a v-bind:href="'/first/firstdynamic/'+pathnametext">跳转到该路径</a> -->
  <router-link v-bind:to="'/first/firstdynamic/'+pathnametext">跳转到该路径</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      /* 3. 动态路由 */
      pathnametext: ''
    }
  }
}
</script>

<style scoped>
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
/* a:visited {color:purple;text-decoration:none;}  *//* 已访问：紫色、无下划线 */
a:hover {color: red; text-decoration:underline;} /* 鼠标移近：红色、下划线 */
</style>
