import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import ElementUI from 'element-ui';
import './styles/main.styl';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
