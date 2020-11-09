<template>
  <Layout>
    <div style="min-height: 600px" v-loading="loading">
      <el-card shadow="never" style="min-height: 400px">
        <div slot="header">
          <el-row>
            <el-col :span="12">
              <span>{{ blog.title }}</span>
            </el-col>
            <el-col :span="12">
              <div style="text-align: right;">
                <el-button
                  style=" padding: 3px 0"
                  type="text"
                  icon="el-icon-more-outline"
                  @click="more"
                  >更多博客</el-button
                >
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{ blog.published_at }} <br />
          更新 {{ blog.updated_at }}
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
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
 strapiAricles(id:$id){
    id
    title
    description
    article_content
    cover{
        url
    }
    auther
    updated_at
    published_at   
}
}
</page-query>

<script>
export default {
  name: "BlogDetail",
  metaInfo: {
    title: "wixi博客",
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    blog() {
      return this.$page.strapiAricles;
    },
  },
  methods: {
    more() {
      this.$router.back("/blogs");
    },
    markdown(content) {
      return this.$md.render(content);
    },
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style></style>
