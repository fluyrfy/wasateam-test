import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";

export default new Router({
  routes: [
    {
      path: "/",
      component: SignUp,
      meta: {
        title: "註冊",
        content: {
          description: "這裡是註冊畫面",
        },
      },
    },
    {
      path: "/signin",
      component: SignIn,
      meta: {
        title: "登入",
        content: {
          description: "這裡是登入畫面",
        },
      },
    },
  ],
});
