<template>
  <div>
    <div class="profile-container">
      <div class="img-wrap"><img src="/assets/img/home-bg.svg"></div>
      <div class="input-group"><input
        v-tippy="{ placement : 'right', arrow: true }"
        title="Enter your email address"
        type="email"
        name=""
        placeholder="Email">
      </div>
      <div class="input-group">
        <select
          v-tippy="{ placement : 'right', arrow: true }"
          title="Select country/currency"
        >
          <option disabled="">SELECT COUNTRY</option>
          <option/>
        </select>
      </div>
      <div class="input-group"><input
        v-tippy="{ placement : 'right', arrow: true }"
        title="Enter your current password"
        type="password"
        name=""
        placeholder="Password">
      </div>
      <div class="input-group"><input
        v-tippy="{ placement : 'right', arrow: true }"
        title="Confirm password"
        type="password"
        name=""
        placeholder="Confirm Password">
      </div>
      <div>
        <button
          v-if="pending"
          class="btn btn-primary btn-loader"><img src="assets/img/loader.gif"></button>
        <button
          v-else
          class="btn btn-primary">Update</button>
      </div>
      <div
        v-if="showCommonErr"
        class="err">
        <p>Something went wrong! Please try again later!!</p>
      </div>
    </div><!--profile-container-->
  </div>
</template>
<script>
/* eslint-disable no-undef */
export default {
	data () {
		return {
			currencies: null,
			pending: false,
			showCommonErr: false
		}
	},
	created () {
		this.getCurrencies()
	},
	methods: {
		getCurrencies () {
			const THIS = this
			this.$axios
				.get('https://api.coindesk.com/v1/bpi/supported-currencies.json', { crossdomain: true })
				.then(res => {
					console.log(res)
					THIS.currencies = res
				})
				.catch(error => {
					if (error.response) {
						console.log('Error 1', error.response)
					} else if (error.request) {
						console.log('Error 2', error.request)
					} else {
						console.log('Error 3', error.message)
						console.log(error.config)
					}
				})
		}
	}
}
</script>
<style>
</style>
