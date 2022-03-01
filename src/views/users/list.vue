<template>
  <div class="app-container">
    <!-- 按钮 -->
    <div class="btn-container">
      <router-link to="/users/create">
        <el-button type="success">创建用户</el-button>
      </router-link>
    </div>

    <!-- 列表 -->
    <el-table></el-table>

    <!-- 分页 -->
    <el-pagination
      v-show-="total > 0"
      :total="total"
      v-model:page-count="listQuery.page"
      v-model:page-size="listQuery.limit"
    ></el-pagination>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import { useRouter } from "vue-router";
import { useList } from "./model/userModel"; // 引入方法

const router = useRouter();

// 更新
const handleEdit = () => {
  router.push({
    name: "userEdit",
    params: { id: row.id },
  });
};

// 删除
const handleDelete = ({ row }) => {
  delItem(row.id).then(() => {});
};
</script>

<style scoped>
.btn-container {
  text-align: left;
  padding: 0px 10px 20px 0px;
}
</style>
