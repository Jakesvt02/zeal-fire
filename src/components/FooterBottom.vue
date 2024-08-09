<template>
  <div class="main">
    <div class="sub">
        <div class="footer_holder">
            <div class="links_holder">
                <div class="heading">USEFUL LINKS</div>
                <router-link class="link_label" to="about">about</router-link>
                <router-link class="link_label" to="services">services</router-link>
                <router-link class="link_label" to="comission">commisions</router-link>
            </div>
            <div class="get_in_touch">
                <div class="heading">GET IN TOUCH</div>
                <div @click="facebookClick()" class="link_label">facebook</div>
                <div @click="instagramClick()" class="link_label">instagram</div>
                <div @click="mailClick()" class="link_label">zeal.n.fire@gmail.com</div>
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
    background-color: gray;
    color: white;
    font-family: 'Minion Pro', sans-serif;
    align-content: center;
    justify-content: center;
    padding: 1rem;
}

.sub
{
	width: 98rem;

	@include mobile()
	{
		width: 100%;
	}
}

.footer_holder
{
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    justify-content: center;

    @include mobile()
    {
        flex-flow: column nowrap;
    }
}

.links_holder
{
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    justify-items: center;
    align-items: center;

    @include mobile()
    {
        width: 100%;
    }
}

.heading
{
    font-size: 1.5rem;
    padding-bottom: 1rem;
}

.link_label
{
    text-align: center;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    font-weight: normal;

    &:hover
    {
        cursor: pointer;
        text-decoration: line-through;
        transition: .5s ease all;
        font-weight: bold;
    } 
}

.get_in_touch
{
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    justify-items: center;
    align-items: center;

    @include mobile()
    {
        width: 100%;
        padding-top: 1rem;
    }
}

</style>

<script>
export default {
  name: "FooterBottom",
  data()
  {
    return{
      contents:null,
      image_1:"",
    }
  },
  created()
  {
  },
  mounted()
  {
    
  },
  methods:
  {
    instagramClick()
    {
      window.open("https://www.instagram.com/zeal.n.fire.studio/");
    },
    facebookClick()
    {
      window.open("https://www.facebook.com/profile.php?id=61553973684515");
    },
    mailClick()
    {
        window.open("mailto:zeal.n.fire@gmail.com");
        // var x=window.open("mailto:zeal.n.fire@gmail.com");
        // x.close();
        // location.href = "mailto:"+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody;
    }
  }
};
</script>