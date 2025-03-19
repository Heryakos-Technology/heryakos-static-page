<script setup>
import { ref, onMounted } from "vue";
import { inView, animate } from "motion";

defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const cardRef = ref(null);

onMounted(() => {
  // Check if we're on a larger screen (≥768px)
  const isLargeScreen = window.innerWidth >= 768;

  if (cardRef.value) {
    inView(
      cardRef.value,
      (element) => {
        // Different animation based on screen size
        if (isLargeScreen) {
          // Vertical animation for larger screens (bottom to top)
          animate(
            element,
            { opacity: [0, 1], y: [100, 0] },
            {
              duration: 1,
              easing: [0.17, 0.55, 0.55, 1],
            },
          );
        } else {
          // Horizontal animation for smaller screens
          animate(
            element,
            { opacity: [0, 1], x: [-100, 0] },
            {
              duration: 0.9,
              easing: [0.17, 0.55, 0.55, 1],
            },
          );
        }
      },
      {
        amount: 0.5,
        once: true,
      },
    );
  }

  // Add resize listener to update animations if window resizes
  window.addEventListener("resize", updateAnimationDirection);
});

function updateAnimationDirection() {
  if (cardRef.value) {
    // Reset animation state if screen size changes
    const isLargeScreen = window.innerWidth >= 768;
    cardRef.value.style.transform = isLargeScreen
      ? "translateY(100px)" // Changed from -100px to 100px
      : "translateX(-100px)";
  }
}
</script>

<template>
  <div
    ref="cardRef"
    class="project-card xs:max-w-[360px] group w-full max-w-[300px] pb-8 drop-shadow-xl transition-all duration-300 ease-linear hover:scale-105 sm:max-w-[390px]"
  >
    <RouterLink :to="{ name: 'PortfolioPageDetail', params: { id: 2 } }">
      <div
        class="xs:h-[300px] mx-auto h-64 w-full rounded-lg bg-cover bg-center"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      ></div>
      <div class="mt-4 space-y-4 px-2 text-center">
        <h1 class="group-hover:text-btnColor text-lg font-semibold md:h-8">
          {{ title }}
        </h1>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
/* Mobile screens - horizontal animation */
.project-card {
  opacity: 0;
  transform: translateX(-100px);
}

/* Desktop screens - vertical animation (bottom to top) */
@media (min-width: 768px) {
  .project-card {
    transform: translateY(100px); /* Changed from -100px to 100px */
  }
}
</style>
