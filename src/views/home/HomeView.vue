<template>
  <div class="main">
    <div class="sub">
      <div class="img_holder">
        <div class="img">
          <!-- <img src="../../assets/home_page_img.png"> -->
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
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include mobile
  {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      align-items: center;
  }
}

.sub
{
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include mobile()
  {
    width: 100%;
  }
}

.img_holder
{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
}

.img
{
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  // border: 1px solid grey;
  background-image: url("../../assets/home_page_img.png");
}

</style>
<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
