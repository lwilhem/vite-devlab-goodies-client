git <script setup>
import { StaticItemDisplay } from '../utils/TrendingItem';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="bg-purple ">

        <div class=" tablet:flex tablet:flex-row tablet:my-8 tablet:mx-8 tablet:mt-8 tablet:text-5xl ">
           <h2 class=" font-semiboldml-60  mt-7   text-white text-xl">Trending</h2>
                <span class="w-full bg-white h-3  my-8 mx-10 mt-8 "></span>
        </div>
        <section class="tablet:w-full h-auto tablet:p-8  flex tablet:flex tablet:flex-wrap tablet:items-center tablet:justify-center flex-wrap justify-center">
            <article v-for="item in StaticItemDisplay" :key="item.id" class="w-1/5 bg-slate-50  flex flex-col items-center justify-center m-4 rounded-md border-slate-50 drop-shadow-lg hover:drop-shadow-xl"> <!-- ITEM DISPLAY WRAPPER -->
                <RouterLink to="/bigshop/itemname">
                    <div class=""> 
                        <img class="w-full h-fit " :src="item.imageSrc" :alt="item.imageAlt">
                    </div>
                        <div>
                            <div class="tablet:flex flex-col ">
                                <h3>
                                    <a  class="flex items-center justify-evenly">
                                        <span>{{ item.name }}</span>
                                    </a>
                                </h3>
                                <p>{{ item.color }}</p>
                                <p>{{ item.price }}</p>
                            </div>
                        </div>
                </RouterLink>
            </article>
        </section>
</section>
</template>