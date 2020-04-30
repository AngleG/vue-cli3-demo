import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

const Login = () => import(/* webpackChunkName: "login" */ '../views/login/login');
const Layout = () => import(/* webpackChunkName: "layout" */ '../components/layout/layout');
const UserBox = () => import(/* webpackChunkName: "user-box" */ '../views/system/users/user-box.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: '/welcome',
    name: '欢迎页',
    meta: {
      icon: 'iconfont iconwelcome',
      // 是否是目录
      isCatalog: false,
    },
    component: Layout,
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: {
          breadcrumb: ['欢迎页'],
          isCatalog: false,
        },
        component: () => import(/* webpackChunkName: "welcome" */ '../views/welcome/welcome'),
      },
    ],
  },
  {
    path: '/',
    name: '图表可视化',
    meta: {
      icon: 'iconfont icontubiao',
      isCatalog: true,
    },
    component: Layout,
    children: [
      {
        path: '/echarts',
        name: 'Echarts',
        meta: {
          breadcrumb: ['图表可视化', 'Echarts'],
          isCatalog: false,
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
      isCatalog: true,
    },
    component: Layout,
    children: [
      {
        path: '/users',
        name: '用户管理',
        meta: {
          icon: '',
          isCatalog: true,
        },
        component: UserBox,
        children: [
          {
            path: '/staff',
            name: '员工管理',
            meta: {
              breadcrumb: ['系统管理', '用户管理', '员工管理'],
              isCatalog: false,
            },
            component: () => import(/* webpackChunkName: "users" */ '../views/system/users/staff'),
          },
        ],
      },
      {
        path: '/change-password',
        name: '修改密码',
        meta: {
          breadcrumb: ['系统管理', '修改密码'],
          isCatalog: false,
        },
        component: () => import(/* webpackChunkName: "change-password" */ '../views/echarts/echarts'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { name, path } = to;
  const { breadcrumbList } = store.state;
  if (name && name !== 'Login') {
    const ifRepeat = breadcrumbList.findIndex((item) => item.name === name) > -1;
    if (!ifRepeat) {
      store.dispatch('updateBreadcrumblist', { name, path, type: 'add' });
    }
  }
  next();
});

export default router;
