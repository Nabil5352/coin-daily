// Layout page
import DashboardLayout from '../layout/DashboardLayout.vue'
// Pages
import AuthHome from '../pages/AuthHome.vue'
import Dashboard from '../pages/Dashboard.vue'
// Error page
import NotFound from '../pages/NotFoundPage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: AuthHome
	},
	{
		path: '/dashboard',
		component: DashboardLayout,
		children: [
			{
				path: '/',
				name: 'dashboard',
				component: Dashboard
			}
		]
	},
	{
		path: '/error',
		name: 'error',
		component: NotFound
	}
]

export default routes
