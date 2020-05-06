import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale });

import VCharts from 'v-charts';
Vue.use(VCharts);

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  // baseURL: "http://172.30.229.132:8080",
  baseURL: "http://localhost:8080",
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
