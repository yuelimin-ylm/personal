import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'icons',
        name: 'icons',
        component: () => import('@/views/home/main/Icon.vue'),
        meta: {
          title: '图标'
        }
      },
      {
        path: 'city',
        name: 'city',
        component: () => import('@/views/home/main/CitySelection.vue'),
        meta: {
          title: '城市选择'
        }
      },
      {
        path: 'area',
        name: 'area',
        component: () => import('@/views/home/main/iradar.vue')
      },
      {
        path: 'province',
        name: 'province',
        component: () => import('@/views/home/main/report.vue')
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/graph/TreeGraph.vue'),
        meta: {
          title: '树形图'
        }
      },
      {
        path: 'brain',
        name: 'brain',
        component: () => import('@/views/graph/BrainMap.vue'),
        meta: {
          title: '脑图'
        }
      },
      {
        path: 'export',
        name: 'export',
        component: () => import('@/views/export/excel.vue'),
        meta: {
          title: '导出excel'
        }
      },
      {
        path: '/map',
        name: 'map',
        // component: () => import('@/views/map/Map.vue'),
        // redirect: 'line',
        children: [
          {
            path: 'line',
            name: 'line',
            component: () => import('@/views/map/Line.vue')
          }
        ]
      },
      {
        path: '/datav',
        name: 'datav',
        component: () => import('@/views/datav/index.vue')
      },
      {
        path: '/Pinia',
        name: 'Pinia',
        component: () => import('@/views/pinia/index.vue')
      },
    ]
  }
];

export default asyncRoutes;
