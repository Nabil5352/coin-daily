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
                <div class="badge">
                  <span class="name">default</span>
                  <span class="value">usd</span>
                </div>
              </div>
            </div><!--profile-->
            <div class="menu">
              <div class="wrapper">
                <div class="title">Main</div>
                <ul>
                  <li
                    :class="{ active : isActiveClass(1) }"
                    @click="setActiveLink(1)"><router-link :to="{name: 'dashboard'}"><span><img src="/assets/img/currency.svg"></span>&nbsp;&nbsp;<span>Current Price</span></router-link></li>
                  <li
                    :class="{ active : isActiveClass(2) }"
                    @click="setActiveLink(2)"><router-link :to="{name: 'personal'}"><span><img src="/assets/img/user.png"></span>&nbsp;&nbsp;<span>Your Currency</span></router-link></li>
                  <li
                    :class="{ active : isActiveClass(3) }"
                    @click="setActiveLink(3)"><router-link :to="{name: 'history'}"><span><img src="/assets/img/calender.png"></span>&nbsp;&nbsp;<span>Last 31 days</span></router-link></li>
                </ul>
              </div>
            </div><!--menu-->
            <div class="menu">
              <div class="wrapper">
                <div class="title">My Account</div>
                <ul>
                  <li
                    :class="{ active : isActiveClass(4) }"
                    @click="setActiveLink(4)"><router-link :to="{name: 'profile'}"><span><img src="/assets/img/user.png"></span>&nbsp;&nbsp;<span>Your Profile</span></router-link></li>
                  <li><span><img src="/assets/img/signout.png"></span>&nbsp;&nbsp;<span>Log Out</span></li>
                </ul>
              </div>
            </div><!--menu-->
          </div><!--fixed-column-->
          <div class="scroll-content right-box-content">
            <top-bar/>
            <div class="middle-content">
              <transition
                name="fade"
                mode="out-in">
                <router-view/>
              </transition>
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
	methods: {
		setActiveLink (id) {
			this.activeUrl = id
		},
		isActiveClass (id) {
			return this.activeUrl === id
		}
	}
}
</script>
