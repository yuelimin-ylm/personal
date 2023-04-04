<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    background-color: #f0f2f5;
    // background-color: #ffffff;
  }

  #app {
    // padding: 10px 10px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-size: 14px;
  }
</style>
