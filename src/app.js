import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

/* eslint-disable-next-line no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
