<template>
  <div class="studentMessage">
    <HelloWorld/>
    <el-container>
            <el-header><Header /></el-header>
            <el-main><StudentMessageSpace/></el-main>
            
        </el-container>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import StudentMessageSpace from '../components/StudentCenterSpace'

export default {
  name: 'StudentMessage',
  components: {
    Header,
    StudentMessageSpace
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
