<template>
  <component :is="type" v-bind="linkProps(to)"> <slot /></component>
</template>

<script setup>
import { computed } from "vue";

import { isExternal } from "utils/validate";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

// 判断是内部还是外部链接
const isExt = computed(() => isExternal(props.to));
const type = computed(() => {
  if (isExt.value) {
    return "a";
  }
  return "router-link";
});
const linkProps = to => {
  if (isExt.value) {
    return {
      href: to,
      target: "_blank",
      rel: "noopener",
    };
  }
  return { to };
};
</script>

<style scoped></style>
