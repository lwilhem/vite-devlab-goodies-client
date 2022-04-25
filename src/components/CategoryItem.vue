<script setup>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
import { StaticItemDisplay } from '../utils/TrendingItem';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-[url('src/assets/category.png')] bg-cover">
        <div class="flex flex-row my-8 mx-8 mt-8 text-5xl">
            <h2 class=" font-semiboldml-60  mt-7   text-black text-xl">Product Type</h2>
                <span class="w-full bg-black h-3  my-8 mx-10 mt-8 "></span>
            </div>
                <section class="tablet:w-full h-auto tablet:p-8 flex flex-wrap items-center justify-center">
                    <article v-for="item in StaticItemDisplay" :key="item.id" class="w-1/5  bg-slate-50 tablet:p-2 flex flex-col items-center justify-center m-4 rounded-md border-slate-50 drop-shadow-lg hover:drop-shadow-xl"> <!-- ITEM DISPLAY WRAPPER -->
                        <div>   <!-- ITEM IMAGE DISPLAY -->
                                <img :src="item.imageSrc" :alt="item.imageAlt">
                            </div>
                                <div>
                        </div>
                    </article>
                </section>
            <section class="w-full h-auto tablet:p-8 flex flex-wrap items-center justify-center">
                <article v-for="item in StaticItemDisplay" :key="item.id" class="w-1/5 bg-slate-50 tablet:p-2 flex flex-col items-center justify-center m-4 rounded-md border-slate-50 drop-shadow-lg hover:drop-shadow-xl">
                  <!-- ITEM DISPLAY WRAPPER -->
                    <div>   <!-- ITEM IMAGE DISPLAY -->
                        <img :src="item.imageSrc" :alt="item.imageAlt">
                    </div>
                    <div>

                        <div class="flex flex-col">
                            <h3>
                                <a :href="item.href" class="flex items-center justify-evenly">
                                    <span>
                                        {{ item.name }}
                                    </span>
                                  <RouterLink to="/bigshop/itemname">
                                    <div class=" flex justify-center content-center">
                                         <h2>Voir plus </h2>
                                        <ArrowCircleRightIcon class="w-4 h-4"></ArrowCircleRightIcon>
                                    </div>
                                    </RouterLink>
                                </a>
                            </h3>
                            <p>{{ item.color }}</p>
                            <p>{{ item.price }}</p>
                        </div>
                    </div>
                </article>
        </section>

        <a>
            <img sr="/src/assets/btnScroll.png">
        </a>
    </div>    
</template>