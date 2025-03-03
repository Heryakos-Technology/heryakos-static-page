<script setup>
import AboutUSideImage from '/images/About_Us_Side_Image.png';
</script>

<template>
  <div class="pt-8 md:flex mx-auto   justify-between  md:px-4 gap-x-2 ">
    <div class="md:space-y-10  lg:space-y-12 2xl:space-y-16">
      <h1 class="font-bold text-btnColor xs:px-6 md:px-0 ">Who We Are</h1>
      <div
        class="text-center mt-8 max-w-[300px] mx-auto xs:max-w-[330px] sm:max-w-[370px] md:text-left  lg:max-w-[490px]  md:space-y-10  lg:space-y-18 xl:max-w-[700px]">
        <h1 class="font-bold px-6 text-2xl  xs:text-3xl sm:text-4xl md:px-0 xl:text-5xl   ">We are Digital Experts,
          Focused on Solving
          Human
          Problems for
          Today's World
        </h1>
        <p class="text-xs mt-4 xl:text-sm ">At the core of our innovative culture, we enthusiastically engage with every
          industry,
          device,
          goal,
          and technological platform. Our passion lies in enhancing the human experience with technology by crafting
          impactful connections between businesses and their clients, defining our identity</p>
      </div>
      <div class="mt-8  flex flex-col  md:items-start   2xl:mt-24 ">
        <div class="space-y-1 text-center">
          <button
            class="bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] text-white px-10 py-3.5 rounded-4xl font-medium">More
            about us</button>
        </div>
      </div>
    </div>
    <div class="hidden md:block max-w-[450px] xl:max-w-full">
      <img :src="AboutUSideImage" alt="About Us ide Image" class="w-full">
    </div>

  </div>
</template>