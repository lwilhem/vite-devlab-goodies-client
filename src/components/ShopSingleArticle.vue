<template>

<div class="flex justify-evenly ">
    <img class="max-w-xs" src="https://www.celio.com/medias/sys_master/productMedias/productMediasImport/hd6/hf2/9988019159070/pull-col-rond-gris-chine-1089834-1-product.jpg">
    <div class="flex flex-col text-center  items-center">

        <h1 class="text-7xl">Sweat à capuche</h1>    
        <div class="flex mt-8">
                <select class="flex border-none ml-8" value="Taille" onchange="">
                    <option class="border-non" value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>

                <select class="flex ml-8" value="color" onchange="">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yewllow</option>
                    <option value="black">Black</option>
                </select>
            </div>
            <a class="  mt-8 flex p-3 bg-red-light rounded-full py-3 px-6 shadow-xl border-white items-center">Ajouter au panier<img class="w-2.5 ml-8" src ="./../assets/arrow-right-solid.svg"></a>
            <a class=" mt-8 flex p-3 bg-red-light rounded-full py-3 px-6 shadow-xl border-white items-center">Acheter cet article<img class="w-2.5 ml-8" src ="./../assets/arrow-right-solid.svg"></a>
         
    </div>
</div>



</template>