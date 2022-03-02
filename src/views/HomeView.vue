<script setup>
import { RouterLink } from 'vue-router';
import { HeartIcon } from '@heroicons/vue/solid';
</script>

<template>
<!--     <section class=" px-28  flex flex-row justify-between h-auto py-28">
        <div class="w-3/6 flex flex-col justify-between py-16 pr-8">
            <h1 class="text-red-500 text-6xl text-right">&lt;3 GOODIES</h1>
            <h3 class="text-right  ml-32">
                <span class="text-red-500 w-full text-3xl">Easy Way to find goodies</span><span class="text-blue-500 text-2xl"> for your assos</span>
            </h3>
            <RouterLink to="/bigshop">
                <button class="float-right">
                    <img src="../assets/btn_expl_shop.png" alt="" class="object-cover float-right">
                </button>
            </RouterLink>
        </div>
        <div class="">
            <img src="../assets/img_01.png" alt="">
        </div>
    </section> -->
    <section class="w-full h-screen">
        <div class="flex items-center"> <!-- TITLE WRAPPER-->
            <HeartIcon class="w-24 h-24 text-red-500 mx-4"></HeartIcon>
            <h1 class="text-red-500 text-6xl uppercase font-extrabold">GOODIES</h1>
        </div>
    </section>
</template>