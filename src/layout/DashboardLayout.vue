<template>
  <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>
<style>
</style>
<script>
import Header from './partial/Header.vue'
import Footer from './partial/Footer.vue'
import Content from './partial/Content.vue'
export default {
	components: {
		Header,
		Footer,
		Content
	},
	methods: {}
}
</script>
