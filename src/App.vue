<script setup>
import NavBar from "./components/NavigationBar.vue";
import TopLogo from "./components/TopLogo.vue";

</script>

<template>
  <div class="app">
    <div class="sub">
      <top-logo></top-logo>
      <nav-bar></nav-bar>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>

* {
	margin: 0;
	padding: 0;
	border: 0;
  box-sizing: border-box;
	font-family: inherit;
	font-weight: inherit;
	font-size: inherit;
	color: inherit;
	scroll-behavior: smooth;
	border-spacing: 0;
	border-collapse: separate;
}

#app
{
  // width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100vw;
  // height: 100vh;
}

div
{
  margin: 0;
  padding: 0;
  // overflow-x: hidden;
	// overflow-y: scroll;
}

body
{
	overflow-x: hidden;
	overflow-y: scroll;
  margin: 0;
  padding: 0;
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