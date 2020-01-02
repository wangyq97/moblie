<template>
  <div class="login">
    <van-nav-bar title="标题" />
    <van-cell-group>
      <van-field required v-model="user.mobile" label="手机号" placeholder="请输入手机号" />
      <van-field required v-model="user.code" label="验证码" placeholder="请输入验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  method: {
    login () {

    }
  }
}
</script>

<style lang="less" scoped>
.login{
  .van-nav-bar{
    background: #008cff;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .login-btn {
    padding: 20px;
    .van-button{
      width: 100%;
      border-radius: 5px;
    }
  }
}
</style>
