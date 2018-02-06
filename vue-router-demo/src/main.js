// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
// 导入的路由
// import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'
// 导入其它的components
import First from '@/components/First'
import second from '@/components/Second'
Vue.use(VueRouter)
// 开启debug模式
Vue.config.debug = true
// 创建一个路由实例，并配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: second
    }
  ]

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  // vue1.0的写法 //
  /* components: {
    App
  } */
  render: h => h(App)
}).$mount('#app')
