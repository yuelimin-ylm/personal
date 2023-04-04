<template>
  <div :class="{ show: show }" class="header-search">
    <SvgIcon iconClass="search" className="search" @click.stop="click" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, watch, onMounted, onUnmounted } from 'vue';
import type { ElSelect } from 'element-plus';
const headerSearchSelect = ref<InstanceType<typeof ElSelect>>();
const show = ref(false);
//watchEffect不会立即执行，只有在依赖项发生变化时才会执行
watch(
  () => show.value,
  val => {
    if (val) {
      document.addEventListener('click', close);
    } else {
      document.removeEventListener('click', close);
    }
  },
  { immediate: false }
);

// watchEffect(() => {
//   //监听搜索框的点击事件
//   if (show.value) {
//     document.addEventListener('click', close);
//   } else {
//     document.removeEventListener('click', close);
//   }
// });
const click = () => {
  show.value = !show.value;
  headerSearchSelect.value?.focus();
};
const close = () => {
  headerSearchSelect.value?.blur();
  options.value = [];
  show.value = false;
};

const search = ref('');
const options = ref([
  {
    title: ['Home', 'Header', 'Search'],
    path: '/home/header/search'
  }
]);
const change = () => {
  console.log();
};
</script>
<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
