<script>
import ContactForm from '../../components/ContactForm.vue'

export default ({
  components: { ContactForm },
  name:"contact_us",
    data(){
        return{

        }
        
    },
})
</script>


<template>
    <div class="main">
        <contact-form />
    </div>
</template>


<style lang="scss" scoped>

    .main
    {
        width: 100%;
    }


</style>