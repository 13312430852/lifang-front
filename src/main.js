import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式



Vue.config.productionTip = false
Vue.use(vueSwiper)



//请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么，例如加入token
  axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
  axios.defaults.headers.common["userType"] = 'MINE';
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
