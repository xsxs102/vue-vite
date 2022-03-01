import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "layouts/index.vue";

/* 
  配置属性
  hidden 路由是否显示在sidebar中
  alwaysShow 是否总是显示在菜单根目录
  meta: {
    icon sidebar中显示的图标
  }
*/

export const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { title: "导航" },
    children: [
      {
        path: "home",
        component: () => import("views/home.vue"),
        name: "Home",
        meta: { title: "首页" },
        children: [
          {
            path: ":id",
            component: () => import("views/detail.vue"),
            name: "Detail",
            hidden: true,
            meta: {
              title: "详情",
              activeMenu: "/home",
            },
          },
        ],
      },
    ],
  },

  {
    path: "/users",
    component: Layout,
    meta: {
      title: "用户管理",
      icon: "el-icon-user-solid",
    },
    redirect: "/users/list",
    children: [
      {
        path: "list",
        component: () => import("views/users/list.vue"),
        meta: {
          title: "用户列表",
          icon: "el-icon-document",
        },
      },
      {
        path: "create",
        component: () => import("views/users/create.vue"),
        hidden: true,
        meta: {
          title: "创建新用户",
          activeMenu: "/users/list",
        },
      },
      {
        path: "edit/:id(\\d+)",
        name: "userEdit",
        component: () => import("views/users/edit.vue"),
        hidden: true,
        meta: {
          title: "编辑用户信息",
          activeMenu: "/users/list",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach((to, from) => {});

// 全局解析守卫
router.beforeResolve(async to => {});

// 全局后置钩子
router.afterEach((to, from) => {});

export default router;
