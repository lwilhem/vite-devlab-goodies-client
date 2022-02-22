<template>
    <section class="h-auto px-28 flex flex-col pb-6">
            <div class=" px-10 inline-flex">
                <div class="">
                    <img src="../assets/img_02.png" alt="" class="h-96">
                </div>
                <div class="flex items-center">
                    <h1 class="text-5xl -tracking-tighter font-semibold	pl-40">LA BOUTIQUE !</h1>
                </div>
            </div>
            <div class="inline-flex justify-end gap-10">
                <p class="">Filtrer par :</p>
                <button class="inline-flex items-center">
                    Taille
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="inline-flex items-center">
                    Caractéristique
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button class="inline-flex items-center">
                    Prix
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
    </section>
    <section class="bg-purple-extra-light pb-6">
        <div class="pl-28 inline-flex items-center w-full py-6">
            <h3 class="color text-white text-3xl">TRENDING</h3>
            <span class="w-full bg-white h-1 ml-2"></span>
        </div>
        <div class="inline-flex justify-center gap-10 w-full">
            <ul class="flex flex-col items-center justify-center">
                <h4 class="absolute z-50">Noms des products</h4>
                <img class="relative w-full h-full z-40" src="../assets/product.png" alt="">
            </ul>
            <ul class="flex flex-col items-center justify-center">
                <h4 class="absolute z-50">Noms des products</h4>
                <img class="relative w-full h-full z-40" src="../assets/product.png" alt="">
            </ul>
            <ul class="flex flex-col items-center justify-center">
                <h4 class="absolute z-50">Noms des products</h4>
                <img class="relative w-full h-full z-40" src="../assets/product.png" alt="">
            </ul>
        </div>
    </section>



</template>