<template>
  <div class="main" >
    <div class="sub">
      <div v-show="!mobile" class="desktop">
        <div class="menu_holder" v-for="nav in navItems" :key="nav">
          <router-link :to="nav" class="item"> {{ nav }} </router-link>
        </div>
      </div>
      <div v-show="mobile" class="mobile">
        <!-- <div class="branding">
          <img src="../assets/Asset 14.png">
        </div> -->
        <!-- <button class="hamburger">
          <div class="bar"></div>
        </button> -->
        <div @click="menuOpen" class="icon">
          <i @click="toggleMobileView" class="fa fas fa-bars" :class="{'icon-active' : mobileNav}"></i>
        </div>
        <transition name="mobile-nav">
          <ul id="dropdown-nav"  class="dropdown-nav" >
            <!-- <div class="branding">
              <img src="../assets/Asset 14.png">
            </div> -->
            <router-link class="link" @click="toggleMobileView" to="home">Home</router-link>
            <router-link class="link" @click="toggleMobileView" to="about">About</router-link>
            <router-link class="link" to="portfolio">Portfolio</router-link>
            <router-link class="link" to="Services">Services</router-link>
            <router-link class="link" to="Commission">Commission</router-link>
            <router-link class="link" to="Contact">Contact</router-link>
          </ul>
        </transition>  
      </div>
     </div> 
  </div>
</template>

<style lang="scss" scoped>
@import "../styles";
.main
{  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;

  @include mobile
  {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      align-items: center;
  }
}

.sub
{
  margin: 0 auto;
  width: 85%;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include mobile()
  {
    width: 100%;
  }
}

// .sub
// {
//   // width: 100rem;
//   width: 100%;
//   padding: 1rem;
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;

//   @include mobile()
//   {
//     width: 100%;
//   }
// }
.desktop
{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
  text-align: center;
}

.menu_holder
{
  width: 100%;
}

.item
{
  color: black;
  text-decoration: none;
  font-family: 'Minion Pro', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;

  &:hover
  {
    text-decoration: line-through;
    transition: .5s ease all;
    font-weight: bold;
  } 
}
.mobile
{
  position: absolute;
  width: 100%;
  // width: 30rem
  /* background-color: black; */
}
.branding
{
  /* background-color: red; */
}

.navigation
{
  display: flex;
  flex-flow: row nowrap;
  padding: 12px 0;
  transition: 0.5s ease all;
}

li
{
  text-transform: uppercase;
  font-family: 'Minion Pro', sans-serif;
}

.link
{
  color: white;
  text-decoration: none;
  transition: .5s ease all;
  padding-bottom: 4px;

  &:hover
  {
    color: black;
  } 
}
.icon
{
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  color: black;
  z-index: 1000;
  // height: 100%;

  i
  {
    cursor: pointer;
    font-size: 2rem;
    transition: .8s ease all;
  }
}

.icon-active
{
  transform: rotate(180deg);
  color: white;
}

.dropdown-nav
{
  display: block;
  position: fixed;
  width: 100%;
  left:100%;
  background-color: grey;
  color: white;
  padding: 1rem;
  font-family: 'Minion Pro', sans-serif;
  transition: 0.5s ease all;
  z-index: 98;
}

.dropdown-nav a
{
  display: block;
  text-align: center;
  margin: 0 auto;
}

.dropdown-nav.is-active
{
  left:0;
  transition: 0.5s ease all;
}


</style>

<script>
export default {
  name: "naviagtion-bar",
  data() {
    return {
      navItems: [
        "home",
        "about",
        "portfolio",
        "services",
        "commission",
        "contact",
      ],
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    };
  },
  created()
  {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods:
  {
    toggleMobileView()
    {
      var dropdownmenu = document.querySelector('.dropdown-nav');
      dropdownmenu.classList.toggle('is-active');
      this.mobileNav = !this.mobileNav;
    },
    checkScreen()
    {
      this.windowWidth = window.outerWidth;
      console.log(window.outerWidth);
      if(this.windowWidth <= 850)
      {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
};
</script>
