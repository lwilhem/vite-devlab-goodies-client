<script setup>
import { RouterLink } from 'vue-router';
import ShopFilter from '../components/ShopFilter.vue';
import trendingItem from '../components/TrendingItem.vue';
</script>

<template>
<ShopFilter></ShopFilter>
<RouterLink to="/assos/name">
    <div class="bg-purple w-fit py-4 px-12 flex items-center justify-center rounded-md">
        <span class="text-slate-100">link to assos Shop</span>
    </div>
</RouterLink>
  <trendingItem></trendingItem>
</template>