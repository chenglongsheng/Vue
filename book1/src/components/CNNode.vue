<template>
  <div id="cnnode">
    <div id="content">
      <div class="header"></div>
      <div id="topicList">
        <div class="cell" v-for="(value, index) in this.topicsArr" :key="index">
          <a href="###" class="user_avater pull-left"><img src="" alt="" /></a>
          <span class="reply_count pull-left">
            <span class="count_of_replies">
              {{ value.reply_count }}
            </span>
            <span class="count_seperator">/</span>
            <span class="count_of_visits">
              {{ value.visit_count }}
            </span>
          </span>
          <a class="last_time pull-right" href="###"
            ><img class="user_small_avatar" src="###" alt="" />
            <span class="last_active_time"></span>
          </a>
          <div class="topic_title_wrapper">
            <span class="put_top">置顶</span>
            <a href="" class="topic_title">{{value.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      topicsArr: [],
    };
  },
  created() {
    let that = this;
    console.log("this is data");
    Axios.get("https://cnodejs.org/api/v1/topics").then((response) => {
      console.log(response);

      // let topicsArr = [];
      let data = response.data;
      if (data.success) {
        that.topicsArr = data.data;
        console.log(that.topicsArr);
      }
    });
  },
};
</script>

<style>
</style>