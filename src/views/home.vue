<template>
  <VueJsxComp />
  <HelloWorld msg="Props" @myClick="onMyClick" ref="hw" />
</template>

<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import VueJsxComp from "comps/VueJsxComp.vue";

import { ref } from "vue";
const hw = ref(null);
const onMyClick = () => {
  console.log("emit myClick from HelloWorld component");
  hw.value.exposeMethod();
};
</script>

<style scoped></style>
