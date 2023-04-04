import { RouteRecordRaw } from 'vue-router';

const exceptionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)',
    name: '404-not-found',
    component: () => import('@/views/exception/404.vue'),
    meta: {
      title: '404 Not Found'
    }
  }
];

export default exceptionRoutes;
