<script setup>
import { RouterLink } from 'vue-router';
import navbar from '../components/Navbar.vue';
import Footer from '../components/Shopfooter.vue';
</script>

<template>
  <section class=" tablet:flex tablet:h-auto tablet:py-28 flex justify-center tablet:justify-start ">
        <div class="w-3/6 flex flex-col flex items-center py-16">
            <h1 class="text-red-500 text-6xl mb-3">GOODIES</h1>
            <h3 class="mb-16">
                <span class="text-red-500 w-full text-3xl ">Easy Way to find goodies</span><span class="text-blue-500 text-2xl"> for your assos</span>
            </h3>
            <routerLink to="/bigshop">
            <div class=" mb-5  w-fit rounded-3xl bg-red-light	hover:bg-red-pink cursor-pointer ml-auto ">
                <button class="custom-btn btn-7"><span>Explore The Shop</span></button>
              </div>
            </routerLink>
        </div>
        <div class="hidden laptop:flex laptop:items-center">
            <img src="../assets/img_01.png" alt="" class="w-full h-fit ">
        </div>
    </section>
    <div class=" tablet:flex tablet:h-28 tablet:place-content-around tablet:mt-2 tablet:h-28 flex place-content-around h-9">
    <img src="../assets/logoeEMLV.png" alt="logoEMLV" class="tablet:rounded-md ">
    <img src="../assets/logoIIM.png" alt="logoIIM" class="tablet:rounded-md ">
    <img src="../assets/logoESILV.png" alt="logoESILV"  class="tablet:rounded-md ">
    </div>
  <Footer></Footer>
</template>

<style>

button {
  margin: 20px;
}
.custom-btn {
  width: 230px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

/* 7 */
.btn-7 {
  background: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgb(154, 93, 67) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251,75,2,1);
  box-shadow:
      -7px -7px 20px 0px rgba(255,255,255,.9),
      -4px -4px 5px 0px rgba(255,255,255,.9),
      7px 7px 20px 0px rgba(0,0,0,.2),
      4px 4px 5px 0px rgba(0,0,0,.3);
  transition: all 0.3s ease;
}
.btn-7:before{
  height: 0%;
  width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover{
  color: white;
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251,75,2,1);
  box-shadow:
      -7px -7px 20px 0px rgba(255,255,255,.9),
      -4px -4px 5px 0px rgba(255,255,255,.9),
      7px 7px 20px 0px rgba(0,0,0,.2),
      4px 4px 5px 0px rgba(0,0,0,.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}

</style>