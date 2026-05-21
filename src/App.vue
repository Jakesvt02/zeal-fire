<script setup>
import NavBar from "./components/NavigationBar.vue";
import FooterBottom from "./components/FooterBottom.vue";
import CustomCursor from "./components/CustomCursor.vue";
</script>

<template>
  <div class="app">
    <custom-cursor />
    <div class="main_app">
      <nav-bar></nav-bar>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <footer-bottom />
    </div>
  </div>
</template>

<style lang="scss">
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
}

.main_app {
  width: 100%;
}
</style>
