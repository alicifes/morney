import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function (){
  // if(document.documentElement.clientWidth>500){
  //   window.alert("为了保证使用效果，请使用手机打开界面");
  //   const img =document.createElement('img');
  //   img.src='./prcode.png';
  //   img.style.position = 'fixed';
  //   img.style.top= '50%';
  //   img.style.left = '50%';
  //   img.style.transform='translate(-50%,-50%)'
  //   img.style.boxShadow='0 0 10px rgba(0,0,0,0.3)'
  //   document.body.append(img);
  // }
 setTimeout(function(){
   window.scrollTo(0,100000);
 },0)
}

