<template>
  <el-tabs v-model="currentTabsValue"
           type="card"
           @tab-remove="removeTab">
    <el-tab-pane v-for="item in tabList"
                 :key="item.name"
                 :label="item.title"
                 :name="item.name"
                 :closable="item.closable">
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'NavTabs',
  props: {
    tabs: {
      type: Array,
      default () {
        return [
          {
            title: '主页',
            name: '1',
            closable: false
          }
        ]
      }
    }
  },
  data () {
    return {
      tabList: this.tabs,
      currentTabsValue: '1'
    }
  },
  methods: {
    removeTab () {

    }
  }
}
</script>

<style scoped>
.el-tabs {
  padding: 0 40px;
}
</style>
