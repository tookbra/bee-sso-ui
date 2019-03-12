<template>
  <div class="avue-logo">
    <transition name="fade">
      <span v-if="false" class="avue-logo_subtitle" key="0">
        test
      </span>
    </transition>
    <transition-group name="fade">
      <template v-if="true">
        <span class="avue-logo_title" key="1">test </span>
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style lang="stylus">
.fade-leave-active
    transition: opacity 0.2s;
.fade-enter-active
    transition: opacity 2.5s;
.fade-enter,
.fade-leave-to
    opacity: 0;
.avue-logo
    background-color: #1E90FF;
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 64px;
    line-height: 64px;
    font-size: 20px;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    color: rgba(255, 255, 255, 0.8);
    z-index: 1024;
    &_title
        display: block;
        text-align: center;
        font-weight: 300;
        font-size: 16px;
    &_subtitle
        display: block;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
</style>
