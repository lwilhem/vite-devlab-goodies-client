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
    data(){
        return {

        }
    },
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