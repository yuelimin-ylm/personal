<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index" :to="item.path">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import { computed, ref, watchEffect, watchPostEffect } from 'vue';
const route = useRoute();
const router = useRouter();
interface titleTypes {
  path: string;
  title: string;
}
const breadcrumbData = ref<titleTypes[]>([]);
type PartialRouteLocationMatched = Partial<Omit<RouteLocationMatched, 'path' | 'meta'>> & {
  path: string;
  meta: {
    title: string;
  };
};

watchPostEffect(() => {
  getBreadCrumb();
});
//判断当前页是否为首页
const isHome = (route: any) => {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase();
};
//获取面包屑数据
const getBreadCrumb = () => {
  let matched = route.matched.filter(
    item => item.meta && item.meta.title && item.path
  ) as PartialRouteLocationMatched[];
  const first = matched[0];
  //>=二级菜单，面包屑数据添加首页
  if (!isHome(first)) {
    matched = (
      [{ path: '/home', meta: { title: '首页' } }] as PartialRouteLocationMatched[]
    ).concat(matched);
  }
  breadcrumbData.value = matched.map(item => {
    return { path: item.path, title: item.meta.title };
  });
};
</script>
<style lang="scss" scoped></style>
