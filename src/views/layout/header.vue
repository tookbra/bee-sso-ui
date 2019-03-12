<template>
  <div class="nav-sub-header">
    <div class="header-nav-icon">
      <div class="avue-breadcrumb">
        <i class="icon-navicon"></i>
      </div>
    </div>
    <div class="nav-header-user">
      <el-tooltip
        class="item"
        effect="dark"
        content="用户头像"
        placement="bottom"
      >
        <img
          class="user-avatar"
          src="blob:http://preview.pig4cloud.com/0cc2b505-67b8-47bc-ac09-311fa66e7239"
        />
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link">
          xxx
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">首页</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/info/index">个人信息</router-link>
          </el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolbar"
};
</script>

<style></style>
