<template>
  <span v-if="title">{{ title }}</span>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
