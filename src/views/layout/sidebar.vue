<template>
  <div class="sidebar">
    <logo></logo>
    <el-scrollbar style="height:100%">
      <div v-if="false" class="sidebar-tip">没有发现菜单</div>
      <el-menu default-active="1" mode="vertical" show-timeout="200" collapse="true">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import logo from "./logo";
export default {
  name: "sidebar",
  components: { logo }
};
</script>

<style scoped></style>
