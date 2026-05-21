<template>
  <div
    class="carousel_item"
    :class="{ active: currentSlide === index }"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseout')"
  >
    <div class="background_image" :style="{ backgroundImage: 'url(' + slide.image + ')' }"></div>
  </div>
</template>

<style lang="scss" scoped>
.carousel_item {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;

  &.active {
    opacity: 1;
    z-index: 2;
  }
}

.background_image {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
};
</script>
