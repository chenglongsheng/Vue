<template>
  <div class="home">
    <HelloWorld/>
    <el-container>
            <el-header><Header /></el-header>
            <el-main><Main /></el-main>
            <el-footer><Footer /></el-footer>
        </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {

    Header,
    Main,
    Footer
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
header.el-header {
    /* padding: 0; */
    background-color: #244152;
}
</style>
