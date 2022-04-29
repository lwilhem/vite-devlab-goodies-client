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
            <RouterLink to="/bigshop">
            <div class=" mb-5  w-fit rounded-3xl bg-red-light	hover:bg-red-pink cursor-pointer ml-auto ">
              <div class="buttonAccueilwrap">
                <button class="buttonAccueil">Explore the shop</button>
              </div>
            </div>
            </RouterLink>
        </div>
        <div class="hidden laptop:flex laptop:items-center">
            <img src="../assets/img_01.png" alt="" class="w-full h-fit ">
        </div>
    </section>
    <div class=" tablet:flex tablet:h-28 tablet:place-content-around tablet:mt-2 tablet:h-28 flex place-content-around h-9">
    <img src="../assets/logoEMLV.png" alt="logoEMLV" class="tablet:rounded-md ">
    <img src="../assets/logoIIM.png" alt="logoIIM" class="tablet:rounded-md ">
    <img src="../assets/logoESILV.png" alt="logoESILV"  class="tablet:rounded-md ">
    </div>
  <Footer></Footer>
</template>

<style>

.buttonAccueilwrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttonAccueil {
  width: 24rem;
  height: 65px;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: red;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

.buttonAccueilwrap:hover {
  background-color: #ff5722;
  box-shadow: 0px 15px 20px rgba(119, 29, 0, 0.73);
  color: #fff;
  transform: translateY(-7px);
}


</style>