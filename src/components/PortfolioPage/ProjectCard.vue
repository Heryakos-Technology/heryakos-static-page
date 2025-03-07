<script setup>
import { ref, onMounted } from 'vue';
// Adjust the import based on your Motion library installation
import { inView, animate } from 'motion'; // Use 'motion' or '@motionone/vue' as per your project

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

// Create a ref to target the specific card element
const cardRef = ref(null);

onMounted(() => {
  if (cardRef.value) {
    inView(
      cardRef.value, // Target the specific DOM element
      (element) => {
        animate(
          element,
          { opacity: [0, 1], x: [-100, 0] }, // Explicitly use array for from-to
          {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }
        );
      },
      {
        amount: 0.5,
        once: true
      }
    );
  }
});
</script>

<template>
  <div ref="cardRef"
    class="project-card drop-shadow-xl bg-thirdColor pb-8 border border-btnColor max-w-[400px] md:h-[520px] lg:max-w-[80%] lg:h-[600px]">
    <div class="w-full h-64 bg-cover bg-center lg:h-[400px]" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
    <div class="space-y-4 px-2 mt-4">
      <h1 class="font-semibold text-lg lg:h-6">{{ title }}</h1>
      <p class="text-sm lg:h-15">{{ description }}</p>
      <p class="text-btnColor font-semibold cursor-pointer hover:underline">Learn More</p>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  /* Initial state - hidden and offset */
  opacity: 0;
  transform: translateX(-100px);
}
</style>