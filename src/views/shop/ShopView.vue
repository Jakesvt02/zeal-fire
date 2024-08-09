<template>
  <div class="main">
    <div class="coming_soon">Coming Soon!</div>
  </div>
</template>

<style lang="scss" scoped>

@import "../../styles.scss";

.main
{
  display: flex;
  justify-content: center;
  height: 20rem;
  font-family: 'Minion Pro', sans-serif;
  z-index: 1;
  padding-top: 2.5rem;
  
}

.coming_soon
{
  font-family: 'Minion Pro', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  // transform: skewY(0deg);
  transition: transform 1s ease-in-out;
  animation: skewText 2s infinite alternate;
}

@keyframes skewText
{
  from{
    transform: scale(0.5);
    color: gray;
  }
  to {
    transform: scale(1.3);
    color: black;
  }
}

</style>

<script>
export default {
  name:"shop",
    data(){
        return{
          isSkewed:false
        }
        
    },
    created()
    {
      
    },
    // methods()
    // {
    //   toggleSkew()
    //   {
    //     this.isSkewed = !this.isSkewed;
    //   }
    // }

}
</script>