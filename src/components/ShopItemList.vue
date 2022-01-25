<script>
import { HashtagIcon, AnnotationIcon, BellIcon } from '@heroicons/vue/solid'
import { ArrowCircleRightIcon } from '@heroicons/vue/outline'
//import { httpFetchRequest } from './utils/toolbox'

const StaticItemDisplay = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
    {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
]

export default {
    components: {
        HashtagIcon,
        AnnotationIcon,
        BellIcon,
        ArrowCircleRightIcon
    },
    setup(){
        return {
            StaticItemDisplay,
        }
    },
}
</script>

<template>
    <section class="w-full h-screen flex flex-col items-center justify-center"> <!-- SHOP WRAPPER -->
        <div class="w-4/5 h-96 bg-blue-200 flex flex-col justify-evenly items-start p-8"> <!-- ASSOS PRESENTATIONS WRAPPER -->
            <h2 class="w-full text-center text-6xl uppercase tracking-widest text-red-500">Nom de L'assos</h2>
            <div class="w-2/4"> <!-- PRESENTATION TEXT WRAPPER - ALL THE CONTENT IS GOING TO BE DINAMICALLY GENERATED THROUGH API CALLS-->
                <p class="text-xm"> 
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna
                    <br><br>
                    liquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                    est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
        <div class="w-full flex items-center justify-center h-10 my-4">
            <a href="#"> <!-- ICON & SOCIAL MEDIA LINK WRAPPER-->
                <HashtagIcon class="w-8 h-8 mx-12 text-red-500"></HashtagIcon>
            </a>
            <a href="#">
                <AnnotationIcon class="w-8 h-8 mx-12 text-red-500"></AnnotationIcon>
            </a>
            <a href="#">
                <BellIcon class="w-8 h-8 mx-12 text-red-500"></BellIcon>
            </a>
        </div>
    </section>

    <section class="w-full bg-indigo-600 h-auto p-8 flex flex-wrap items-center justify-center">
        <article v-for="item in StaticItemDisplay" :key="item.id" class="w-1/5 bg-slate-50 p-2 flex flex-col items-center justify-center m-4"> <!-- ITEM DISPLAY WRAPPER -->
            <div>   <!-- ITEM IMAGE DISPLAY -->
                <img :src="item.imageSrc" :alt="item.imageAlt">
            </div>
            <div>
                <div>
                    <h3>
                        <a :href="item.href">
                            <span>
                                {{ item.name }}
                            </span>
                            <ArrowCircleRightIcon class="w-4 h-4"></ArrowCircleRightIcon>
                        </a>
                    </h3>
                    <p>{{ item.color }}</p>
                </div>
                <p>{{ item.price }}</p>
            </div>
        </article>
    </section>
</template>