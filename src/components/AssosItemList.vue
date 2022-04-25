<script setup>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
import { StaticItemDisplay } from '../utils/staticItem';
</script>

<template>
    <section class="tablet:w-full tablet:h-auto tablet:p-8 tablet:flex tablet:flex-wrap tablet:items-center tablet:justify-center flex flex-wrap">
      <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">



            <article v-for="product in StaticItemDisplay" :key="product.id" class="group relative">
              <RouterLink to="/bigshop/itemname">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a :href="product.href">
                        <span aria-hidden="true" class="absolute inset-0" />
                        {{ product.name }}
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

<script>
export default {
  setup() {
    return {
      products,
    }
  },
}
</script>