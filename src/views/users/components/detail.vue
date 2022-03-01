<template>
  <div></div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useItem } from "../model/userModel";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false,
  },
});
const route = useRoute();
const rules = reactive({
  name: [{ required: true, message: "用户名为必填项" }],
});
const form = ref(null)

const submitForm = () => {
  form.value.validate(valid => {
    
  })
}
</script>

<style scoped>
.container {
  padding: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
