<template>
    <transition :name="transitionEffect">
      <div class="carousel_item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
        <div class="background_image" :style="{ backgroundImage: 'url(' + slide.image + ')' }"></div>
        <!-- <img class="carousel_image" :src="slide.image" /> -->
      </div>
    </transition>
</template>

<style lang="scss" scoped>

@import "../../styles";

.carousel_item 
{
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;

    transition: opacity .8s cubic-bezier(.44,.13,.48,.87); 
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    z-index: 1;

    @include mobile()
    {
      bottom: 3.5rem;
    }
}

.background_image
{
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  @include mobile()
  {
    background-size: auto;
    height: 80%;
  }
}

.carousel_image
{
    height: 100%;
    width: 100%;

    @include mobile()
    {
        // width: 25rem;
        width: 100%;
        height: 40rem;
    }
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active 
{
  transition: all 1s ease-in-out;
}

.slide-in-enter-from 
{
  transform: translateX(-100%);
}

.slide-in-leave-to 
{
  transform: translateX(100%);
}

.slide-out-enter-from 
{
  transform: translateX(100%);
}

.slide-out-leave-to 
{
  transform: translateX(-100%);
}
</style>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  data()
  {
    return{
      cssProps:{
        backgroundImage: "url(slide.image)"
      }
    }
  },
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>