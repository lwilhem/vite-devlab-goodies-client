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
    </section>
</template>