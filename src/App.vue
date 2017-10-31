<template>
  <div id="app">
    <ul class="menu">
      <li><router-link to="/"></router-link>组件</li>
      <li><router-link to="/bookmark">书签</router-link></li>
      <li><router-link to="/catalog">目录</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}
::-webkit-scrollbar-track-piece {
  background: transparent;
  background: #deebf5
}
::-webkit-scrollbar-thumb {
  background: #a6cfef;
  border-radius: 3px;
  border: 1px solid #94c7ee;
}
html, body {
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  color: #5c5c5c;
  font-size: 14px;
}
html {
  transition: scroll 0.5s;
}
body {
  overflow: auto;
  background: #fff;
}
dl,dt,dd,ul,li {
  margin:0;
  padding:0;
  list-style-type: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.menu {
  height: 50px;
  line-height: 50px;
  background: -webkit-gradient(linear, 0 0, 0 60%, from(#ccc), color-stop(0%, #fff), color-stop(40%, #333));
  display: flex;
}
.menu li {
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-right: 1px solid #fff;
  box-shadow: 1px solid #000;
}
.menu li a {
  color: #fff;
  text-decoration: none;
}
.menu li:last-child {
  border-right: none;
}
</style>
