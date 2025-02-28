<script setup>
import HeryakosLogo from '@/components/icons/HeryakosLogo.vue';
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const handleSidebarOpen = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  console.log(isSidebarOpen.value);
}

</script>

<template>
  <div class="w-full sticky top-0 left-0">
    <!-- Mobile Header -->
    <div class="px-4 justify-between items-center  flex py-4 ">
      <HeryakosLogo :width="105" />
      <div @click="handleSidebarOpen" class="size-5 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <!-- Mobile Sidebar -->
      <div
        class="fixed max-w-sm md:hidden  bg-black h-screen flex  transition-all flex-col   origin-right ease-linear duration-700 top-0 right-0 w-0"
        :class="{ 'w-screen': isSidebarOpen }">
        <svg @click="handleSidebarOpen" class="size-7 ml-auto mt-4 mr-5 fill-purple-600  "
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
        <ul class="text-white text-center mt-48 space-y-2 text-3xl">
          <li class="">Home</li>
          <li class="">Works</li>
          <li class="">About</li>
          <li class="">Services</li>
        </ul>
      </div>
    </div>
  </div>
</template>