<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasShowChild(item.children, item) &&
        (!Child.children || Child.noShowChild) &&
        !item.alwaysShow
      "
    >
      <app-link v-if="Child.meta" :to="resolvePath(Child.path)">
        <el-menu-item :index="resolvePath(Child.path)">
          <item :title="Child.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <!-- 子菜单嵌套子菜单 -->
    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template #title>
        <item v-if="item.meta" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
        class=""
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import Item from "./Item.vue";
import AppLink from "./link.vue";

import { isExternal } from "utils/validate.js";

import { ref } from "vue";
import path from "path-browserify";

const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true,
  },
  isNest: {
    type: Boolean,
    default: false,
  },
  basePath: {
    type: String,
    default: "",
  },
});

const Child = ref(null);

// 是否有显示的子菜单
const hasShowChild = (children = [], parent) => {
  const showChild = children.filter(item => {
    if (item.hidden) {
      return false;
    } else {
      Child.value = item;
      return true;
    }
  });
  if (showChild.length === 1) {
    return true;
  }
  if (showChild.length === 0) {
    Child.value = { ...parent, path: "", noShowChild: true };
    return true;
  }
  return false;
};

// 拼接路径
const resolvePath = routePath => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style scoped></style>
