<script setup>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
import { StaticItemDisplay } from '../utils/TrendingItem';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-red-light">
        <div class="flex flex-row my-8 mx-8 mt-8 text-5xl">
            <h2 class=" font-semiboldml-60  mt-7 w-40 text-black text-xl">Product Type</h2>
                <span class="w-screen bg-black h-3  my-8 mx-10 mt-8 "></span>
            </div>
                <section class="tablet:w-full h-auto tablet:p-8 flex flex-wrap items-center justify-center gap-10">
                    <article v-for="product in StaticItemDisplay" :key="product.id" class="group relative">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700"></h3>
                            </div>
                        </div>
                    </article>
                </section>
            <div class="bg-red-light">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 text-center">Liste des associations</h2>
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        
        
            <article v-for="product in StaticItemDisplay" :key="product.id" class="group relative">
                <RouterLink to="/assos/name">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                    <h3 class="text-sm text-gray-700">
                        <a :href="product.href">
                        <span aria-hidden="true" class="absolute inset-0"> </span>
                        <h4 class="text-3xl">{{ product.name }}</h4>
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                    </div>
                <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
            </RouterLink>
            </article>
        </div>
        </div>
    </div>

        <a>
            <img sr="/src/assets/btnScroll.png">
        </a>
    </div>    
</template>