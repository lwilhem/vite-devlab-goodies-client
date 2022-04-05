<script setup>
import { TrashIcon } from '@heroicons/vue/solid';
</script>

<template>

<section class="px-4 tablet:px-28">
    <!-- <div class="px-28 inline-flex items-center w-full py-6">
        <h3 class="color text-black text-3xl">TRENDING</h3>
        <span class="w-full bg-black h-1 mx-10"></span>
    </div> -->
    <div class="w-full h-auto bg-purple-extra-light inline-flex tablet:p-6">
        <img class="w-1/3 h-fit mt-auto mb-auto " src="../assets/product.png" alt="">
        <div class="flex flex-col w-full justify-between gap-3 tablet:pl-16 tablet:pr-10 ">
            <h4 class=" text-base tablet:text-2xl font-bold text-white uppercase text-center">Nom de l'article</h4>
            <p class="text-sm tablet:text-2xl">99.99€</p>
            <form action="">
                <label for="quantity" class="inline-block w-32 text-sm tablet:text-2xl">Quantité: </label>
                
                <input type="number"  id="quantity" class=" w-24 text-black text-sm tablet:text-2xl" min="1" value="1" max="100"><br>
            </form>
            <form action="">
                <label for ="size" class="inline-block w-32 text-sm tablet:text-2xl">Taille: </label>
                <select id="size" class="w-24 text-sm tablet:text-2xl">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">Xl</option>
                </select>
            </form>
            <TrashIcon class="text-white h-6 w-6 tablet:h-8 tablet:w-8 ml-auto cursor-pointer"></TrashIcon>     
        </div>
    </div>
    <div class="">
        <p class="text-base tablet:text-2xl ">Total : 9999€</p>
    </div>
    <div class=" w-fit rounded-3xl bg-red-light	hover:bg-red-pink cursor-pointer ml-auto mr-auto">
        <p class="px-24 py-4 text-2xl font-medium text-white ">Cliquer</p>
    </div>
</section>

</template>