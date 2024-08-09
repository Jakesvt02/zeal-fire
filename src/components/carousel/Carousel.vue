<template>
    <div class="carousel">
        <div class="carousel_inner">
            <carousel-indicators v-if="indicators" :total="slides.length" :current-index="currentSlide" @switch="switchSlide($event)"></carousel-indicators>
            <carousel-item v-for="(slide, index) in slides" :slide="slide" :key="`item-${index}`" :current-slide="currentSlide" :index="index" :direction="direction" @mouseenter="stopSlideTimer" @mouseout="startSlideTimer"></carousel-item>
            <carousel-controls v-if="controls" @prev="prev" @next="next"></carousel-controls>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import "../../styles";


.carousel
{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;

    @include mobile
    {
        display: flex;
        flex-flow: column;
        align-content: center;
        align-items: center;

        // width: 30rem;
    }
}

.carousel_inner
{
  position: relative;
  width: 100%;
  height: 40rem;
  overflow: hidden;
   
  @include mobile()
  {
    // width: 50%;
    width: 100%;
    // height: 80%;
    
  }

}

</style>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";

export default 
{
  props: {
    slides: 
    {
      type: Array,
      required: true,
    },
    controls:
    {
      type: Boolean,
      default: false,
    },
    indicators: 
    {
      type: Boolean,
      default: true,
    },
    interval: 
    {
      type: Number,
      default: 4000,
    },
  },
  components: { CarouselItem, CarouselControls, CarouselIndicators },
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
  }),
  methods: 
  {
    setCurrentSlide(index) 
    {
      this.currentSlide = index;
    },
    prev(step = -1) 
    {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) 
    {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) 
    {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() 
    {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => 
      {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() 
    {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) 
    {
      const step = index - this.currentSlide;
      if (step > 0) 
      {
        this.next(step);
      } else 
      {
        this.prev(step);
      }
    },
  },
  mounted() 
  {
    this.startSlideTimer();
  },
  beforeUnmount() 
  {
    this.stopSlideTimer();
  },
};
</script>
