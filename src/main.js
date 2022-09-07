import Vue from 'vue'
import App from './App.vue'
import find from '@/views/find'
import my from '@/views/my'
import friend from '@/views/friend'
import notfound from '@/views/notfound'
import recommend from '@/views/recommend'
import ranking from '@/views/ranking'
import songlist from '@/views/songlist'

// 1.下载vue-router (npm或者yarn都可以)
// 2.引入vue-router
import VueRouter from 'vue-router'
// 注册全局组件 vue-router不再支持这种注册组件的方式
Vue.use(VueRouter)
// 4定义规则数组
const routes = [
  {
    path: "/",
    redirect: "/find" //redirect 强制重定位url
    // 浏览器url中 #后的路径被改变成了/find
  },

  {
    path: "/find",
    component: find,
    children: [
      {
        path: "recommend",
        component: recommend
      },
      {
        path: "ranking",
        component: ranking
      },
      {
        path: "songlist",
        component: songlist
      },
    ]
  },
  {
    path: "/my",
    component: my
  },
  {
    path: "/friend",
    component: friend
  },
  {
    path: "/friend/:username", //有:的路径代表要接收具体的值
    component: friend
  },
  // 404必须放在最后
  {
    path: "*",
    component: notfound
  }
]
//创建路由对象 -  传入规则
const router = new VueRouter({
  routes,
  mode: "history"
})
Vue.config.productionTip = false

// 6. 路由对象注入vue实例 this可以访问到$router 和 $route
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
