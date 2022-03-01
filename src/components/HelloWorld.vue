<template>
  <h1>{{ msg }}</h1>
  <h1 @click="store.commit('add')" style="cursor: pointer">
    store.state.count：{{ store.state.count }}
  </h1>
  <h1>mockData：{{ mockData }}</h1>

  <el-button @click="onClick">Emit</el-button>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const mockData = ref(null);
const store = useStore();
// 属性定义
defineProps({
  msg: String,
});

// 事件定义
const emit = defineEmits(["myClick"]);
const onClick = () => {
  emit("myClick");
};

// 暴露定义，父组件通过模板ref获取
defineExpose({
  exposeMethod() {
    console.log("some expose from HelloWorld component");
  },
});

fetch("/api/getUsers")
  .then(res => res.json())
  .then(data => {
    mockData.value = data.data;
  });
</script>
<style scoped></style>
