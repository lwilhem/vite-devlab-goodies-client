<script setup>
import ShopItemListVue from '../components/ShopItemList.vue';
import ShopFilter from '../components/ShopFilter.vue';
</script>

<template>
    <ShopFilter></ShopFilter>
    <ShopItemListVue></ShopItemListVue>
    <section class="w-full my-2 flex items-center justify-center">
        <div class="flex">
            <div class="w-12 h-12 bg-slate-100 text-indigo-700 drop-shadow-md hover:bg-indigo-700 hover:text-slate-100 hover:drop-shadow-none rounded-md flex items-center justify-center">
                <span>1</span>
            </div>
            <div class="w-12 h-12 bg-indigo-700 text-slate-100 hover:bg-slate-100 hover:text-indigo-700 hover:drop-shadow-md rounded-md flex items-center justify-center">
                <span>2</span>
            </div>
            <div class="w-12 h-12 bg-indigo-700 rounded-md hover:bg-slate-100 hover:text-indigo-700 hover:drop-shadow-md flex items-center justify-center">
                <span class="text-slate-100">3</span>
            </div>
        </div>
    </section>
</template>