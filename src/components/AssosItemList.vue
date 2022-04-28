<script setup>
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
</script>

<template>
    <section class="tablet:w-full tablet:h-auto tablet:p-8 tablet:flex tablet:flex-wrap items-center justify-center flex flex-wrap tablet:bg-[url('src/assets/background_assos.svg')] bg-center bg-no-repeat" style="background-size:cover">
      <div class="">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Liste des produits</h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">



            <article v-for="product in productshop" :key="product.id" class="group relative">
              <RouterLink :to="`/bigshop/${product.id}?id=${product.id}`">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                              <img src="https://static.pullandbear.net/2/static2/itxwebstandard/images/home/2021-05/28/MOVIES.jpg?v=20220426205714">

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
        <!-- <section class="w-full my-2 flex items-center justify-center">
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
        </section> -->
    </section>
</template>

<script>

import axios from 'axios';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id')
// const res = await axios.get(`http://localhost:5005/api/shops/find/id/${product}`);


export default {
  data() {
    return {
      shops: [] ,
      item: [],
      productshop: [], 
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:5005/api/shops/find/id/${product}`).then(response => {
      // JSON responses are automatically parsed.
      this.shops = response.data.id
    })
    axios.get(`http://localhost:5005/api/products/findall`).then(response => {
    this.item = response.data
    const object = this.item

    for (var i = 0; i < object.length; i++) {
      if (object[i].shopId == product){
        this.productshop.push(object[i])

      }else{
        console.log("nop")
      }
    }
    })
    
    .catch(e => {
      this.errors.push(e)
    })
  },
}

</script>