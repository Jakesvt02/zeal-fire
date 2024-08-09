<template>
    <div class="holder">
      <div class="heading_holder">
        <div class="heading">Contact</div>
      </div>
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
        <button @click="sendEmail()" class="button" value="Send">Send</button>
      </div>
    </div>
</template>

<style lang="scss" scoped>

@import "../styles";

.holder
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
  background-color: rgba(110, 144, 118, 0.7);
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

input::placeholder
{
  text-align: center;
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

::placeholder 
{
  color: white;
}
.textbox, .textarea
{
  border: 0;
  // border-radius: 0.2rem;
  background-color: rgba(110, 144, 118, 0.6);
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
  padding-bottom: 2rem;
  
  @include mobile()
  {
    padding-bottom: 1rem;
  }
}

.button
{
  padding: 0.5rem;
  width: 5%;
  background-color: black;
  color: white;

  @include mobile()
  {
    padding: 1rem;
    width: 25%;
  }
}

</style>

<script>

export default ({
  data()
  {
    return{

    }  
  },
  methods:
  {
    sendEmail()
    {
      
    }
  }
})
</script>

