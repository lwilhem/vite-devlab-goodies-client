<script setup>
import ShopNav from "../components/Navbar.vue";
import carrouselVue from "../components/carrousel.vue";

import {ChevronRightIcon} from '@heroicons/vue/solid';

</script>
<template>
    <section id ="shoppage" class="h-screen">
            
        <img src="" v-show="show">
        <div class="grid grid-cols-1 px-4 tablet:grid-cols-2 tablet:px-28">
            <ul class="tablet:hidden flex flex-col items-center">
                <h1 class="text-4xl">Sweat à capuche</h1>
                <div class="inline-flex">
                    <form action="">
                        <label for="quantity" class="inline-block text-2xl">Taille</label>
                        <select id="size" class="w-12 text-2xl" v-model="size">
                            <option></option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">Xl</option>
                    </select>
                    </form>
                    <form action="" class="ml-4">
                        <label for="quantity" class="inline-block text-2xl">Couleur</label>
                        <select id="size" class="w-auto text-2xl" v-model="color">
                            <option></option>
                            <option value="blue">Blue</option>
                            <option value="s">Red</option>
                        </select>
                    </form>
                </div>
            </ul>
            <ul>
                <carrouselVue></carrouselVue>
            </ul>
            <ul class="flex flex-col items-center justify-between pt-8 pb-16">
                <h1 class="text-4xl hidden tablet:flex">Sweat à capuche</h1>
                <div class="hidden tablet:inline-flex">
                    <form action="">
                        <label for="quantity" class="inline-block text-2xl">Taille</label>
                        <select id="size" class="w-12 text-2xl" v-model="size">
                            <option></option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">Xl</option>
                    </select>
                    </form>
                    <form action="" class="ml-4">
                        <label for="quantity" class="inline-block text-2xl">Couleur</label>
                        <select id="size" class="w-auto text-2xl" v-model="color">
                            <option></option>
                            <option value="blue">Blue</option>
                            <option value="red">Red</option>
                        </select>
                    </form>
                </div>
                <div class="flex flex-col gap-8">
                    <button class="border-2 bg-red-light rounded-3xl text-center w-60 h-12 flex flex-row items-center justify-center">
                    <p class="flex">Ajouter au panier <ChevronRightIcon class="h-6 w-6"></ChevronRightIcon></p> 
                </button>
                <RouterLink to="/bigshop/panier">
                    <button class="border-2 bg-red-light rounded-3xl text-center w-60 h-12 flex flex-row items-center justify-center ">
                        <p class="flex">Acheter cet article <ChevronRightIcon class="h-6 w-6"></ChevronRightIcon></p> 
                    </button>
                </RouterLink>
                
                </div>
            </ul>
        </div>
        <div class="grid grid-cols-1 px-4 tablet:grid-cols-2 tablet:grid-rows-2 tablet:px-28">
            <h2 class="mt-6 mb-12 text-4xl text-center">À propos de cet article</h2>
            <p class="text-base row-start-2 col-span-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            <br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
        </div>
        <img src="../assets/article.svg" class="w-full mt-20">
    </section>
</template>

<script>
export default{
    data(){
        return{
            size: '',
            color: '',
        }
    }
}
</script>