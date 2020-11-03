// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import util from "~/utils/utils.js";
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(ElementUI);
  Vue.prototype.$util = util;
}
