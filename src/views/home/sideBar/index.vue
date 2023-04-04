<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="collapse"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :unique-opened="true"
    :active-text-color="variables.menuActiveText"
    :collapse-transition="true"
    mode="vertical"
    :router="true"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in menuData" :key="index">
      <!-- 第一种情况:只有一级菜单 -->
      <el-menu-item v-if="!item.children || item.children.length <= 0" :index="item.path">
        <!-- componnet特殊元素,is既可以是标签名，也可以是已注册的组件 -->
        <component :is="item.icon" class="menu-item-icon"></component>
        <template #title>{{ item.name }}</template>
      </el-menu-item>
      <!-- 第二种情况:有二级菜单 -->
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <component :is="item.icon" class="menu-item-icon"></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(child, index1) in item.children" :key="index1" :index="child.path">
          <component :is="child.icon" class="menu-item-icon"></component>
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import variables from '@/styles/variables.module.scss';
  import MenuItem from './MenuItem.vue';
  import { useStore } from 'vuex';
  import { shallowRef } from 'vue';
  import router from '@/router';

  interface MenuType {
    name: string;
    path: string;
    icon: any;
    children?: MenuType[];
  }

  const props = defineProps<{
    collapse: boolean;
    menuData: MenuType[];
  }>();
  const handleClickMenu = (item: MenuType) => {
    router.replace(item.path);
  };
</script>
<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    // min-height: 400px;
  }
  .menu-item-icon {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
</style>
