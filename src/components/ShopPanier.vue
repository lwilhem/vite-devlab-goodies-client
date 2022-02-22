<template>

<section class="px-28">
    <div class="">
    <div class="px-28 inline-flex items-center w-full py-6">
        <h3 class="color text-black text-3xl">TRENDING</h3>
        <span class="w-full bg-black h-1 mx-10"></span>
    </div>
    <div class="w-full h-auto bg-purple-extra-light inline-flex">
        <img src="../assets/product.png" alt="">
        <div class="flex flex-col">
            <ul>
                <h4>Nom de l'article</h4>
            </ul>
            <ul>
                <li>99.99€</li>
                <form action="">
                    <label>Quantité: </label>
                    <input type="number"  id="quantity" class=" w-24 text-black" min="1" value="1" max="100"><br>
                    <label>Taille: </label>
                    <select id="size" class="w-24">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">Xl</option>
                    </select>
                </form>
            </ul>       
        </div>
    </div>
</div>
</section>

</template>