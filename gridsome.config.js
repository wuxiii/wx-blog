// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "wixi blogs",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://47.116.134.161:1337/",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["aricles"],
        singleTypes: ["Configuration"],
        loginData: {
          identifier: "214792750@qq.com",
          password: "214792750@qq.COM",
        },
      },
    },
  ],
  templates: {
    StrapiAricles: [
      {
        path: "/blog/:id",
        component: "./src/templates/Blog.vue",
      },
    ],
  },
};
