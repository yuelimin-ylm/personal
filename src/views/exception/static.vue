<template>
  <div class="page-wrap">
    <el-row class="errPage-container">
      <el-col :span="12">
        <div class="left-wrap">
          <div class="oops__text">
            <h1 class="text-jumbo text-ginormous">Oops!</h1>
          </div>
          <div class="message__text">
            <h1>{{ message }}</h1>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
  import errGif from '@/assets/images/403.gif';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  const message = route.query.msg;
</script>

<style lang="scss" scoped>
  .page-wrap {
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin: 100px auto;
    .errPage-container {
      width: 800px;
      max-width: 100%;
      margin: 100px auto;
      // .message__text {
      //   animation-name: slideUp;
      //   animation-duration: 0.5s;
      //   animation-fill-mode: forwards;
      // }
      // .sec__text{
      //   animation-name: slideUp;
      //   animation-duration: 0.5s;
      //   animation-fill-mode: forwards;
      // }
      span {
        padding-right: 10px;
        font-size: 26px;
      }
      .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
      }
      // @keyframes slideUp {
      //   0% {
      //     transform: translateY(120px);
      //     opacity: 0;
      //   }
      //   100% {
      //     transform: translateY(0);
      //     opacity: 1;
      //   }
      // }
    }
  }
</style>
