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
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '../../api/user'
import { mapMutations } from 'vuex'

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
  computed: {

  },
  methods: {
    ...mapMutations({
      setUser: 'setUser'
    }),
    async onLogin () {
      try {
        const res = await login(this.user)
        // console.log(res)
        if (res.status === 201) {
          this.setUser(res.data.data)
          // console.log()
          this.$toast.success('登录成功')
          this.$router.push('/')
        } else {
          this.$toast.fail('登录失败')
        }
      } catch (err) {
        this.$toast.fail('登录失败')
        console.log(err.message)
      }
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
