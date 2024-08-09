<script>
import GalleryImages from '../../components/GalleryImages.vue'

export default ({
  components: { GalleryImages },
  name:"gallery",
    data(){
        return{

        }
        
    },
})
</script>


<template>
    <div class="main">
        <gallery-images />
    </div>
</template>


<style lang="scss" scoped>

    .main
    {
        width: 100%;
    }


</style>