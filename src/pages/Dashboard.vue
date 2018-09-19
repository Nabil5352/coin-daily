<template>
  <div>
    DASHBOARD
    <div id="root"/>
  </div>
</template>
<script>
import * as d3 from 'd3'

export default {
	data () {
		return {}
	},
	mounted () {
		this.showVersion()
	},
	methods: {
		showVersion () {
			console.log('Called')
			d3.select('#root')
				.append('h5')
				.append('text')
				.text(`D3 version: ${d3.version}`)
		}
	}
}
</script>
<style>
</style>
