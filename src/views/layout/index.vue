<template>
    <div class="bee-container">
        <header class="nav-header"></header>
        <div class="bee-main">
            <div class="nav-left">
            </div>
            <div class="bee-context">
                <div class="nav-tags"></div>
                <el-scrollbar style="height:100%">
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>