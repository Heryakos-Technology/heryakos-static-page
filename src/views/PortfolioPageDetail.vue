<script setup>
import { useRoute } from "vue-router";
import { projectsData } from "@/assets/projectJson";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

const route = useRoute();
const projectId = Number(route.params.id);
const project = projectsData.find((p) => p.id === projectId);
</script>

<template>
  <div
    class="mx-auto overflow-x-hidden px-4 pt-24 pb-16 sm:px-10 md:pt-48 lg:max-w-[1080px] xl:max-w-[1200px]"
  >
    <div class="md:flex">
      <div
        class="max-w-[380px] space-y-3 md:mt-8 md:max-w-[400px] lg:max-w-[490px]"
      >
        <p
          v-if="project?.github_link == null"
          class="text-btnColor w-fit border-2 p-1 text-lg font-bold"
        >
          NDA Protected
        </p>
        <h1 class="text-2xl font-semibold md:text-4xl lg:text-5xl">
          {{ project?.title }}
        </h1>
        <p class="">{{ project?.category }}</p>
      </div>

      <div
        class="mx-auto h-[250px] w-full max-w-[330px] bg-cover bg-center lg:h-[300px] lg:max-w-[400px] xl:h-[320px] xl:max-w-[470px] 2xl:h-[350px] 2xl:max-w-[500px]"
        :style="{ backgroundImage: `url(${project?.imageUrl})` }"
      ></div>
    </div>
    <div class="mt-8 space-y-8 sm:max-w-[640px] md:max-w-full xl:mt-14">
      <h1 class="text-btnColor font-bold">Overview</h1>
      <div class="justify-between space-y-8 gap-x-8 md:flex">
        <div
          class="space-y-4 text-sm md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
        >
          <p class="">
            {{ project?.description }}
          </p>
          <p class="">
            {{ project?.overview }}
          </p>
        </div>
        <div class="max-w-[342px] space-y-4 text-sm lg:mr-8">
          <div class="flex gap-x-3">
            <p class="text-btnColor font-semibold">Timeline</p>
            {{ project?.timeline }}
          </div>
          <div class="flex gap-x-4">
            <p class="text-btnColor font-semibold">Process</p>
            {{ project?.process }}
          </div>
          <div class="flex gap-x-3">
            <p class="text-btnColor font-semibold">Services</p>
            {{ project?.services }}
          </div>
          <div
            v-if="
              project?.github_link ||
              project?.other_link ||
              project?.appStore ||
              project?.playStore
            "
            class="flex gap-x-5 font-semibold underline hover:font-bold"
          >
            <p class="text-btnColor mr-4 font-semibold">Links</p>
            <a
              target="_blank"
              v-if="project?.github_link"
              :href="project?.github_link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-btnColor size-6 fill-black"
                viewBox="0 0 256 256"
              >
                <path
                  d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
                ></path></svg
            ></a>

            <a
              v-if="project?.appStore"
              target="_blank"
              rel="noopener noreferrer"
              :href="project?.appStore"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-btnColor size-6 fill-black"
                viewBox="0 0 256 256"
              >
                <path
                  d="M64.34,196.07l-9.45,16a8,8,0,1,1-13.78-8.14l9.46-16a8,8,0,1,1,13.77,8.14ZM232,152H184.2l-30.73-52a8,8,0,1,0-13.77,8.14l61.41,103.93a8,8,0,0,0,13.78-8.14L193.66,168H232a8,8,0,0,0,0-16Zm-89.53,0H90.38L158.89,36.07a8,8,0,0,0-13.78-8.14L128,56.89l-17.11-29a8,8,0,1,0-13.78,8.14l21.6,36.55L71.8,152H24a8,8,0,0,0,0,16H142.47a8,8,0,1,0,0-16Z"
                ></path>
              </svg>
            </a>
            <a
              v-if="project?.playStore"
              target="_blank"
              rel="noopener noreferrer"
              :href="project?.playStore"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-btnColor size-6 fill-black"
                viewBox="0 0 256 256"
              >
                <path
                  d="M239.82,114.19,72,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,48,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.75,15.75,0,0,0,0-27.62ZM64,212.67V43.33L148.69,128Zm96-73.36,18.92,18.92-88.5,50.66ZM90.4,47.1l88.53,50.67L160,116.69ZM193.31,150l-22-22,22-22,38.43,22Z"
                ></path>
              </svg>
            </a>

            <a
              target="_blank"
              v-if="project?.other_link"
              :href="project?.other_link"
              class="hover:text-btnColor underline"
              >Other Link</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="project?.videoUrl"
      class="mx-auto my-8 w-full max-w-[425px] px-2 sm:max-w-[525px] md:my-12 md:max-w-[640px] lg:max-w-[780px] xl:max-w-[900px]"
    >
      <iframe
        class="aspect-video w-full"
        :src="project?.videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="bg-thirdColor relative mx-auto mt-8 max-w-[375px] space-y-4 rounded-3xl px-2 py-8 text-center sm:max-w-[420px] sm:py-10 md:max-w-[450px] md:px-3 md:py-12 lg:max-w-[720px] lg:px-16 lg:py-14 xl:my-16"
    >
      <p class="text-sm">"{{ project?.testimonial.quote }}"</p>
      <div class="text-sm">
        <p class="font-bold">{{ project?.testimonial.author }},</p>
        <p class="">{{ project?.testimonial.position }}</p>
      </div>

      <div
        class="xs:left-[40%] absolute bottom-[-10%] left-[35%] size-15 rounded-full bg-cover bg-center sm:left-[45%]"
        :style="{ backgroundImage: `url(${project?.testimonial.avatar})` }"
      ></div>
    </div>
  </div>
</template>
