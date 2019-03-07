<template>
    <div class="bee-container">
        <header class="nav-header">
            <toolbar/>
        </header>
        <div class="bee-main">
            <div class="nav-left">
                <sidebar/>
            </div>
            <div class="bee-context">
            </div>
        </div>
    </div>
</template>

<script>
    import toolbar from './toolbar.vue'
    import sidebar from './sidebar.vue'
    export default {
      components: {
        toolbar,
        sidebar
      },
      name: "index"
    }
</script>
