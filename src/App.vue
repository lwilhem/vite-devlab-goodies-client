<script setup>
import { RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import Shopfooter from './components/Shopfooter.vue';
</script>

<template>
  <NavbarVue></NavbarVue>
  <RouterView></RouterView>
   <Shopfooter></Shopfooter>
</template>

<style>

</style>
