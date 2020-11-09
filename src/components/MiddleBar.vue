<template>
  <div
    style="
        position: relative;
        z-index: 2;
        margin: auto;
        margin-top: -30px;
        width: 64rem;
      "
  >
    <el-card shadow="never" :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="10">
          <el-menu
            @select="selectTopbar"
            :default-active="topbar.active"
            mode="horizontal"
            menu-trigger="click"
          >
            <el-submenu index="#more">
              <template slot="title"
                >了解博主</template
              >
              <el-menu-item index="#githubHome">github主页</el-menu-item>
              <el-menu-item index="#blog">其他博客</el-menu-item>
            </el-submenu>
            <el-submenu index="#webSites" v-if="webSites.length > 0">
              <template slot="title"
                >其他网站</template
              >
              <el-menu-item
                v-for="(item, index) in webSites"
                :index="'#webSites-' + index"
                :key="'#webSites' + index"
                >{{ item.name }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col
          :span="8"
          style="text-align: center; padding: 12px 0px 0px 10px"
        >
          <el-row>
            <el-col :span="4">
              <el-popover placement="top" trigger="hover">
                <div style="text-align: center">
                  <el-progress
                    color="#67C23A"
                    type="circle"
                    :percentage="music.volume"
                  ></el-progress>
                  <br />
                  <el-button
                    @click="changeVolume(-10)"
                    icon="el-icon-minus"
                    circle
                  ></el-button>
                  <el-button
                    @click="changeVolume(10)"
                    icon="el-icon-plus"
                    circle
                  ></el-button>
                </div>

                <el-button
                  @click="play"
                  id="play"
                  slot="reference"
                  :icon="
                    music.isPlay ? 'el-icon-refresh' : 'el-icon-caret-right'
                  "
                  circle
                ></el-button>
              </el-popover>
            </el-col>
            <el-col :span="14" style="padding-left: 20px">
              <el-slider
                @change="changeTime"
                :format-tooltip="$util.formatTime"
                :max="music.maxTime"
                v-model="music.currentTime"
                style="width: 100%"
              ></el-slider>
            </el-col>
            <el-col
              :span="6"
              style="
                  padding: 9px 0px 0px 10px;
                  color: #909399;
                  font-size: 13px;
                "
            >
              {{ $util.formatTime(music.currentTime) }}/{{
                $util.formatTime(music.maxTime)
              }}
            </el-col>
          </el-row>

          <audio ref="music" loop autoplay v-if="audioAutoPlay === '1'">
            <source :src="audioUrl" type="audio/mpeg" />
          </audio>
          <audio ref="music" loop v-else>
            <source :src="audioUrl" type="audio/mpeg" />
          </audio>
        </el-col>
        <el-col :span="4" style="text-align: right">
          <div style="font-size: 20px; color: #606266; margin-top: 5px">
            <b>{{ githubUsername }}</b>
          </div>
          <div style="color: #606266">
            <i class="el-icon-location"></i>&nbsp;{{
              location ? location : "未填写地址"
            }}
            <br />
          </div>
        </el-col>
        <el-col :span="2" style="text-align: center">
          <img
            v-popover:bigAvatar
            :src="avatarUrl"
            style="
                margin-top: 4px;
                margin-right: 10px;
                width: 52px;
                height: 52px;
                border-radius: 5px;
                border: 1px solid #ebeef5;
              "
          />
          <el-popover
            ref="bigAvatar"
            placement="top-start"
            :title="githubUsername"
            width="200"
            trigger="hover"
          >
            <i class="el-icon-star-on"></i>&emsp;{{ name }}
            <br />
            <i class="el-icon-location"></i>&emsp;{{ location }}
            <br />
            <img :src="avatarUrl" style="width: 200px; height: 200px" />
          </el-popover>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "MiddleToolBar",
  data() {
    return {
      music: {
        isPlay: false,
        currentTime: 0,
        maxTime: 0,
        volume: 30,
      },
      //   fullButton: {
      //     full: false,
      //   },
      topbar: {
        active: "",
      },
    };
  },
  props: {
    webSites: {
      type: Array,
      default: function() {
        return [{ name: "segmentfault", url: "http:/...." }];
      },
    },
    location: String,
    name: String,
    audioAutoPlay: String,
    audioUrl: String,
    avatarUrl: String,
    githubUsername: String,
    githubUrl: String,
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(this.listenMusic, 1000);
    });
  },
  methods: {
    selectTopbar(index) {
      console.log(index);
      //取消菜单选中状态
      this.topbar.active = this.topbar.active == "" ? " " : "";
      switch (index) {
        case "#githubHome":
          window.open(this.githubUrl);
          break;
        case "#blog":
          if (this.blog) {
            window.open();
          } else {
            this.$message({
              message: "博主没有其他博客",
              type: "info",
            });
          }
          break;
        default:
          if (/#webSites-\d+/.test(index)) {
            let i = parseInt(index.split("-")[1]);
            let url = this.webSites[i].url;
            window.open((url.match(/https?:\/\//i) ? "" : "https://") + url);
          }
          break;
      }
    },
    listenMusic() {
      if (!this.$refs.music) {
        return;
      }
      if (this.$refs.music.readyState) {
        this.music.maxTime = this.$refs.music.duration;
      }
      this.music.isPlay = !this.$refs.music.paused;
      this.music.currentTime = this.$refs.music.currentTime;
    },
    play() {
      if (this.$refs.music.paused) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
      this.music.isPlay = !this.$refs.music.paused;
      this.$nextTick(() => {
        document.getElementById("play").blur();
      });
    },
    changeTime(time) {
      this.$refs.music.currentTime = time;
    },
    changeVolume(v) {
      this.music.volume += v;
      if (this.music.volume > 100) {
        this.music.volume = 100;
      }
      if (this.music.volume < 0) {
        this.music.volume = 0;
      }
      this.$refs.music.volume = this.music.volume / 100;
    },
  },
};
</script>

<style></style>
