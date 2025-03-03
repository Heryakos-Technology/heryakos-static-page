<template>
   
    <div class="mt-16 lg:-mt-1 z-0 lg:w-full">
        <div>
            <img src="/team_photo1.png" alt="" class="h-68 relative lg:w-full lg:h-8/12 md:w-full" />
        </div>
        <div class="absolute top-28 left-5 lg:left-20 lg:top-56 text-white">
            <h1 class="lg:text-6xl lg:font-bold">FINANCIAL FOCUS <br />& CONSULTING</h1>
            <h2 class="mt-3 lg:mt-8 lg:text-3xl lg:font-semibold">
                With over years of experience <br class="lg:hidden" />
                business to fine <br class="" />
                comprehensive solutions
            </h2>
            <div class="lg:mt-12 mt-6">
                <a href="#" class="bg-white text-purple-800 px-5 py-2 lg:px-10 lg:py-5 mt-4 rounded-lg lg:rounded-2xl lg:text-xl">LEARN MORE</a>
                <a href="#" class="button text-white px-5 py-2 lg:px-10 lg:py-5 mt-4 rounded-lg lg:rounded-2xl ml-4 lg:text-xl lg:ml-10">CONTACT US</a>
            </div>
        </div>
    </div>
    <div class="lg:hidden mt-20  md:ml-26 md:mr-28 ">

        <img src="/teamlarge2.jpg" alt="" class=" rounded-md h-84 hidden m lg:hidden relative" />
        <div class="absolute middleContainer lg:w-64 w-94 ml-4  top-100 rounded-md shadow-sm md:w-3/4">
            <div class="pl-4 pt-6 pb-5 lg:mt-5 lg:ml-10 md:w-3/4">
            <h1 class="font-semibold lg:text-3xl md:text-center">Welcome to Financial Company</h1>
            <h2 class="mt-5 text-sm w-80 lg:w-2/3 lg:text-lg md:w-100 md:ml-10 ">
                We are a passionate team dedicated to providing high-quality content and resources that inspire and inform our audience. With a focus on innovation and creativity, we strive to deliver engaging experiences that resonate with our visitors. Our mission is to connect, educate, and empower individuals through our carefully curated articles and insights.
            </h2>
            <div class="mt-6 lg:mt-5 md:ml-9">
                <a href="#" class="button text-white px-8 py-2 rounded-xl">KNOW MORE</a>
            </div>
        </div>
        </div>
    </div>
    <div class="hidden lg:block lg:visible lg:w-3/4 ">
        <div class="middleContainer mt-20 rounded-md md:ml-28  shadow-sm flex lg:justify-between ml-3 mr-3 lg:ml-44 lg:mr-32 md:w-full">
        <div class="pl-4 pt-6 pb-5 lg:mt-5 lg:ml-10  md:w-full">
            <h1 class="font-semibold lg:text-3xl ">Welcome to Financial Company</h1>
            <h2 class="mt-5 text-sm w-60 lg:w-4/5 lg:text-lg">
                We are a passionate team dedicated to providing high-quality content and resources that inspire and inform our audience. With a focus on innovation and creativity, we strive to deliver engaging experiences that resonate with our visitors. Our mission is to connect, educate, and empower individuals through our carefully curated articles and insights.
            </h2>
            <div class="mt-6 lg:mt-5">
                <a href="#" class="button text-white px-8 py-2 rounded-xl">KNOW MORE</a>
            </div>
        </div>
        <div class=" lg:w-full"> 
            <img src="/teamsmall2.png" alt="" class="h-full rounded-md lg:hidden" />
            <img src="/teamlarge2.jpg" alt="" class="h-full w-full rounded-md hidden lg:block lg:visible lg:h-full lg:w-full lg:rounded-xl" />
        </div>
    </div>
    </div>
   
    <div class="lastContainer mt-110 rounded-sm shadow-sm pb-5 ml-4 mr-3 lg:ml-44 lg:mr-32 lg:pl-10 lg:pr-10 md:ml-28 md:mr-28 lg:mt-20 lg:mb-12 md:mb-10 lg:w-3/4 w-94 mb-10 md:w-3/4 md:pl-6">
        <h1 class="text-center font-semibold pt-5 lg:text-3xl">Our Teams</h1>
        <div class="flex ml-6 mr-6 mt-6 lg:justify-between lg:ml-10 lg:mr-10 md:ml-9 md:mr-9">
            <TeamCard 
                name="Victor Vivas" 
                role="UI/UX Designer" 
                imgSrc="/Victor.jpg" 
                class="lg:mr-20 mr-4"
            />
            <TeamCard 
                name="Pedro Sanin" 
                role="Manager Partner" 
                imgSrc="/PedroMale.jpg" 
            />
        </div>
        <div class="flex ml-6 mr-6 mt-6 lg:justify-between lg:ml-10 lg:mr-10 md:ml-9 md:mr-9">
            <TeamCard 
                name="Maria José Jimenez" 
                role="Architect" 
                imgSrc="/MariaMale.jpg" 
                class="lg:mr-20 mr-4"
            />
            <TeamCard 
                name="Maria José Jimenez" 
                role="Manager Partner" 
                imgSrc="/MariaFemale.jpg" 
            />
        </div>
        <div class="flex ml-6 mr-6 mt-6 lg:justify-between lg:ml-10 lg:mr-10 md:ml-9 md:mr-9">
            <TeamCard 
                name="Maria José Jimenez" 
                role="UI/UX Designer" 
                imgSrc="/MariaFemaleWithTablate.jpg" 
                class= "lg:mr-20 mr-4"
            />
            <TeamCard 
                name="Pedro Sanin" 
                role="Manager Partner" 
                imgSrc="/PedroFemale.jpg" 
            />
        </div>
    </div>
  
</template>

<script>
import { defineComponent } from 'vue';
import TeamCard from '@/components/AboutUsComponents/TeamCard.vue'; // Assuming TeamCard is a separate component

export default defineComponent({
    components: {
        TeamCard
    }
});
</script>

<style>
.middleContainer {
    background-color: #f0eafb;
}
.lastContainer {
    background-color: #E5DAFB;
}
.photoContainer {
    background-color: #debcf7d3;
}
.span {
    color: #5200e0;
}
.hoverContainer {
    background-color: #00C7F9;
}
.button {
    background: linear-gradient(to right, #9B4AF7 0%, #8523F5 100%);
}
</style>