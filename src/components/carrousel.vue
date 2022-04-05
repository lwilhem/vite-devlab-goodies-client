<script setup>

import {XCircleIcon} from '@heroicons/vue/solid';
</script>

<template >


  <Carousel :autoplay="0" :wrap-around="true">
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item" :style="bg-image">
        <img :src="items[0].img" class="w-1/2 h-1/2" alt="" v-if="slide == 1"  @click="count = 1; disablescroll()">
        <img :src="items[1].img" class="w-1/2 h-1/2" alt="" v-if="slide == 2" @click="count = 2; disablescroll()">
        <img :src="items[2].img" class="w-1/2 h-1/2" alt="" v-if="slide == 3" @click="count = 3; disablescroll()">
        </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>

  <div v-if="count != 0" class="opaque_screen">
    <XCircleIcon class="close_bow_img" @click="count = 0; enablescroll()"></XCircleIcon>
    <div class="box_img_show">
      <img v-if="count === 1" class="img_active_show" :src="items[0].img">
      <img v-else-if="count === 2" class="img_active_show" :src="items[1].img">
      <img v-else-if="count === 3" class="img_active_show" :src="items[2].img">
      <img v-else>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return{
      count: 0 ,
      items: [
        { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' }, 
        { img: '/src/assets/product/t_shirt.png' },
        { img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' }],
    }
  },
  methods: {
    disablescroll(){
      document.querySelector('#shoppage').style.overflow = "hidden";
    },
    enablescroll(){
      document.querySelector('#shoppage').style.overflow = "scroll";
    }
  }
});
</script>

<style>
.close_bow_img{
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.opaque_screen{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(122, 122, 122, 0.4);
}
.box_img_show{
  /* background-color: aliceblue; */
  position: relative;
  margin: 0 8rem;
  top: 15%;
  z-index: 40 ;
  width: auto;
  height: 80%;

}
.img_active_show{
  width: auto;
  height: 100%;
  margin: auto;
}
.carousel__pagination-button{
  background-color: black !important;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}
.carousel__item {
  min-height: 500px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}
.carousel__slide {
  padding: 10px;
}
</style>