// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import util from "~/utils/utils.js";
import MarkdownIt from "markdown-it";
import dayjs from "dayjs";

const md = new MarkdownIt();
// 修改图片渲染后的路径
// const old = md.renderer.rules.image;
// md.renderer.rules.image = function(tokens, idx, options, env, slf) {
//   const token = tokens[idx];
//   token.attrs[token.attrIndex("src")][1] =
//     process.env.GRIDSOME_API_URL + token.attrs[token.attrIndex("src")][1];
//   token.attrs.push(["width", "100%"]);
//   return old(tokens, idx, options, env, slf);
// };

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(ElementUI);
  Vue.prototype.$dayjs = dayjs;

  Vue.prototype.$util = util;
  Vue.prototype.$md = md;
}
