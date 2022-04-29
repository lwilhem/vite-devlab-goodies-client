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
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 text-center">Liste des associations</h2>
              <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                <article class="group relative lg:col-start-2">
                    <!-- <RouterLink :to="`/assos/${shop.id}?id=${shop.id}`"> -->
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2021-05/28/MOVIES.jpg?v=20220426205714">
                        </div>
                        <div class="mt-4 flex justify-center">
                            <h3 class="text-3xl text-gray-700">Vêtement</h3>
                        </div>
                    <!-- </RouterLink> -->
                </article>
                <article class="group relative">
                    <!-- <RouterLink :to="`/assos/${shop.id}?id=${shop.id}`"> -->
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2021-05/28/MOVIES.jpg?v=20220426205714">
                        </div>
                        <div class="mt-4 flex justify-center">
                            <h3 class="text-3xl text-gray-700">Accessoire</h3>
                        </div>
                    <!-- </RouterLink> -->
                </article>
              </div>
          </div>
        <!-- <div class="bg-red-light"> -->
          <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 text-center">Liste des associations</h2>
              <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <article v-for="shop in shops" :key="shop.id" class="group relative">
                    <RouterLink :to="`/assos/${shop.id}?id=${shop.id}`">
                        <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src="https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2021-05/28/MOVIES.jpg?v=20220426205714">
                        </div>
                        <div class="mt-4 flex justify-center">
                                <h3 class="text-3xl text-gray-700">{{ shop.name }}</h3>
                                
                        </div>
                    </RouterLink>
                </article>
              </div>
          </div>
        <!-- </div> -->

        <a>
            <img sr="/src/assets/btnScroll.png">
        </a>
    </div>    
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      shops: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:5005/api/shops/findall`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.shops = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>