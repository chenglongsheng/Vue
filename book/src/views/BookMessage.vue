<template>
  <div class="bookMessage">
    <HelloWorld/>
    <el-container>
            <el-header><Header /></el-header>
            <el-main><BookMessageSpace/></el-main>
        </el-container>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import BookMessageSpace from '../components/BookMessageSpace'

export default {
  name: 'BookMessage',
  components: {
    Header,
    BookMessageSpace,
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
