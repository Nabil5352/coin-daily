import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueTippy from 'vue-tippy'
import router from './router/index'

Vue.use(VueTippy)
Vue.prototype.$axios = axios

/* eslint-disable-next-line no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
