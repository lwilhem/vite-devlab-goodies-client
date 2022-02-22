<script setup>
import { HashtagIcon, AnnotationIcon, BellIcon } from '@heroicons/vue/solid'
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="aspect-video flex flex-col items-center justify-center"> <!-- SHOP WRAPPER -->
        <div class="w-4/5 h-96 bg-blue-200 flex flex-col justify-evenly items-start p-8 my-8"> <!-- ASSOS PRESENTATIONS WRAPPER -->
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
    <RouterLink to="/assos">
        <span>back to list</span>
    </RouterLink>
</template>