import Vue from 'vue'
import App from './App.vue'
import VueTippy from 'vue-tippy'
import router from './router/index'

Vue.use(VueTippy)

/* eslint-disable-next-line no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
