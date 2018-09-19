<template>
  <div id="dashboard-home">
    <div class="dashboard-wrapper">
      <div id="dashboard">
        <div class="container">
          <div class="fixed-column sidebar">
            <div class="profile">
              <div class="wrapper">
                <div class="img-wrap"><img src="/assets/img/home-bg.svg"></div>
                <div class="title">Nabil Ahmad</div>
              </div>
            </div><!--profile-->
            <div class="menu">
              <div class="wrapper">
                <div class="title">Main</div>
                <ul>
                  <router-link :to="{name: 'dashboard'}">
                    <li
                      key="1"
                      :class="{ active : isActiveClass(1) }"
                      @click="setActiveLink(1)"><span><img src="/assets/img/currency.svg"></span>&nbsp;&nbsp;<span>Current Price</span></li></router-link>
                  <router-link :to="{name: 'personal'}">
                    <li
                      key="2"
                      :class="{ active : isActiveClass(2) }"
                      @click="setActiveLink(2)"><span><img src="/assets/img/user.png"></span>&nbsp;&nbsp;<span>Your Currency</span></li></router-link>
                  <router-link :to="{name: 'history'}">
                    <li
                      key="3"
                      :class="{ active : isActiveClass(3) }"
                      @click="setActiveLink(3)"><span><img src="/assets/img/calender.png"></span>&nbsp;&nbsp;<span>History</span></li></router-link>
                </ul>
              </div>
            </div><!--menu-->
            <div class="menu">
              <div class="wrapper">
                <div class="title">My Account</div>
                <ul>
                  <router-link :to="{name: 'profile'}">
                    <li
                      key="4"
                      :class="{ active : isActiveClass(4) }"
                      @click="setActiveLink(4)"><span><img src="/assets/img/user.png"></span>&nbsp;&nbsp;<span>Your Profile</span></li></router-link>
                  <li
                    v-tippy="{ placement : 'left', arrow: true }"
                    title="Disconnect"
                  ><span><img src="/assets/img/signout.png"></span>&nbsp;&nbsp;<span>Log Out</span></li>
                </ul>
              </div>
            </div><!--menu-->
          </div><!--fixed-column-->
          <div class="scroll-content right-box-content">
            <top-bar/>
            <div class="middle-content">
              <router-view/>
            </div><!--middle-content-->
            <fixed-footer/>
          </div>
        </div><!--container-->
      </div><!--#dashboard-->
    </div><!--dashboard-wrapper-->
  </div><!--#dashboard-home-->
</template>

<script>
import TopBar from '../../components/TopBar.vue'
import FixedFooter from '../../components/FixedFooter.vue'

export default {
	components: {
		TopBar,
		FixedFooter
	},
	data () {
		return {
			activeUrl: 1 // 1=dashboard, 2=current price, 3=history, 4=profile
		}
	},
	created () {
		this.checkActiveUrl()
	},
	methods: {
		setActiveLink (id) {
			this.activeUrl = id
		},
		isActiveClass (id) {
			return this.activeUrl === id
		},
		checkActiveUrl () {
			let currentPath = this.$route.path
			const currentUrl = currentPath.replace(/\//, '')	// remove leading slash
			let activeUrl = 1
			if (currentUrl === 'dashboard') {
				activeUrl = 1
			} else if (currentUrl === 'your-currency') {
				activeUrl = 2
			} else if (currentUrl === 'history') {
				activeUrl = 3
			} else if (currentUrl === 'profile') {
				activeUrl = 4
			}
			this.activeUrl = activeUrl
		}
	}
}
</script>
