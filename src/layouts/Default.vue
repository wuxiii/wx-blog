<template>
  <div>
    <Header
      :profile="{
        nickName: configuration.nick_name,
        bio: configuration.blog_description,
        github_url: configuration.github_url,
      }"
    ></Header>
    <middle-bar
      :location="configuration.location"
      :name="configuration.nick_name"
      :audioAutoPlay="configuration.audio_auto_play"
      :audioUrl="configuration.audio_url"
      :avatarUrl="configuration.avatar_url"
      :githubUsername="configuration.login"
      :webSites="configuration.web_sites"
      :githubUrl="configuration.github_url"
    >
    </middle-bar>
    <section class="main-content">
      <el-row>
        <el-col :span="6" style="padding-right: 10px">
          <sidebar></sidebar>
        </el-col>
        <el-col :span="18" style="padding-left: 10px">
          <main-content>
            <slot></slot>
          </main-content>
        </el-col>
      </el-row>
    </section>
    <foot></foot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  },

  allStrapiConfiguration{
    edges{
      node{
        github_url
        nick_name
        blog_description
        location
        audio_url
        audio_auto_play
        web_sites{
          name
          url
        }
      }
    }
  },
   allUser{
    edges{
      node{
        avatar_url
        login
      }
    }
  }
}
</static-query>

<script>
import Header from "../components/Header.vue";
import Foot from "../components/Footer.vue";
import MiddleBar from "../components/MiddleBar.vue";
import Sidebar from "../components/Sidebar.vue";
import MainContent from "../components/MainContent";
export default {
  components: {
    Header,
    Foot,
    MiddleBar,
    Sidebar,
    MainContent,
  },
  computed: {
    configuration() {
      return {
        ...this.$static.allStrapiConfiguration.edges[0].node,
        ...this.$static.allUser.edges[0].node,
      };
    },
  },
  mounted() {},
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.main-content {
  max-width: 64rem;
  padding: 30px 0px 30px 0px;
  margin: 0 auto;
  font-size: 1.1rem;
  word-wrap: break-word;
  min-height: 800px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
