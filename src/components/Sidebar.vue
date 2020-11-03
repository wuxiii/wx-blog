<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item index="/">
          <i class="el-icon-star-off"></i>
          <span slot="title">最新动态</span>
        </el-menu-item>
        <el-menu-item index="/About/">
          <i class="el-icon-mobile-phone"></i>
          <span slot="title">社交圈</span>
        </el-menu-item>
        <el-menu-item index="/new/">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">博客列表</span>
        </el-menu-item>
        <el-menu-item index="/new">
          <i class="el-icon-service"></i>
          <span slot="title">开源项目</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      parentUrl: "",
      menuList: [],
    };
  },
  //   computed: {
  //     ...mapGetters(["token", "githubUsername", "mini"]),
  //   },
  //   mounted() {
  //     let arr = this.$route.path.split("/");
  //     this.active = "/" + arr[1] + "/" + arr[2];
  //   },
  methods: {
    onSelect(index) {
      this.$router.push(index);
    },
    openTokenDialog() {
      this.$refs.tokenDialog.open(() => {});
    },
    cancellation() {
      this.$store.dispatch("Cancellation");
    },
  },
};
</script>

<style></style>
