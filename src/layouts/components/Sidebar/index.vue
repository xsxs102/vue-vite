<template>
  <el-scrollbar wrap-class="“scroll-warpper">
    <el-menu
      :default-active="activeMenu"
      :text-color="variables.menuText"
      :background-color="variables.menuBg"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";

import variables from "styles/variables.module.scss"; // 引入样式变量

import { computed } from "vue";
import { useRoute } from "vue-router";
import { routes } from "/@/router"; // 引入路由配置

// 激活菜单项
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  // 返回子路由指向的激活路径
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  // 返回当前路由路径
  return path;
});
</script>

<style scoped></style>
