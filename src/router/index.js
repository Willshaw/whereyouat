import Vue from "vue";
import Router from "vue-router";
import List from "../components/List";
import Item from "../components/Item";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: List
    },

    {
      path: "/item",
      redirect: "/"
    },

    {
      path: "/item/:name",
      component: Item,
      props: route => ({ name: route.params.name })
    }
  ]
});
