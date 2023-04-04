<template>
  <div class="header-wrap">
    <div class="hamburger-wrap">
      <div @click.stop="toggleClick" class="hamburger-wrap-icon">
        <el-icon :size="20" v-if="collapse"><Expand /></el-icon>
        <el-icon :size="20" v-else><Fold /></el-icon>
      </div>

      <BreadCrumb />
    </div>

    <div class="header-right">
      <Search />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hamburger from './Hamburger.vue';
import Search from './Search.vue';
import BreadCrumb from './BreadCrumb.vue';
import { Expand, Fold } from '@element-plus/icons-vue';
const props = defineProps<{
  collapse: boolean;
}>();
const emits = defineEmits(['update:collapse']);
const toggleClick = () => {
  emits('update:collapse', !props.collapse);
};
</script>
<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hamburger-wrap-icon {
    display: inline-block;
    margin-right: 8px;
  }
  :deep(.el-breadcrumb) {
    display: inline-block;
    font-size: 18px;
    margin-left: 8px;
  }
}
</style>
