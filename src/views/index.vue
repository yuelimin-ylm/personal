<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <SideBar :collapse="iscollapse" :menuData="menuData" />
      </el-aside>
      <el-container>
        <el-header>
          <Header v-model:collapse="iscollapse" />
        </el-header>
        <el-main>
          <RouterView :key="route.fullPath" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
  import SideBar from './home/sideBar/index.vue';
  import Header from './home/header/index.vue';
  import { useRoute, useRouter } from 'vue-router';
  import { ref, watchEffect, shallowRef } from 'vue';
  import { Document, Location, Setting, Histogram, Menu, Headset } from '@element-plus/icons-vue';
  const route = useRoute();
  const router = useRouter();
  const iscollapse = ref(false);
  watchEffect(() => console.log(route.fullPath, 'route.fullPath'));
  interface MenuType {
    name: string;
    icon: any;
    children?: MenuChildType[];
  }
  interface MenuChildType {
    name: string;
    path: string;
    icon: any;
    children?: MenuChildType;
  }
  const menuData = shallowRef([
    {
      name: '图标选择器',
      path: '/home/icons',
      icon: Menu
    },
    {
      name: '城市选择器',
      path: '/home/city',
      icon: Document,
      children: [
        {
          name: '省市区选择器',
          path: 'area',
          icon: Location
        },
        {
          name: '省市选择器',
          path: 'province',
          icon: Location
        }
      ]
    },
    {
      name: '树形图',
      path: 'tree',
      icon: Histogram
    },
    {
      name: '脑图',
      path: 'brain',
      icon: Headset
    },
    {
      name: 'excel 导出',
      path: 'export',
      icon: Setting
    },
    {
      name: '地图',
      path: 'map',
      icon: Setting,
      redirect: '/home/map/line',
      children: [
        {
          name: '飞线图',
          path: 'map/line',
          icon: Setting
        }
      ]
    },
    {
      name: 'Datav',
      path: 'datav',
      icon: Setting
    },
    {
      name: 'Pinia',
      path: 'Pinia',
      icon: Setting
    },
  ]);
</script>
<style lang="scss" scoped>
  // .home-wrap {
  //   // position: relative;
  //   width: 100%;
  //   height: 100%;
  //   .sideBar {
  //     -webkit-transition: width 0.28s;
  //     // float: left;
  //     transition: width 0.28s;
  //     width: 210px !important;
  //     background-color: #304156;
  //     height: 100%;
  //     position: fixed;
  //     font-size: 0px;
  //     top: 0;
  //     bottom: 0;
  //     left: 0;
  //     z-index: 1001;
  //     overflow: hidden;
  //   }
  //   .main {
  //     min-height: 100vh;
  //     -webkit-transition: margin-left 0.28s;
  //     transition: margin-left 0.28s;
  //     margin-left: 210px;
  //     width: auto;
  //     position: relative;
  //   }
  // }
  .common-layout {
    height: 100vh;
    width: 100vw;
    .el-container {
      height: 100%;
    }
    :deep(.el-header) {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(168, 157, 157);
    }
  }
</style>
