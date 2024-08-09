<template>
  <div class="main">
    <div class="heading_holder">
        <div class="heading">Gallery</div>
      </div>
    <div class="sub">
      <div class="gallery">
        <div class="gallery-item" v-for="item in items" :key="item.id" @click="showFullImage(item.imageUrl)">
          <img :src="item.imageUrl" alt="Image" class="image-container">
          <div class="piece"> {{item.caption}} </div>
        </div>
        <div v-if="fullScreenImage" class="full-screen">
          <img :src="fullScreenImage" alt="Full Screen Image" @click="fullScreenImage = null">
        </div>
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
    width: 100%;
    align-items: center;
    align-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-family: 'Minion Pro', sans-serif;
  }

  .heading_holder
  {
    background-color: #f1f1f1;
    width: 100%;
    padding: 1rem;
    margin-bottom: 3rem;
  }

  .heading
  {
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
  }

  .sub
  {
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    width: 98rem;
    text-align: center;
  }

  .gallery 
  {
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @include mobile()
    {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .gallery-item 
  {
    margin: 0;
    padding: 0;
    text-align: center;
    cursor: pointer;
  }

  .image-container {
    height: 20rem; /* Adjust the desired height */
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.full-screen img {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}

</style>
  
<script>
  export default {
    data() {
      return {
        items: [
        
          { id: 1, caption:"Two Boys", imageUrl: require('../../public/img/two_boys.jpg') },
          { id: 2, imageUrl: require('../../public/img/self_portrait.png') },
          { id: 2, imageUrl: require('../../public/img/man_portrait.png') },
          // ... more items
        ],
        fullScreenImage: null
      }
    },
    methods: {
    showFullImage(imageUrl) {
      console.log(imageUrl);
      this.fullScreenImage = imageUrl;
    }
  }
  }
  </script>