import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LoadingE from './components/loadingE'
import Loading from './components/loading'
import LoadingB from './components/loadingB'
import LoadingD from './components/loadingD'
import LoadingF from './components/loadingF'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vueSwiper);




//请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么，例如加入token
  axios.defaults.headers.common["Authorization"] = localStorage.getItem('userToken');
  axios.defaults.headers.common["userType"] = 'MINE';
  // alert('已经带tken');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
      if (response.status != 200){
          ElementUI.Message.error("请求失败，请求的错误码："+response.status);
      }
      return response;
    },
    error => {
      ElementUI.Message.error('请求失败，请检查网络！');
      return Promise.reject(error.response);   // 返回接口返回的错误信息
    });



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
