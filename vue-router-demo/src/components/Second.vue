<template>
<div class="Second">
  <p>这是我的{{message}}</p>
      <ul>
      <!-- 2. 在second中添加按钮，实现嵌套路由 -->
      <li><router-link to="/second/secondchild">跳转到secondchild</router-link></li>
    </ul>
    <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      message: 'second'
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
