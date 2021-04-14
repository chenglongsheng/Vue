<template>
    <div id="headerBook">
        <div id="headerTitle">
            <p>{{ message }}</p>
        </div>
        <div id="button">
            <router-link class="router-link" id="systemLogin" to="/"><el-button round icon="el-icon-edit">系统登录</el-button></router-link>
            <router-link class="router-link" id="workCenter" to="/workCenter"><el-button round icon="el-icon-edit">工作中心</el-button></router-link>
            <router-link class="router-link" id="studentMessage" to="/studentMessage"><el-button round icon="el-icon-search">学生信息查询</el-button></router-link>
            <router-link class="router-link" id="bookMessage" to="/bookMessage"><el-button round icon="el-icon-search">图书信息查询</el-button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "headerBook",
    data() {
        return {
            message: "江西软件大学-新版图书管理系统",
        };
    },
};
</script>

<style>
#headerTitle {
    /* background-color: blue; */
    line-height: 60px;
    font-size: 20px;
    font-weight: bolder;
    color: white;
    width: 600px;
    display: inline-block;
}
#button {
    /* display: inline-block; */
    float: right;
    line-height: 60px;
}
#button > .router-link > .el-button {
    background-color: #0a9588;
    color: white;
    border-color: #0a9588;
}
.router-link{
    text-decoration: none;
}



a:visited {
    color:white;
}
</style>