<script setup>
import { CollectionIcon, LightningBoltIcon, FireIcon, HeartIcon, UserIcon, CogIcon } from '@heroicons/vue/solid';
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="w-full bg-red-500 h-16 flex items-center justify-evenly">
      <RouterLink to="/">
        <div class="flex items-center justify-center"><!-- LOGO & TITLE THINGY-->
          <HeartIcon class="w-8 h-8 text-black "></HeartIcon>
          <h1 class="text-xl uppercase">goodies</h1>
        </div>
      </RouterLink>
      <nav class="flex items-center justify-between"> <!--NavBar Desktop-->
        <div class="flex items-center justify-center">
        <RouterLink to="/bigshop">
          <div class="flex my-0 mx-3 items-center justify-center">
            <CollectionIcon class="w-8 h-8 mx-1"></CollectionIcon>
            <span class="text-lg">Le Shop</span>
          </div>
        </RouterLink>
        <RouterLink to="/assos">
          <div class="flex my-0 mx-3 items-center justify-center">
            <LightningBoltIcon class="w-8 h-8 mx-1"></LightningBoltIcon>
            <span class="text-lg">Les Assos</span>
          </div>
        </RouterLink>
        <RouterLink to="/aboutus">
          <div class="flex my-0 mx-3 items-center justify-center">
            <FireIcon class="w-8 h-8 mx-1"></FireIcon>
            <span class="text-lg">Les Devs</span>
          </div>
        </RouterLink>
        </div>
      </nav>
  </header>
</template>