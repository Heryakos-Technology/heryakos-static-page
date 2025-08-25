<script setup>
import { ref } from "vue";
import AIVision from "/images/AIVision ¨C Saas Hero Section Figma Template.jpeg";
import CSVECommerce from "/images/CSV E-Commerce Application.jpeg";
import HospitalManagement from "/images/Hospital Management System.jpeg";

import { projectsData } from "@/assets/projectJson";

import TrustBroker from "/images/Trust-Broker Website .png";
import arrowUpRight from "@/components/icons/arrow-up-right.png";

const projects = ref(projectsData.slice(0, 4));

const currentProjectIndex = ref(0);
const transitionName = ref("slide-down");

const goToPreviousProject = () => {
  transitionName.value = "slide-up";
  currentProjectIndex.value =
    (currentProjectIndex.value - 1 + projects.value.length) %
    projects.value.length;
};

const goToNextProject = () => {
  transitionName.value = "slide-down";
  currentProjectIndex.value =
    (currentProjectIndex.value + 1) % projects.value.length;
};

const goToSpecificProject = (index) => {
  transitionName.value =
    index - 1 > currentProjectIndex.value ? "slide-down" : "slide-up";
  currentProjectIndex.value = index - 1;
};
</script>

<template>
  <div class="mx-auto mt-20 max-w-[650px] lg:max-w-full xl:py-16">
    <div class="text-center">
      <h1 class="mb-4 text-3xl font-bold md:text-4xl xl:text-5xl">
        Featured <span class="text-btnColor">Work</span>
      </h1>
      <p
        class="mx-auto max-w-[350px] text-balance md:max-w-[450px] xl:text-pretty"
      >
        Our team of creative professionals work in a collaborative fashion to
        craft tangible solutions.
      </p>
    </div>
    <div class="mt-16 justify-center lg:flex lg:gap-x-8 xl:gap-x-16">
      <div class="hidden flex-col justify-end gap-y-4 lg:flex">
        <div
          @click="goToSpecificProject(index + 1)"
          v-for="(project, index) in projects"
          :key="index"
          class="hover:bg-btnColor/90 bg-btnColor xl:[370px] group flex h-[105px] w-[350px] cursor-pointer flex-col justify-center space-y-1 rounded-xl px-5 py-2 text-white"
          :class="{
            'drop-shadow-flying scale-105 text-2xl font-bold':
              index === currentProjectIndex,
          }"
        >
          <h1
            class="cursor-pointer text-xl group-hover:font-bold group-hover:text-black"
          >
            {{ project?.title }}
          </h1>
        </div>
      </div>

      <transition :name="transitionName" mode="out-in">
        <div
          :key="currentProjectIndex"
          class="xs:h-[280px] xs:max-w-[380px] group relative mx-auto mt-6 h-[270px] w-full rounded-2xl bg-cover px-1 lg:h-[390px] xl:h-[400px] xl:max-w-[760px] 2xl:h-[500px] 2xl:max-w-[800px]"
          :style="{
            backgroundImage: `url(${projects[currentProjectIndex]?.imageUrl})`,
          }"
        >
          <RouterLink
            :to="{
              name: 'PortfolioPageDetail',
              params: { id: projects[currentProjectIndex]?.id },
            }"
            class="absolute inset-0 flex items-center justify-center"
          >
            <button
              class="bg-btnColor xs:text-base xs:px-4 xs:py-2 xs:rounded-xl xs:w-[80%] xs:max-w-[250px] xs:mx-auto xs:flex xs:justify-center xs:items-center flex items-center justify-center rounded-full px-6 py-2 text-lg font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100"
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            >
              More Details
            </button>
          </RouterLink>
        </div>
      </transition>

      <div class="lg:hidden">
        <div class="border-btnColor mt-5 space-y-4 border-b-2 pb-4">
          <transition name="slide" mode="out-in">
            <h1
              :key="currentProjectIndex"
              class="text-4xl font-light md:text-5xl"
            >
              {{ projects[currentProjectIndex].title }}
            </h1>
          </transition>
          <div class="flex gap-x-4">
            <img class="size-6" :src="arrowUpRight" alt="" srcset="" />
          </div>
        </div>
        <div class="xs:mt-8 mt-4 sm:mt-10">
          <div class="xs:gap-x-4 flex items-center justify-center gap-x-2">
            <svg
              @click="goToPreviousProject"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="fill-btnColor size-7"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="xs:gap-x-4 flex gap-x-2">
              <div
                @click="goToSpecificProject(index)"
                v-for="index in projects.length"
                :key="index"
                class="size-5 cursor-pointer rounded-full border border-black"
                :class="{ 'bg-btnColor': index - 1 === currentProjectIndex }"
              ></div>
            </div>
            <svg
              @click="goToNextProject"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="fill-btnColor size-7"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <RouterLink
      :to="{ name: 'PortfolioPage' }"
      class="mt-8 flex flex-col md:items-start 2xl:mt-32"
    >
      <div
        class="mx-auto rounded-4xl bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] px-10 py-3.5 font-medium text-white"
      >
        More Projects
      </div>
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
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
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
