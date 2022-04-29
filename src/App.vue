<script setup>
import { RouterView } from 'vue-router'
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import NavAdmin from "./components/NavAdmin.vue";

axios.get("")
</script>

<template>
  <navbar></navbar>
  <NavAdmin></NavAdmin>
  <RouterView></RouterView>
</template>

<style>

</style>