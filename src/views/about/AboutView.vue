<template>
  <div class="main">
    <div class="heading_holder">
      <div class="heading">ABOUT</div>
    </div>
    <div class="sub">
      <div class="content_holder">
        <div class="image_holder">
          <div class="image"></div>
        </div>
      </div>
    </div>
    <div class="text_holder">
        <div class="text" v-html="about_us"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import "../../styles";

.main
{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-family: 'Minion Pro', sans-serif;
  justify-content: center;
  align-content: center;
  align-items: center;

  @include mobile()
  {
    grid-template-columns: 1fr;
  }
  // width: 100%;
  // padding-top: 2rem;
}

.heading_holder
{
  grid-column: 1 / 4;
  background-color: rgba(237, 189, 174, 0.20);
  margin-bottom: 3rem;
}

.heading
{
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem;
  grid-column: 2;
  text-align: center;
  vertical-align: middle;
}

.sub
{
  grid-column: 2;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-flow: column nowrap;

  @include mobile()
  {
    grid-column: 1;
  }
}

.content_holder
{
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include mobile()
  {
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
    // padding-left: 1rem;
    // padding-right: 1rem;
    font-size: 1rem;
  }
}

.text_holder
{
  // display: flex;
  // flex-flow: column nowrap;
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  padding-top: 2rem;
  // margin-left: 12rem;
  grid-column: 1 / 4;
  background-color: rgba(237, 189, 174, 0.20);
  padding: 1rem;

  @include mobile()
  {
    margin-left: 0rem;
    width: 100%;
    padding-bottom: 4rem;
  }
}

.text
{

}

.image_holder
{
  width: 100%;
  height: 34rem;
  // margin-right: 3rem;
  margin-bottom: 3rem;

  @include mobile()
  {
    margin-right: 0rem;
    width: 100%;
    
  }
}

.image
{
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("../../../public/img/zane.jpg");
}

.video_holder
{
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;

  @include mobile()
  {
    padding-top: 2rem;
    // padding-bottom: 2rem;
  }
}


.video
{
  width: 60%;

  @include mobile()
  {
    width: 100%;
  }
}

.video_player
{
  width: 100%;
}

</style>

<script>
// import ContactForm from '../../components/ContactForm.vue'

export default {
  components: {  },
    name:"about_us",
    data(){
      return{
        about_us:"Zeal & Fire, founded by Zané van Tonder, is a passionate design studio that<br>seeks to illuminate the often-overlooked elements of beauty, life, and emotion<br>in our everyday surroundings. Zané, currently pursuing her Bachelor’s Degree<br>in Architecture at the University of Witwatersrand, infuses her deep love for life<br>into each creation.<br><br>The studio’s mission is to bring meaningful thoughts and experiences into our<br>living spaces through art and design. Zané believes in the stimulating quality<br>of art, capable of evoking lost memories, creating atmospheres in meaningful<br>spaces, and communicating character and personality.<br><br>Inspired by mesmerizing visuals, emotions, and behaviors in people, wildlife,<br>landscapes, and plant life, Zeal & Fire was born. Zané’s keen eye for detail<br>stems from a profound appreciation for even the smallest moments. Since its<br>inception, the studio has collaborated with friends, transforming their spaces into<br>havens of meaningful and intimate art pieces.<br><br>At Zeal & Fire, we don’t just create art; we curate experiences that linger in the<br> heart and mind."
      }
    }
}
</script>