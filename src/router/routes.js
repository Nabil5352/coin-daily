// Layout page
import DashboardLayout from '../layout/DashboardLayout.vue'
// Pages
import AuthHome from '../pages/AuthHome.vue'
import Dashboard from '../pages/Dashboard.vue'
import Personal from '../pages/Personal.vue'
import History from '../pages/History.vue'
import Profile from '../pages/Profile.vue'
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
			},
			{
				path: '/your-currency',
				name: 'personal',
				component: Personal
			},
			{
				path: '/history',
				name: 'history',
				component: History
			},
			{
				path: '/profile',
				name: 'profile',
				component: Profile
			}
		]
	},
	{
		path: '*',
		name: 'error',
		component: NotFound
	}
]

export default routes
