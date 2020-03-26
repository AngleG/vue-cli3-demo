import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import(/* webpackChunkName: "login" */ '../views/login/login');
const Layout = () => import(/* webpackChunkName: "layout" */ '../components/layout/layout');

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   redirect: '/login',
  // },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: '/',
    name: '欢迎页',
    meta: {
      icon: 'iconfont iconwelcome',
    },
    component: Layout,
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: {
          breadcrumb: [],
          isMenu: true,
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      },
    ],
  },
  {
    path: '/',
    name: '图表可视化',
    meta: {
      icon: 'iconfont icontubiao',
    },
    component: Layout,
    children: [
      {
        path: '/echarts',
        name: 'Echarts',
        meta: {
          breadcrumb: ['图表可视化', 'Echarts'],
          isMenu: true,
        },
        component: () => import(/* webpackChunkName: "echarts" */ '../views/echarts/echarts'),
      },
    ],
  },
  {
    path: '/',
    name: '系统管理',
    meta: {
      icon: 'iconfont iconxitongguanli',
    },
    component: Layout,
    children: [
      {
        path: '/users',
        name: '用户管理',
        meta: {
          breadcrumb: ['系统管理', '用户管理'],
          isMenu: true,
        },
        component: () => import(/* webpackChunkName: "users" */ '../views/echarts/echarts'),
      },
      {
        path: '/change-password',
        name: '修改密码',
        meta: {
          breadcrumb: ['系统管理', '修改密码'],
          isMenu: true,
        },
        component: () => import(/* webpackChunkName: "change-password" */ '../views/echarts/echarts'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
