// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置axios
import Axios from 'axios'

//引入CSS样式
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'

//引入自定义组件
import NavHeader from '@/components/NavHeader'
Vue.component(NavHeader.name,NavHeader)
import NavFooter from '@/components/NavFooter'
Vue.component(NavFooter.name,NavFooter)
import NavBread from '@/components/NavBread'
Vue.component(NavBread.name,NavBread)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
