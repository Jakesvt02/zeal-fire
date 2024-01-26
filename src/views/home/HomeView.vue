<template>
  <div class="main">
    <!-- <div class="sub desktop_only"> -->
      <div class="img_holder">
          <image-scroller />
      </div>
    <!-- </div> -->
  </div>
</template>
<style lang="scss" scoped>

@import "../../styles";

.main
{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 3rem;
  padding-top: 3rem;

  @include mobile
  {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      align-items: center;
  }
}

// .sub
// {
//   width: 98rem;
//   padding: 1rem;
//   display: flex;
//   flex-flow: column nowrap;
//   align-items: center;

//   @include mobile()
//   {
//     width: 100%;
//   }
// }

.desktop_only
{
  display: flex;

  @include mobile()
  {
    display: none;
  }
}

.mobile_only
{
  display: none !important;

  @include mobile()
  {
    display: flex !important;
  }
}

.img_holder
{
  width: 100%;
  height: 40rem;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  padding-bottom: 1rem;
}

.img
{
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  // border: 1px solid grey;
  // background-image: url("../../../public/img/home_page_img.png");
  background-position: center center;
}

.social_holder
{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding-top: 2rem;
}

.instagram_logo, .facebook_logo
{
  cursor: pointer;
  
}

.instagram_logo_img 
{
  background-size: contain;
  background-repeat: no-repeat;
  // background-image: url("../../../public/img/instagram.png");
  height: 3rem;
  width: 2.5rem;
  margin-right: 1rem;
}

.facebook_logo_img 
{
  background-size: contain;
  background-repeat: no-repeat;
  // background-image: url("../../../public/img/facebook.png");
  height: 3rem;
  width: 2.5rem;
}

</style>
<script>
import ImageScroller from '../../components/ImageScroller.vue';
// import VueInstagram from '../../components/InstagramHolder.vue'
// import AboutView from '../about/AboutView.vue';
import axios from 'axios';

export default {
  name: "HomeView",
  components: {ImageScroller},
  data()
  {
    return{
      contents:null,
      image_1:"",
    }
  },
  created()
  {
    this.fetchInstagramImage();
  },
  mounted()
  {
    
  },
  methods:
  {
    
    async fetchInstagramImage()
    {
      axios.get('http://localhost:8080/v/t51.2885-15/403891516_350782664223196_3916539331110130790_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pxbWmSmlOgwAX_9BU6U&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI0MDA4OTU5OTQ0OTcxOTMzMg%3D%3D.2-ccb7-5&oh=00_AfBaqYvFAPipFBRV_9tLAKismiGbn_7DzyXqTUmii_SqjQ&oe=6594E811&_nc_sid=ee9879', {
      headers: 
      {
        'Content-Type': 'image/jpeg',
      }}).then(response => 
      { 
        var imageData = response.data;
        this.displayImage(imageData);
      })
      .catch(error => { console.log(error)});
      // var url = "https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/403891516_350782664223196_3916539331110130790_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pxbWmSmlOgwAX_9BU6U&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzI0MDA4OTU5OTQ0OTcxOTMzMg%3D%3D.2-ccb7-5&oh=00_AfBaqYvFAPipFBRV_9tLAKismiGbn_7DzyXqTUmii_SqjQ&oe=6594E811&_nc_sid=ee9879";
      // this.image_1 = url;
      // console.log(corsImageModified);

      // var base64 = btoa(image);
      // this.image_1 = 'data:image/jpeg;base64,' + base64;
    },
    displayImage(imageData)
    {
      var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(imageData)));
      var img = new Image(1, 1); // width, height values are optional params 
      img.src = imgsrc;

      this.image_1 = img.src;
      // var imgElement = document.createElement('img');
      // this.image_1 = 'data:image/jpeg;base64,' + btoa(imageData); // Encode image data as base64
      // document.body.appendChild(imgElement); // Or append to a specific container
    },
    instagramClick()
    {
      window.open("https://www.instagram.com/zeal.n.fire.studio/");
    },
    facebookClick()
    {
      window.open("https://www.facebook.com/profile.php?id=61553973684515");
    }
  }
};
</script>
