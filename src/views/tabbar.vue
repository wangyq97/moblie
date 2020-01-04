<template>
  <div class="tabbar">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o">问答</van-tabbar-item>
      <van-tabbar-item icon="play-circle-o">视频</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data () {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
