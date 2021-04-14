<template>
    <div id="Login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>系统登录</span>
                <el-button style="float: right; padding: 3px 0" type="text">忘记密码</el-button>
            </div>
            <el-input id="username" v-model="username" placeholder="请输入账号" clearable></el-input>
            <el-input id="password" v-model="password" placeholder="请输入密码" show-password clearable></el-input>
            <div id="submit">
                <el-button id="submitButton">登录</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password:""
        };
    },
};
</script>

<style>
.box-card {
    margin: 0 auto;
    margin-top: 80px;
    text-align: center;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 360px;
}
#submitButton {
    display: inline-block;
    background-color: #0a9588;
    color: white;
    width: 150px;
}
#username,#password,#submitButton{
    margin: 5px 0;
}
</style>