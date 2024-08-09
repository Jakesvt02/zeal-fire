<template>
  <div class="main" >
    <div class="sub">
      <div v-show="!mobile" class="desktop">
        <div class="menu_holder" v-for="nav in navItems" :key="nav">
          <router-link :to="nav.nav" class="item"> {{ nav.caption }} </router-link>
          <div class="dropdown-content" >
            <router-link :to="item.nav" v-for="item in nav.sub_items" :key="item" class="sub_item"  >{{ item.caption }}</router-link>
          </div>
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
            <router-link class="link" @click="toggleMobileView" to="gallery">Gallery</router-link>
            <router-link class="link" @click="toggleMobileView" to="shop">Shop</router-link>
            <router-link class="link" @click="toggleMobileView" to="service">Services</router-link>
            <!-- <router-link class="link" @click="toggleMobileView" to="commission">Commission</router-link> -->
            <router-link class="link" @click="toggleMobileView" to="about">About</router-link>
            <router-link class="link" @click="toggleMobileView" to="contact">Contact</router-link>
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
  justify-content: center;
  align-content: center;
  // background-color: #f1f1f1;
  z-index: 100;

  @include mobile
  {
    background-color: unset;
  }
}


.sub
{
  width: 100rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  // grid-column: 2;
  // width: 100%;

  @include mobile()
  {
    width: 100%;
  }
}

.desktop
{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.menu_holder
{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  
  // width: 100%;
}

.item, .sub_item
{
  
  color: black;
  text-decoration: none;
  font-family: 'Minion Pro', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 1rem;
  // width: 5rem;

  &:hover
  {
    text-decoration: line-through;
    transition: .5s ease all;
    font-weight: bold;
    
  } 
}

.sub_item
{
  font-size: 0.8rem;
}

.dropdown-content
{
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  // min-width: 160px;
  // box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  // width: 5rem;
}

// .dropdown-content a:hover {background-color: #ddd;}

.menu_holder:hover .dropdown-content 
{
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: space-between;
}
// .menu_holder:hover .item {background-color: grey;}

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
  position: fixed;
  // top: 0;
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
        {"caption":"home", "nav":"home", "sub_items":[
          {"caption": "gallery","nav": "gallery"},
          {"caption": "services", "nav":"service"}
        ]},
        // {"caption":"gallery", "nav":"gallery"},
        {"caption":"shop", "nav":"shop"},
        // {"caption":"services", "nav":"service"},
        // {"caption":"comission", "nav":"comission"},
        {"caption":"about", "nav":"about"},
        {"caption":"contact", "nav":"contact"},
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
