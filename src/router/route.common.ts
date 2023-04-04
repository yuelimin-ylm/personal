import { RouteRecordRaw } from 'vue-router';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  }
];

export default commonRoutes;
