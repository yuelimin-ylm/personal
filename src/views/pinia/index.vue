<template>
  <p>{{ mainStore.count }}</p>
  <p>{{ mainStore.foo }}</p>
  <!-- 赋值结构简便拿值 -->
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
</template>

<script lang="ts" setup>
  // import { useMainStore } from '@/store/index';
  // const store = useMainStore();
  // console.log(store.count);
  import { useMainStore } from '@/store/main';
  import { storeToRefs } from 'pinia';
  const mainStore = useMainStore();
  //解构赋值，丢失响应式
  // const { count, foo } = mainStore;
  // console.log(count);
  //1、storeToRefs 解决丢失响应性的方法 把值做了ref包裹
  const { count, foo } = storeToRefs(mainStore);
  console.log(count.value);
  //2、状态修改
  // 方法一：
  mainStore.count++;
  console.log(count.value);
  // 方法二：用$patch一个修改多个数据
  mainStore.$patch({
    count: mainStore.count + 1,
    foo: 'bar',
    arr: [...mainStore.arr, 1],
  }); 
  // !!!方法三：用$patch一个函数修改多个数据，函数中可传入旧的state
  mainStore.$patch((state) => {
    state.count++;
    state.foo = 'bar';
    state.arr.push(1);
  });
// 方法四：逻辑比较多的时候可以封装到action中处理
  mainStore.changeState(5);

  </script>
<style lang="scss" scoped></style>
