import Vue from 'vue';
import App from './App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueCordova from 'vue-cordova';
import store from './store/index.js';
import router from './router.js';
import axios from 'axios';
// import flexible from './assets/lib/flexible.js';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import 'swiper/dist/css/swiper.css';
import { Toast, Loading, Notify } from 'vant';

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueCordova);
Vue.use(Toast).use(Loading).use(Notify);

// 配置axios
axios.defaults.baseURL = 'http://zjyegt.cn:8888';
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
        isBack: false
    };
  },
  mounted() {
    const _this = this;
    document.addEventListener("backbutton", function(e) {
        e.preventDefault();
        if(_this.isBack) {
            navigator.app.exitApp();
        } else {
            _this.isBack = true;
            setTimeout(() => {
                _this.isBack = false;
            }, 2000);
        }
    }, false);
  }
}).$mount('#app');
