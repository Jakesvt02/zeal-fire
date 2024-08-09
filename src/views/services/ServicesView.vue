<template>
  <div class="main">
    <div class="heading_holder">
        <div class="heading">Services</div>
    </div>
    <div class="content_holder">
        <div class="sub">
            <div class="heading_sub">Illuminate the Extraordinary:</div>
            <div class="content" v-html="content_1"></div>
            <div class="heading_sub">Custom Art Pieces:</div>
            <div class="content" v-html="content_2"></div>
            <div class="heading_sub">Art Consultancy Services:</div>
            <div class="content" v-html="content_3"></div>
            <div class="heading_sub">Personalized and Thoughtful Design:</div>
            <div class="content" v-html="content_4"></div>
            <div class="heading_sub">Delivery:</div>
            <div class="content" v-html="content_5"></div>
        </div>    
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import "../../styles.scss";

.main
{
  display: flex;
  flex-flow: column nowrap;
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-family: 'Minion Pro', sans-serif;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;

  @include mobile()
  {
    grid-template-columns: 1fr;
  }
  // width: 100%;
  // padding-top: 2rem;
}

.heading_holder
{
  background-color: rgba(100, 150, 255, 0.20);
  margin-bottom: 3rem;
  width: 100%;
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

.content_holder
{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    background-color: rgba(100, 150, 255, 0.20);
    align-items: center;
}

.sub
{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 98rem;
    text-align: center;

    @include mobile()
    { 
        grid-template-columns: 1fr;
        width: 100%;
    }
}

.heading_sub
{
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: underline;
    padding-bottom: 0.5rem;
    grid-column: 2;

    @include mobile()
    {
        grid-column: 1;
    }
}

.content
{
    font-size: 1rem;
    grid-column: 2;

    @include mobile()
    {
        grid-column: 1;
    }
}


</style>

<script>
export default {
    name:"ServicesView",
    data(){
        return{
            content_1:"We specialize in illuminating elements that others might consider insignificant, capturing mesmerizing visuals in people, wildlife, landscapes, and plant life. By designing and composing the style of your choice through the Adobe Suite, we add character and complementary elements, and edit or omit unwanted elements within reference photos and pictures you provide for producing the art piece.",
            content_2:"Our services include commissioned art pieces, collaborating with clients to create custom works reflecting their individual style and vision.",
            content_3:"Zeal & Fire provides art consultancy services, guiding clients in selecting already produced or commissioning artworks that resonate with their aesthetic preferences and values.",
            content_4:"Our commitment to quality, creativity, and personalized service sets us apart, making Zeal & Fire the ideal partner for those who appreciate finer details and seek to infuse their spaces with meaningful art. Let us transform your ideas into captivating visual narratives.",
            content_5:"Enjoy a seamless experience as Zeal & Fire crafts your custom art pieces and arrange that they are delivered to your chosen location, ensuring a convenient service experience.",
            content_6:"Should you desire framing for your artwork, we are more than happy to assist you with arranging suitable frames.",
        }
},
}
</script>