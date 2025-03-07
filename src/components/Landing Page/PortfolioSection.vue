<script setup>
import { ref } from "vue";
import AIVision from "/images/AIVision ¨C Saas Hero Section Figma Template.jpeg"
import CSVECommerce from "/images/CSV E-Commerce Application.jpeg"
import HospitalManagement from "/images/Hospital Management System.jpeg"

import TrustBroker from "/images/Trust-Broker Website .png"
import arrowUpRight from "@/components/icons/arrow-up-right.png"

const projects = ref([
  {
    name: 'Hospital Management System (HMS)',
    image: HospitalManagement,
    description: 'Description for SmartTask Pro',
  },
  {
    name: 'CSV E-Commerce',
    image: CSVECommerce, // Replace with your actual image
    description: 'Description for Project 2',
  },
  {
    name: 'Trust-Broker –  Brokerage Platform for  Deals ',
    image: TrustBroker, // Replace with your actual image
    description: 'Description for Project 3',
  },
  {
    name: ' AIVision –  SaaS for Creative Automation',
    image: AIVision, // Replace with your actual image
    description: 'Description for Project 3',
  },

]);

const currentProjectIndex = ref(0);

const goToPreviousProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value - 1 + projects.value.length) % projects.value.length;
};

const goToNextProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value + 1) % projects.value.length;
};
const goToSpecificProject = (index) => {
  console.log(index);
  currentProjectIndex.value = index - 1;
};
console.log(projects.value);

</script>

<template>
  <div class="mt-20 max-w-[650px] mx-auto lg:max-w-full xl:py-16 ">
    <div class="text-center">
      <h1 class="font-bold text-3xl mb-4 md:text-4xl xl:text-5xl">Featured <span class="text-btnColor">Work</span></h1>
      <p class="max-w-[350px] mx-auto md:max-w-[450px] text-balance  xl:text-pretty">Our team of
        creative
        professionals
        work in a
        collaborative
        fashion to craft
        tangible
        solutions.</p>
    </div>
    <div class="lg:flex mt-16 justify-between lg:items-center">
      <div class="lg:flex flex-col gap-y-4  hidden  2xl:gap-x-4 ">
        <div v-for="(project, index) in projects" :key="index" class="space-y-1"
          :class="{ 'font-bold text-2xl ': index === currentProjectIndex }">
          <h1 @click="goToSpecificProject(index + 1)" class="text-xl cursor-pointer min-[1200px]:text-2xl 2xl:text-3xl">
            {{
              project?.name }}</h1>
          <div class="flex gap-x-4 items-center mr-20  border-b-2 border-black pb-3">
            <p class="font-semibold text-lg ">LEARN MORE</p>
            <img class="size-4" :src="arrowUpRight" alt="" srcset="">
          </div>
        </div>
      </div>

      <div
        class="rounded-2xl mt-6  w-full aspect-video max-h-[350px] lg:max-w-[60%]   min-[1200px]:max-h-[380px] min-[1200px]:max-w-full xl:max-h-[450px] 2xl:max-[500px] 2xl:w-[700px] bg-cover "
        :style="{ backgroundImage: `url(${projects[currentProjectIndex]?.image})` }">

      </div>
      <div class="lg:hidden">
        <div class="mt-5 space-y-4 border-b-2 border-black pb-4">
          <h1 class="text-4xl font-light md:text-5xl">{{ projects[currentProjectIndex].name }}</h1>
          <div class="flex gap-x-4 items-center">
            <p class="font-semibold text-lg md:text-xl min-[1200px]: ">LEARN MORE</p>
            <img class="size-6" :src="arrowUpRight" alt="" srcset="">
          </div>
        </div>
        <div class="mt-4 xs:mt-8 sm:mt-10 ">
          <div class="flex gap-x-2  xs:gap-x-4 justify-center items-center">
            <svg @click="goToPreviousProject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-7 fill-btnColor">
              <path fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                clip-rule="evenodd" />
            </svg>
            <div class="flex gap-x-2  xs:gap-x-4">
              <div @click="goToSpecificProject(index)" v-for="index in projects.length" :key="index"
                class="size-5 border border-black rounded-full cursor-pointer"
                :class="{ 'bg-btnColor': index - 1 === currentProjectIndex }"></div>
            </div>
            <svg @click="goToNextProject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-7 fill-btnColor">
              <path fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clip-rule="evenodd" />
            </svg>

          </div>

        </div>
      </div>
    </div>
    <RouterLink :to="{ name: 'PortfolioPage' }" class="mt-8 flex flex-col   md:items-start   2xl:mt-16 ">
      <div
        class="bg-gradient-to-r from-[#9B4AF7]   mx-auto to-[#8523F5] text-white px-10 py-3.5 rounded-4xl font-medium">
        More Projects</div>
    </RouterLink>
  </div>
</template>