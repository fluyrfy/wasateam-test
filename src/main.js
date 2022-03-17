import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

import axios from "axios";
Vue.prototype.axios = axios;

Vue.use(Vuex);
let store = new Vuex.mapMutations({
  state: {
    color: 1,
  },
  mutations: {
    updateColor(state, color) {
      state.color = color;
    },
  },
  getters: {
    getColor(state) {
      return state.color;
    },
  },
});

router.beforeEach((to, from, next) => {
  /* 路由發生變化修改meta */
  console.log(to.meta.content);
  if (to.meta.content) {
    let head = document.getElementsByTagName("head");
    let meta = document.createElement("meta");
    document
      .querySelector('meta[name="keywords"]')
      .setAttribute("content", to.meta.content.keywords);
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", to.meta.content.description);
    meta.content = to.meta.content;
    head[0].appendChild(meta);
  }
  // /* 路由發生變化修改title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

Vue.prototype.fakeapi =
  "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
