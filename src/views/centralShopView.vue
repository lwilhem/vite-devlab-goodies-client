<script setup>
import ShopItemListVue from '../components/ShopItemList.vue';
import ShopFilter from '../components/ShopFilter.vue';
import TrendingItemVue from '../components/TrendingItem.vue';
import CategoryItemVue from '../components/CategoryItem.vue';
import ShopFooterVue from '../components/shopFooter.vue';
</script>

<template>
    <ShopFilter></ShopFilter>
    
    <TrendingItemVue></TrendingItemVue>
    <CategoryItemVue></CategoryItemVue>
    <ShopFooterVue></ShopFooterVue>

  
</template>