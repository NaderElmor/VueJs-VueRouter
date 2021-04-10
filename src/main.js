import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./routes"

Vue.use(VueRouter);
const router = new VueRouter({
  /*
     فيه اتنين مود هيستوري وهاش بعمل هيستوري عشان يشيل الهاش
  */
  mode: "history",
  routes: routes
})

router.beforeEach( (to, from, next) => {
  console.log("Router beforeEach");
  next();
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
