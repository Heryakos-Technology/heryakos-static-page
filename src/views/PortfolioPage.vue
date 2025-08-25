<script setup>
import { onMounted } from "vue";

import ProjectCard from "@/components/PortfolioPage/ProjectCard.vue";
import our_works_illustration from "/images/our_works_illustration.png";
import { ref } from "vue";
import ContactUsCard from "@/components/PortfolioPage/ContactUsCard.vue";
import { projectsData } from "@/assets/projectJson";

onMounted(() => {
  window.scrollTo(0, 0);
});

const projects = ref(projectsData);
</script>

<template>
  <div class="px-5 py-16 pb-16 md:pt-32 lg:px-10 xl:px-15 2xl:px-24">
    <div
      class="flex flex-col items-center justify-center gap-y-8 md:flex-row md:justify-evenly"
    >
      <div class="mt-8 flex flex-col gap-y-4 md:items-start md:gap-y-8">
        <h1
          class="text-center text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span class="text-btnColor">Our</span> Works
        </h1>
        <p
          class="max-w-[270px] text-center text-sm md:text-left lg:max-w-[370px] lg:text-base 2xl:max-w-[420px]"
        >
          Delivering innovative solutions and exceptional results. Browse our
          featured projects and client success stories.
        </p>
        <div class="text-center">
          <button
            class="rounded-4xl bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] px-12 py-2.5 font-medium text-white"
          >
            Contact US
          </button>
        </div>
      </div>

      <div
        class="xs:max-w-[350px] ml-8 max-w-[300px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[500px]"
      >
        <img
          :src="our_works_illustration"
          alt="our_works_illustration"
          class="w-full"
        />
      </div>
    </div>
    <div
      class="mt-16 grid place-items-center gap-x-2 gap-y-8 pb-16 md:grid-cols-2 md:pb-32 lg:grid-cols-3"
    >
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :id="project.id"
        :title="project.title"
        :description="project.description"
        :imageUrl="project.smallImage"
      />
    </div>
    <div class="">
      <ContactUsCard />
    </div>
  </div>
</template>
