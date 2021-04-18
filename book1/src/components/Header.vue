<template>
  <div id="header">
    <div id="title">
      <p>{{ message }}</p>
    </div>
    <div id="functionButton">
      <router-link to="/login"><el-button id="function" icon="el-icon-edit">系统登录</el-button></router-link>
      <router-link to="/work"><el-button id="function" icon="el-icon-edit">工作中心</el-button></router-link>
      <router-link to="/student"><el-button id="function" icon="el-icon-search">学生信息</el-button></router-link>
      <router-link to="/book"><el-button id="function" icon="el-icon-search">图书信息</el-button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      message: "江西软件大学——新版图书管理系统",
    };
  },
};
</script>

<style>
#header {
  background-color: bisque;
}
#title {
  /* background-color: red; */
  line-height: 60px;
  display: inline-block;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  width: 600px;
  margin-left: 200px;
}
#functionButton {
  /* background-color: aqua; */
  float: right;
  line-height: 60px;
}
/* #functionButton > #function {
  line-height: 60px;
} */
header.el-header{
    padding: 0;
}
</style>