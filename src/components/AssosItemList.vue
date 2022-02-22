<script setup>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
import { StaticItemDisplay } from '../utils/staticItem';
</script>

<template>
    <section class="w-full h-auto p-8 flex flex-wrap items-center justify-center">
        <article v-for="item in StaticItemDisplay" :key="item.id" class="w-1/5 bg-slate-50 p-2 flex flex-col items-center justify-center m-4 rounded-md border-slate-50 drop-shadow-lg hover:drop-shadow-xl"> <!-- ITEM DISPLAY WRAPPER -->
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
                            <ArrowCircleRightIcon class="w-4 h-4"></ArrowCircleRightIcon>
                        </a>
                    </h3>
                    <p>{{ item.color }}</p>
                    <p>{{ item.price }}</p>
                </div>
            </div>
        </article>
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
    </section>
</template>