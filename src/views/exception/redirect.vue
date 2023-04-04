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
          <template v-if="message === 'Permission Denied'">
            <div class="sec__text">
              <h3>
                Redirecting to {{ role }} homepage in
                <span>{{ sec }}</span>
                seconds
              </h3>
            </div>
          </template>
          <template v-else>
            <div class="sec__text">
              <h3>
                Redirecting to login page in
                <span>{{ sec }}</span>
                seconds
              </h3>
            </div>
          </template>
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
  import { getGroup } from '@/utils/cookie';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  // import { GroupMap } from '@/constants';
  import { messageError } from '@/utils/message';
  const route = useRoute();
  const router = useRouter();
  const sec = ref(3);
  const role = ref('1');
  const message = ref('');
  onMounted(() => {
    role.value = getGroup() ?? '';
    message.value = route.query.msg as string;
    setInterval(() => {
      sec.value--;
    }, 1000);
    setTimeout(() => {
      if (message.value === 'Login required') {
        router.push('/login');
      } else if (message.value === 'Permission Denied') {
        if (role.value === 'ADMIN') {
          router.push('/admin');
        } else if (role.value === 'AUDIT') {
          router.push('/audit');
        } else if (role.value === 'NORMAL') {
          router.push('/normal');
        } else {
          messageError('Authorization failed, please contact the administrator.');
          router.push('/login');
        }
      }
    }, 3 * 1000);
  });
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
