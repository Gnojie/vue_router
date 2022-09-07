<template>
  <div>
    <div class="footer_wrap">
      <!-- 声明式导航传值
      方式一: to = "path/?参数=值"
      接收 $route.query.参数名
      方式二: 路由规则上使用path/:参数名
      to=/path/值
      接收方式 : $route.params.参数名
       -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend?name=小明">朋友</router-link>
      <router-link to="/friend/小华">朋友</router-link>
    </div>
    <div class="top">
      <!-- 设置挂载点  当url的hash值切换  显示规则对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>
