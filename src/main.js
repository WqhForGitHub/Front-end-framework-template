import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'
import './filter';
import * as Sentry from '@sentry/vue'


// 创建一个空的 Vue 实例作为 EventBus
Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false

// 全局错误处理程序
Vue.config.errorHandler = function (err, vm, info) {
  console.log('err, vm, info: ', err, vm, info);
}

Sentry.init({
  Vue,
  dsn: 'https://3732ee359b642922e9fbdd0cf1006396@o4508390896828416.ingest.us.sentry.io/4508390898532352'
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
