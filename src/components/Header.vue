<template>
  <section
    class="page-header"
    style="background-image: linear-gradient(120deg, rgb(38, 144, 249), rgb(252, 45, 45)); color: rgb(255, 255, 255);"
  >
    <div style="position: absolute; top: 20px; right: 20px; z-index: 2;">
      <el-tooltip
        effect="dark"
        :content="fullButton.full ? '退出' : '全屏'"
        placement="bottom-end"
      >
        <el-button
          @click="full"
          :icon="fullButton.full ? 'el-icon-close' : 'el-icon-rank'"
          circle
        ></el-button>
      </el-tooltip>
    </div>
    <div
      v-for="(item, index) in randomIcon"
      :key="'ri' + index"
      :style="
        'position:absolute; top:' +
          item.top +
          'px; left:' +
          item.left +
          'px; z-index:1;'
      "
    >
      <font :style="'font-size: ' + item.size + 'px;color:#fff;'">
        <b>♪</b>
      </font>
    </div>

    <h1 class="project-name">{{ profile.nickName }}</h1>
    <h2 class="project-tagline">{{ profile.bio }}</h2>
    <a :href="profile.github_url" target="_blank" class="btn">GitHub主页</a>
    <!-- <a href="https://github.com/GitHub-Laziji/vblog" target="_blank" class="btn"
      >博客源码</a
    > -->
  </section>
</template>

<script>
export default {
  name: "Header",
  props: {
    backgroundImage: String,
    profile: {
      type: Object,
      default: function() {
        return {
          nickName: "wixi",
          bio: "coding the world",
          github_url: "www.baidu.com",
        };
      },
    },
  },
  data() {
    return {
      randomIcon: [],
      fullButton: {
        full: false,
      },
    };
  },

  methods: {
    full() {
      if (!this.fullButton.full) {
        this.$util.fullScreen();
        this.fullButton.full = true;
      } else {
        this.$util.fullExit();
        this.fullButton.full = false;
      }
    },
  },
  mounted() {
    let width = window.innerWidth;
    for (let i = 0; i < 12; i++) {
      let temp = {};
      let left = this.$util.randomInt(10, width - 310);
      if (left > width / 2 - 150) {
        left += 300;
      }
      temp["left"] = left;
      temp["top"] = this.$util.randomInt(20, 300);
      temp["size"] = this.$util.randomInt(20, 40);
      this.randomIcon.push(temp);
    }
  },
};
</script>

<style>
.page-header {
  padding: 5rem 6rem;
  color: #fff;
  text-align: center;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
}
.el-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  /* font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  vertical-align: baseline; */
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  font-family: element-icons !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.project-name {
  font-size: 3.25rem;
  margin-top: 0;
  margin-bottom: 0.1rem;
}
.project-tagline {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  font-weight: 400;
  opacity: 0.7;
}
.btn {
  padding: 0.75rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: hsla(0, 0%, 100%, 0.08);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}
.btn + .btn {
  margin-left: 1rem;
}
</style>
