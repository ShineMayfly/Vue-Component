<template>
  <el-row class="title">
    <el-col :span="1">
      <img class="logo"
           src="../../../assets/logo.png"
           @click="handleFadeMenu()">
    </el-col>
    <el-col :span="5">
      <h1>{{title}}</h1>
    </el-col>
    <el-col :span="5"
            :offset="12">
      <p class="user">用户</p>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'NavTitle',
  data () {
    return {
      title: '网站标题'
    }
  },
  methods: {
    handleFadeMenu () {
      this.$emit('switch')
    }
  }
}
</script>
<style scoped>
* {
  color: #fff;
}
.title {
  background-color: #009688;
}
.logo {
  height: 40px;
  margin-top: 10px;
  cursor: pointer;
}
h1 {
  margin: 0 10px 0;
  line-height: 60px;
  text-align: left;
}
.user {
  text-align: right;
}
</style>
