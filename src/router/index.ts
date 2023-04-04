import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import NProgress from '@/utils/progress';
import commonRoutes from '@/router/route.common';
import asyncRoutes from '@/router/route.async';
import exceptionRoutes from '@/router/route.exception';
const routes: Array<RouteRecordRaw> = [...commonRoutes, ...asyncRoutes, ...exceptionRoutes];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory(),
  routes
});

router.beforeEach((to, _from) => {
  const pageTitle = to.meta.title as string;
  const appTitle = import.meta.env.VITE_APP_TITLE;
  document.title = pageTitle + ' | ' + appTitle;

  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((_to, _from) => {
  NProgress.done();
});

export default router;
