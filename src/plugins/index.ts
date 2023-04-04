import type { App } from 'vue';
import echarts from './echarts';

export default {
  install: (app: App) => {
    app.use(echarts);
  }
};
