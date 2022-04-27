<script setup>
import { HashtagIcon, AnnotationIcon, BellIcon } from '@heroicons/vue/solid'
import { RouterLink } from 'vue-router';
import AssosItemList from '../components/AssosItemList.vue';
import ShopFilter from '../components/ShopFilter.vue';
</script>

<template>

    <section class="aspect-video flex flex-col items-center justify-center"> <!-- SHOP WRAPPER -->
        <div class="bg-blue tablet:bg-blue tablet:w-4/5 tablet:h-96 tablet:bg-blue-200 tablet:flex tablet:flex-col tablet:justify-evenly tablet:items-start tablet:p-8 tablet:my-8"> <!-- ASSOS PRESENTATIONS WRAPPER -->
            <h2 class="tablet:w-full tablet:text-center text-red-light tablet:text-6xl text-4xl tablet:uppercase tablet:tracking-widest tablet:text-red-500 pt-6 text-center ">Nom de L'assos</h2>
            <div class="tablet:w-2/4 m-7"> <!-- PRESENTATION TEXT WRAPPER - ALL THE CONTENT IS GOING TO BE DINAMICALLY GENERATED THROUGH API CALLS-->
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
                <HashtagIcon class="w-8 h-8 tablet:mx-12 mx-8 text-red-500"></HashtagIcon>
            </a>
            <a href="#">
                <AnnotationIcon class="w-8 h-8 tablet:mx-12 mx-8 text-red-500"></AnnotationIcon>
            </a>
            <a href="#">
                <BellIcon class="w-8 h-8 tablet:mx-12 mx-8 text-red-500"></BellIcon>
            </a>
        </div>
    </section>
    <AssosItemList></AssosItemList>
    <div class="w-full flex items-center justify-center mb-6">
        <RouterLink to="/assos">
            <div class="w-fit bg-indigo-700 px-8 py-4 rounded-md text-center">
                <span class="text-black uppercase">back to Assos list</span>
            </div>
        </RouterLink>
    </div>
</template>

<script>

</script>