/* 3. 动态路由 */
<template>
  <div class="firstdynamic">
  <p>这个动态路由为：{{ $route.params.pathname }}</p>
  </div>
</template>

<script>
export default {
  name: 'pathname',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
