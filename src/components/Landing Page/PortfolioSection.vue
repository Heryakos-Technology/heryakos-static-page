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
const transitionName = ref('slide-down');

const goToPreviousProject = () => {
  transitionName.value = 'slide-up';
  currentProjectIndex.value = (currentProjectIndex.value - 1 + projects.value.length) % projects.value.length;
};

const goToNextProject = () => {
  transitionName.value = 'slide-down';
  currentProjectIndex.value = (currentProjectIndex.value + 1) % projects.value.length;
};

const goToSpecificProject = (index) => {
  transitionName.value = index - 1 > currentProjectIndex.value ? 'slide-down' : 'slide-up';
  currentProjectIndex.value = index - 1;
};
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
    <div class="lg:flex mt-16 justify-center  lg:gap-x-8 xl:gap-x-16 ">
      <div class=" hidden lg:flex flex-col gap-y-4     ">
        <div @click="goToSpecificProject(index + 1)" v-for="(project, index) in projects" :key="index"
          class="space-y-1 hover:bg-btnColor/90  bg-btnColor cursor-pointer text-white py-2 px-5 rounded-xl w-[350px] h-[105px] xl:[370px]"
          :class="{ 'font-bold text-2xl  drop-shadow-flying scale-105': index === currentProjectIndex }">
          <h1 class="text-xl cursor-pointer  ">
            {{
              project?.name }}</h1>
          <RouterLink :to="{ name: 'PortfolioPage' }" class="flex gap-x-4 items-center mr-20  w-fit ">
            <p class="font-semibold text-lg ">LEARN MORE</p>
            <img class="size-4" :src="arrowUpRight" alt="" srcset="">
          </RouterLink>
        </div>
      </div>

      <transition :name="transitionName" mode="out-in">
        <div :key="currentProjectIndex"
          class="rounded-2xl mt-6 w-full px-1 bg-cover h-[270px] xs:h-[280px] xs:max-w-[380px] mx-auto lg:h-[390px] xl:max-w-[760px] xl:h-[400px] 2xl:h-[500px] 2xl:max-w-[800px]"
          :style="{ backgroundImage: `url(${projects[currentProjectIndex]?.image})` }">
        </div>
      </transition>

      <div class="lg:hidden">
        <div class="mt-5 space-y-4 border-b-2 border-btnColor pb-4">
          <transition name="slide" mode="out-in">
            <h1 :key="currentProjectIndex" class="text-4xl font-light md:text-5xl">{{ projects[currentProjectIndex].name
            }}</h1>
          </transition>
          <div class="flex gap-x-4 items-center">
            <p class="font-semibold text-lg md:text-xl  ">LEARN MORE</p>
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
    <RouterLink :to="{ name: 'PortfolioPage' }" class="mt-8 flex flex-col   md:items-start   2xl:mt-32 ">
      <div
        class="bg-gradient-to-r from-[#9B4AF7]   mx-auto to-[#8523F5] text-white px-10 py-3.5 rounded-4xl font-medium">
        More Projects</div>
    </RouterLink>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

/* Slide Down Transition (new image enters from below, old exits upward) */
.slide-down-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.slide-down-leave-from,
.slide-down-enter-to,
.slide-up-leave-from,
.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Up Transition (new image enters from above, old exits downward) */
.slide-up-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Transition Timing */
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
</style>