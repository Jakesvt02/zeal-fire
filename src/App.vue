<script setup>
import NavBar from "./components/NavigationBar.vue";
import TopLogo from "./components/TopLogo.vue";
import FooterBottom from "./components/FooterBottom.vue"

</script>

<template>
  <div class="app">
	<div class="main_app">
		<top-logo></top-logo>
		<nav-bar></nav-bar>
		<router-view />
		<footer-bottom />
	</div>
  </div>
</template>

<style lang="scss" scoped>

@import "styles";

.app
{
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
}

.main_app
{
	width: 100%;
	// display: grid;
	// grid-template-columns: 1fr 3fr 1fr;

	@include mobile()
	{
		// padding-left: 1rem;
		// padding-right: 1rem;
	}
}

.sub
{
	width: 98rem;

	@include mobile()
	{
		width: 100%;
	}
}


@mixin landscape
{
	@media only screen and (orientation: landscape) and (min-width: 600px)
	{
		@content;
	}
}

@mixin landscape_hd
{
	@media only screen and (orientation: landscape) and (min-width: 1280px)
	{
		@content;
	}
}

@mixin mobile
{
	@media screen and (orientation: portrait), screen and (max-width: 600px)
	{
		@content;
	}
}

</style>