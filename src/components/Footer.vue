<template>
  <section class="foot">
    <div
      style="border-top: 1px solid rgb(225, 228, 232) !important; padding: 45px 0px;"
    >
      <div class="el-row">
        <div class="el-col el-col-10">
          © 2020 GitHub-wuxiii
          <a href="https://github.com/wuxiii" target="_blank">Profile</a>
          <a href="https://github.com/wuxiii" target="_blank">VBlog</a>
        </div>
        <div class="el-col el-col-4">
          <div style="text-align: center; font-size: 18px;">
            <i class="el-icon-location-outline"></i>
          </div>
        </div>
        <div class="el-col el-col-10">
          <a href="https://developer.github.com" target="_blank">GitHub-API</a>
          <a href="https://cn.vuejs.org/" target="_blank">Vue.js</a>
          <a href="http://element.eleme.io/" target="_blank">Element</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.foot {
  max-width: 67rem;
  font-size: 12px !important;
  color: #586069 !important;
  margin: 0 auto;
}
.el-row {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-col {
  display: flex;
  justify-content: space-around;
  flex: 1;
}
</style>
