<script setup>
import AboutUSideImage from "/images/About_Us_Side_Image.png";
</script>

<template>
  <div class="mx-auto justify-between gap-x-2 pt-8 md:flex md:px-4">
    <div class="md:space-y-10 lg:space-y-12 2xl:space-y-16">
      <h1 class="text-btnColor xs:px-6 font-bold md:px-0 lg:text-xl">
        Who We Are
      </h1>
      <div
        class="xs:max-w-[330px] mx-auto mt-8 max-w-[300px] text-center sm:max-w-[370px] md:space-y-10 md:text-left lg:max-w-[490px] lg:space-y-18 xl:max-w-[700px]"
      >
        <h1
          class="xs:text-3xl px-6 text-2xl font-bold sm:text-4xl md:px-0 xl:text-5xl"
        >
          We are Digital Experts, Focused on Solving Human Problems for Today's
          World
        </h1>
        <p class="mt-4 text-xs xl:text-sm">
          At the core of our innovative culture, we enthusiastically engage with
          every industry, device, goal, and technological platform. Our passion
          lies in enhancing the human experience with technology by crafting
          impactful connections between businesses and their clients, defining
          our identity
        </p>
      </div>
      <RouterLink
        :to="{ name: 'AboutUs' }"
        class="mt-8 flex flex-col md:items-start 2xl:mt-24"
      >
        <div class="space-y-1 text-center">
          <div
            class="rounded-4xl bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] px-10 py-3.5 font-medium text-white"
          >
            More about us
          </div>
        </div>
      </RouterLink>
    </div>
    <div class="hidden max-w-[450px] md:block xl:max-w-full">
      <img :src="AboutUSideImage" alt="About Us ide Image" class="w-full" />
    </div>
  </div>
</template>
