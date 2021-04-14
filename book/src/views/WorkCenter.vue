<template>
  <div class="workCenter">
    <HelloWorld/>
    <el-container>
            <el-header><Header /></el-header>
            <el-main><WorkCenterSpace/></el-main>
            
        </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import WorkCenterSpace from '../components/WorkCenterSpace'


export default {
  name: 'WorkCenter',
  components: {
    Header,
    WorkCenterSpace

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
