<script setup>


defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="drop-shadow-xl bg-thirdColor   pb-8   border border-btnColor max-w-[400px] md:h-[520px] lg:max-w-[80%] lg:h-[600px]  ">
    <div class="w-full h-64  bg-cover bg-center  lg:h-[400px] " :style="{ backgroundImage: `url(${imageUrl})` }">
    </div>
    <div class="space-y-4 px-2 mt-4">
      <h1 class="font-semibold text-lg lg:h-6">{{ title }}</h1>
      <p class="text-sm lg:h-15">{{ description }}</p>
      <p class="text-btnColor font-semibold">Learn More</p>
    </div>
  </div>
</template>