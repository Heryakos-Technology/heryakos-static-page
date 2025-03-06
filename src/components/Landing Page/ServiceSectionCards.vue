<script setup>
import Software_Solutions_Icon from "/images/Software_Solutions_Icon.png"

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-white rounded-4xl py-6 px-3 flex flex-col items-start  gap-y-4 min-h-[320px]  drop-shadow-coloredDropShadow max-w-[180px] lg:max-w-[250px] lg:min-h-[350px] ">
    <div class="rounded-full border-2 border-[#E6E6E6] flex items-center p-5 justify-center">
      <img :src="imageSrc" alt="" class="w-full">
    </div>
    <h1 class="font-bold h-16 lg:text-lg lg:h-20">{{ title }}</h1>
    <p class="text-xs">{{ description }}</p>
  </div>
</template>