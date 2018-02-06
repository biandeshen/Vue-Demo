/* 2. 嵌套路由 */
<template>
  <div class="secondchild">
  <p>这是我的{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'SecondChild',
  data () {
    return {
      message: 'SecondChild'
    }
  }
}
</script>

<style scoped>

</style>
