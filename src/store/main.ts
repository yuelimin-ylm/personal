import { defineStore } from 'pinia';
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    count: 1000,
    foo: 'bar',
    arr: [1, 2, 3, 4]
  }),
  getters: {
    count10(state){
      // return state.count * 10;
      return this.count * 10;
    }
  },
  //同步 异步 都写在action中
  actions: {
    // action中的this指向的是store实例
    // action中的函数不能是箭头函数
    changeState(num: number) {
      this.count += num;
      this.foo = 'baz';
      this.arr.push(5);
    }
  }
});
