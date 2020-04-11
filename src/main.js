import 'normalize.css'
import './fonts.scss'
import './styles/style.scss'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.prototype.$electron = window.electron;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'
new Vue({
  render: h => h(App),
  router,
  mounted() {
    if( this.$electron ) {
      console.log('this has electron');
    }
  }
}).$mount('#app')
