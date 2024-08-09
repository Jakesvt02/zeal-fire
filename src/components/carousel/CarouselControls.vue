<template>
    <div class="button_holder">
        <button class="carousel-control left" @click="$emit('prev')">Prev</button>
        <button class="carousel-control right" @click="$emit('next')">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ["prev", "next"], // vue v3
  };
  </script>
  <style lang="scss" scoped>

   @import "../../styles";

  .button_holder
  {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .carousel-control
  {
    background-color: grey;
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 70px;
    top: calc(50% - 1rem);
    color: black;
    cursor: pointer;
  }
  .left 
  {
    left: calc(18% - 1rem);

    @include mobile
    {
        left: 3rem;
    }
  }
  .right 
  {
    right: calc(18% - 1rem);

    @include mobile
    {
        right: 3rem;
    }
  }
  </style>