<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 标题 -->
      <div class="login-title">
        <h3>登录</h3>
      </div>
      <!-- 表单登录区 -->
      <el-form :model="loginForm" ref="loginRef" :rules="loginFormRules" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <!-- 用户名 -->
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-s-order"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    // 点击重置
    resetForm() {
      this.$refs.loginRef.resetFields()
    },
    login() {
      this.$refs.loginRef.validate(async (valid) => {
        if (!valid) return
        // 登录接口

        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.data.stauts !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 把token保存到客户端
        window.sessionStorage.setItem('token', res.data.token)
        // 通过编程式跳转主页
        this.$router.push('/home')
      })
    }
  },
  data() {
    return {
      // 规则

      // 登入表单数据绑定
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          { min: 3, max: 5, message: '请输入正确长度的用户名', trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          { min: 6, max: 10, message: '请输入3-10位密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #2b4b6b;
  .login-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-title {
      text-align: center;
    }
  }
  .login-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
