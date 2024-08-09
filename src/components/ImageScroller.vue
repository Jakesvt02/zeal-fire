<template>
    <div class="main">
        <carousel :slides="slides"></carousel>
        <div class="spacer"></div>
        <carousel :slides="slides2"></carousel>
    </div>
</template>

<style lang="scss" scoped>

.main
{
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}

.spacer
{
    padding-bottom: 3rem;
}
    
</style>

<script>
import Carousel from './carousel/Carousel.vue'

export default {
    name:"image_scroller",
    components: { Carousel },
    data()
    {
        return{
            slides:
            [
                { image: require("../../public/img/home_page_img.png")},
                { image: require('../../public/img/background_1.jpg')},
                { image: require('../../public/img/self_portrait.png')},
                { image: require('../../public/img/man_portrait.png')},
            ],
            slides2:
            [
                { image: require('../../public/img/lukas_estian.jpg')},
                { image: require('../../public/img/self_portrait.png')},
                { image: require('../../public/img/man_portrait.png')},
            ],

        }
    },
    computed:
    {
        // imageSource()
        // {
        //     return 
        // }
    }
}
</script>