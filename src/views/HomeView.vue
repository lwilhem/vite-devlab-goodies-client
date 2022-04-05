<script setup>
import { RouterLink } from 'vue-router';
import navbar from '../components/Navbar.vue';

</script>

<template>
<navbar></navbar>
    <section class=" px-4  flex grid-cols-1 grid-rows-2 laptop:flex-row justify-between h-auto py-28 laptop:px-28"> <!-- SHOP WRAPPER -->
        <div class="w-full col-span-1 row-span-1 laptop:w-3/6 flex flex-col justify-between py-16 laptop:pr-8">
            <h1 class="text-red-500 text-4xl row-1 text-center tel:text-5xl laptop:text-6xl laptop:text-right">&lt;3 GOODIES</h1>
            <img src="../assets/img_01.png" alt="" class="flex laptop:hidden">
            <h3 class="text-center laptop:text-right  laptop:ml-32">
                <span class="text-red-light w-full text-3xl">Easy Way to find goodies</span><span class="text-blue-dark text-2xl"> for your assos</span>
            </h3>
            <RouterLink to="/bigshop">
            <div class=" w-fit rounded-3xl bg-red-light	hover:bg-red-pink cursor-pointer ml-auto ">
                <p class="px-24 py-4 text-2xl font-medium text-white ">Explore your shop</p>
            </div>
            </RouterLink>
        </div>
        <div class="hidden laptop:flex laptop:items-center">
            <img src="../assets/img_01.png" alt="" class="w-full h-fit ">
        </div>
    </section>
</template>