<template>
  <div class="main">
    <div class="sub">
      <div class="content_holder">
        <div class="text_holder">
          <div class="text" v-html="about_us"></div>
        </div>
        <div class="image_holder">
          <div class="image"></div>
        </div>
      </div>
      <div class="video_holder">
        <video class="video" loop autoplay muted >
          <source class="video_player" src="../../assets/sequence-01_olPUesRa.mp4" type=video/mp4>
        </video>
      </div>
      <div class="holder">
        <div class="heading">Contact</div>
        <div class="contact_holder">  
          <label class="label order_1 mobile_order_1" for="first_name">Name</label>
          <!-- <label class="label order_2 mobile_order_2" for="last_name">Last Name</label> -->
          <input class="textbox order_1 mobile_order_1" type="text" id="first_name" placeholder="First Name">
          <input class="textbox order_2 mobile_order_2" type="text" id="last_name" placeholder="Last Name">
          <label class="label order_1 mobile_order_3" for="email">Email</label>
          <input class="textbox order_3 mobile_order_3" type="text" id="email_address" >
          <label class="label order_1 mobile_order_4" for="subject">Subject</label>
          <input class="textbox order_3 mobile_order_4" type="text" id="subject" >
          <label class="label order_1 mobile_order_5" for="message">Message</label>
          <textarea class="textarea order_3 mobile_order_5" id="message" ></textarea>
        </div>
        <div class="button_holder">
          <button class="button" value="Send">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import "../../styles";

.main
{
  width: 100%;
  padding-top: 2rem;
}

.sub
{
  margin: 0 auto;
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include mobile()
  {
    width: 100%;
  }
}

.content_holder
{
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  @include mobile()
  {
    flex-flow: column nowrap;
    align-content: center;
    align-items: center;
  }
}

.text_holder
{
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  width: 50%;
  font-size: 1.2rem;
  margin-left: 12rem;

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
  width: 50%;
  height: 34rem;
  margin-right: 3rem;

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
  background-image: url("../../assets/zane.jpg");
}

.video_holder
{
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;

  @include mobile()
  {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}


.video
{
  width: 45%;
}

.video_player
{
  width: 100%;
}

.holder
{
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  align-content: center;
}
.contact_holder
{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45%;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  @include mobile()
  {
    grid-template-columns: 1fr;
  }

}

.heading
{
  margin-bottom: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  width: 45%;
  text-align: center;
  padding: 0.5rem;
  margin-top: 2rem;
}

.spacer
{
  width: 55%;
}

.name_holder
{

}

.label
{
  font-weight: bold;
}

.order_1
{
  grid-column: 1;

  @include mobile()
  {
    grid-column: 1;
  }
}

.mobile_order_1
{
  // display: none;

  @include mobile()
  {
    order: 1;
  }
}

.mobile_order_2
{
  // display: none;

  @include mobile()
  {
    order: 2;
  }
}
.mobile_order_3
{
  // display: none;

  @include mobile()
  {
    order: 3;
  }
}

.mobile_order_4
{
  // display: none;

  @include mobile()
  {
    order: 4;
  }
}

.mobile_order_5
{
  // display: none;

  @include mobile()
  {
    order: 5;
  }
}

.order_2
{
  grid-column: 2;

  @include mobile()
  {
    grid-column: 1;
  }
}

.order_3
{
  grid-column:1 / 3;

  @include mobile()
  {
    grid-column: 1;
  }
}
.textbox, .textarea
{
  border: 0.5px solid grey;
  // border-radius: 0.2rem;
  background-color: lightgrey;
  // text-align: center;
  padding-inline-start: 0.2rem;
  text-transform: uppercase;
  height: 3rem;
  vertical-align: middle;
  box-shadow: 1px solid grey;
  font-size: 0.7rem;
}

.textarea
{
  height: 7rem;
}

.email_holder
{
  padding-top: 1rem;
  width: 100%;
}

.button_holder
{
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-top: 2rem;
}

.button
{
  padding: 0.5rem;
  width: 5%;
  background-color: black;
  color: white;
}

</style>

<script>
export default {
    name:"about_us",
    data(){
      return{
        about_us:"Zeal & Fire, founded by Zané van Tonder, is a passionate design studio that<br>seeks to illuminate the often-overlooked elements of beauty, life, and emotion<br>in our everyday surroundings. Zané, currently pursuing her Bachelor’s Degree<br>in Architecture at the University of Witwatersrand, infuses her deep love for life<br>into each creation.<br><br>The studio’s mission is to bring meaningful thoughts and experiences into our<br>living spaces through art and design. Zané believes in the stimulating quality<br>of art, capable of evoking lost memories, creating atmospheres in meaningful<br>spaces, and communicating character and personality.<br><br>Inspired by mesmerizing visuals, emotions, and behaviors in people, wildlife,<br>landscapes, and plant life, Zeal & Fire was born. Zané’s keen eye for detail<br>stems from a profound appreciation for even the smallest moments. Since its<br>inception, the studio has collaborated with friends, transforming their spaces into<br>havens of meaningful and intimate art pieces.<br><br>At Zeal & Fire, we don’t just create art; we curate experiences that linger in the<br> heart and mind."
      }
    }
}
</script>