<script setup>
import HeryakosLogo from "@/components/icons/HeryakosLogo.vue";
import router from "@/router";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();


const isSidebarOpen = ref(false);


const isNavbarVisible = ref(true);
let lastScrollPosition = 0;

const handleSidebarOpen = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  console.log(isSidebarOpen.value);
};


const navLinks = [
  { name: "Home", label: "Home" },
  { name: "BlogPage", label: "Blog" },
  { name: "PortfolioPage", label: "Works" },
  { name: "AboutUs", label: "About" },
  { name: "ServicePage", label: "Services" },
];

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 30) {

    isNavbarVisible.value = false;
  } else if (currentScrollPosition < lastScrollPosition) {

    isNavbarVisible.value = true;
  }

  lastScrollPosition = currentScrollPosition;
};


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


watch(isSidebarOpen, (newValue) => {
  document.body.style.overflow = newValue ? "hidden" : "auto";
});


onUnmounted(() => {
  document.body.style.overflow = "auto";
});
</script>

<template>
  <div class="w-full md:fixed z-50 md:top-5 transition-transform duration-300 ease-in-out"
    :class="{ '-translate-y-full md:-translate-y-[calc(100%+20px)]': !isNavbarVisible }">
    <!-- Mobile Header -->
    <div class="px-4 md:hidden fixed w-full bg-transparent top-0 left-0 justify-between items-center z-50 flex py-4">
      <HeryakosLogo />
      <div @click="handleSidebarOpen" class="size-5 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <!-- Mobile Sidebar -->
      <div
        class="fixed max-w-sm bg-black h-screen flex transition-all flex-col origin-right ease-linear duration-700 top-0 right-0 w-0"
        :class="{ 'w-screen': isSidebarOpen }">
        <svg @click="handleSidebarOpen" class="size-7 ml-auto mt-4 mr-5 fill-purple-600"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
        <ul class="text-white text-center mt-48 space-y-2 text-3xl">
          <li v-for="(item, index) in navLinks" :key="index">
            <RouterLink :to="{ name: item.name }" @click="handleSidebarOpen">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- Desktop Heading -->
    <div
      class="hidden md:flex cursor-pointer justify-between w-[90%] lg:w-[80%] h-full my-auto bg-white mx-auto py-2 rounded-4xl px-3 items-center max-w-[900px]">
      <HeryakosLogo class="w-[140px] lg:w-[160px]" />
      <ul class="flex gap-x-4 lg:gap-x-10 text-lg">
        <RouterLink v-for="(item, index) in navLinks" :key="index" :to="{ name: item.name }" class="py-1 relative"
          :class="{ 'border-1 px-5 rounded-4xl bg-[#F3F4F7] border-[#E1E4EB]': item.name === route.name }">
          {{ item.label }}
          <span
            class="absolute bg-btnColor h-[2px] w-7 bottom-0 left-[33%] opacity-0 transition-all duration-500 ease-linear"
            :class="{ 'opacity-100': item.name === route.name }"></span>
        </RouterLink>
      </ul>
      <RouterLink :to="{ name: 'ContactUs' }">
        <button
          class="bg-gradient-to-r cursor-pointer from-[#9B4AF7] to-[#8523F5] text-white px-6 py-2 rounded-full font-medium lg:px-10 lg:py-3">
          Contact
        </button>
      </RouterLink>
    </div>
  </div>
</template>