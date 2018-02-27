<template>
  <div>
    {{val}}
    <!-- 跟组件路由占位, -->
    <router-view></router-view>
    <el-switch v-model="value3" active-text="按月付费" inactive-text="按年付费">
    </el-switch>

  </div>
</template>

<script>
export default {
  // es6语法 定义对象
  data() {
    return {
      val: "test",
      value3: true
      // value4: true
    };
  }
};
</script>

<style scoped>

</style>


