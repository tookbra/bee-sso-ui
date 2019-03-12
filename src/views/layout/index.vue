<template>
  <div class="bee-container">
    <header class="nav-header">
      <toolbar />
    </header>
    <div class="bee-main">
      <div class="nav-left">
        <sidebar />
      </div>
      <div class="bee-context">
        <div class="nav-tags"></div>
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import toolbar from "./header.vue";
import sidebar from "./sidebar.vue";
export default {
  components: {
    toolbar,
    sidebar
  },
  name: "index"
};
</script>
