<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
        <div slot="header">
          <span>{{ blog.title }}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{ $dayjs(blog.published_at).format("YYYY-MM-DD HH:mm:ss") }}
          <br />
          更新 {{ $dayjs(blog.updated_at).format("YYYY-MM-DD HH:mm:ss") }}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
        >
          <pre style="font-family: '微软雅黑'">{{ blog.description }}</pre>
        </div>
        <div
          v-html="markdown(blog.article_content)"
          class="markdown-body"
          style="padding-top: 20px"
        ></div>
      </el-card>
      <el-card
        shadow="never"
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
        v-if="!blog.id"
      >
        <font style="font-size: 30px;color:#dddddd ">
          <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query {
    allStrapiAricles(order:DESC){
    edges{
      node{
        id
        title
        article_content
      	cover{
          url
        }
        auther
        updated_at
        published_at
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "最新动态",
  },
  computed: {
    blog() {
      return { ...this.$page.allStrapiAricles.edges[0].node };
    },
  },
  methods: {
    markdown(content) {
      return this.$md.render(content);
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
