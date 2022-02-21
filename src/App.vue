<script setup>
import { CubeTransparentIcon } from '@heroicons/vue/outline'
import { MenuAlt2Icon, CollectionIcon, LightningBoltIcon, FireIcon, TagIcon, HeartIcon } from '@heroicons/vue/solid';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full bg-red-500 h-16 flex items-center justify-evenly">
      <RouterLink to="/">
        <div class="flex items-center justify-center"><!-- LOGO & TITLE THINGY-->
          <HeartIcon class="w-8 h-8 text-black "></HeartIcon>
          <h1 class="text-xl uppercase">goodies</h1>
        </div>
      </RouterLink>
  </header>
  <RouterView></RouterView>
</template>

<style>

</style>
