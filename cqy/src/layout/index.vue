<template>
  <el-container>
    <el-header>
      <nav-title @switch="change"></nav-title>
      <nav-tabs :tabs="tabList"></nav-tabs>
    </el-header>
    <el-container>
      <el-drawer :visible.sync="drawer"
                 direction="ltr"
                 size=200
                 :with-header="false"
                 :modal-append-to-body="false">

        <el-aside width="200px">
          <!-- <nav-menu></nav-menu> -->
        </el-aside>
      </el-drawer>

      <el-main>
        <!-- <app-main></app-main> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavTitle from './components/NavTitle'
import NavTabs from './components/NavTabs'
import '../styles/animation.css'

export default {
  name: 'layout',
  components: {
    NavTitle,
    NavTabs
  },
  data () {
    return {
      drawer: false,
      tabList: [{ name: '111111', title: '11111111', closable: true }]
    }
  },
  methods: {
    change () {
      this.drawer = !this.drawer
    }
  }
}
</script>
<style scoped>
.el-header {
  padding: 0;
}
.el-aside {
  background-color: red;
  height: 100%;
}
.el-main {
  height: calc(100vh - 65px);
  padding: 5px;
}
.el-drawer__wrapper {
  top: 60px;
}
</style>
