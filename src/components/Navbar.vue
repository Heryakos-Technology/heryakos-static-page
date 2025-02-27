<template>
    <nav>
      <div class="p-1  block md:hidden">
        <div class=" p-1 flex justify-between pt-2 pl-3 pr-8 ">
          <div><img class="w-40" src="/image.png" alt="" ></div>
        <div @click="toggleDropDown">
          <i class="fa-solid fa-bars " v-if="!showDropDown"></i>
          <i class="fa-solid fa-xmark" v-if="showDropDown"></i>
          </div>
  
        </div>
    <div class=" navdrop mr-5 flex flex-col z-10 left-78 absolute text-white" v-if="showDropDown">
      <div class="px-3 ">Home</div>
      <hr class="text-black">
      <div class=" px-3 mt-1">Works</div>
      <hr class="text-black">
      <div class=" px-3 mt-1 ">About</div>
      <hr class="text-black">
      <div class=" px-3 mt-1">Services</div>
      <hr class="text-black">
      <div class=" px-3 mt-1">Pricing</div>
      <hr class="text-black">
      <div class=" px-3 mt-1"><button >Contact</button></div>
    </div>
      </div>
      <div class="hidden md:block">
        <div style="width: 800px; height: 60px;"
          class="mt-5 bg-white shadow-md rounded-full p-2 flex justify-between items-center max-w-6xl mx-auto">
          <div class="flex">
            <img src="/single-logo.png" alt="" class="w-10 -mt-1">
            <h1 class="text-xl font-bold text-black -mt-1">Logoipsum</h1>
          </div>
  
          <div class="flex space-x-6 items-center">
            <a href="#" 
               class="text-gray-800" 
               :class="{'text-black w-20 h-8 text-center bg-opacity-80 backdrop-blur-3xl mt-2 bg-gray-100 border-1 border-gray-200 rounded-3xl': activeLink === 'home'}" 
               @click="setActive('home')">
              Home
              <span v-if="activeLink === 'home'"  class="absolute left-7 bottom-0.5 w-6 h-0.5  bg-purple-600 rounded-2xl"></span>
            </a>
            <a href="#" 
               class="text-gray-800" 
               :class="{'text-black w-20 h-8 text-center bg-opacity-80 backdrop-blur-3xl mt-2 bg-gray-100 border-1 border-gray-200 rounded-3xl': activeLink === 'works'}" 
               @click="setActive('works')">
              Works
              <span v-if="activeLink === 'works'" class="absolute left-7 bottom-0.5 w-6 h-0.5  bg-purple-600 rounded-2xl"></span>
            </a>
            <a href="#" 
               class="text-gray-800" 
               :class="{'text-black w-20 h-8 text-center bg-opacity-80 backdrop-blur-3xl mt-2 bg-gray-100 border-1 border-gray-200 rounded-3xl': activeLink === 'about'}" 
               @click="setActive('about')">
              About
              <span v-if="activeLink === 'about'" class="absolute left-7 bottom-0.5 w-6 h-0.5  bg-purple-600 rounded-2xl"></span>
            </a>
            <a href="#" 
               class="text-gray-800" 
               :class="{'text-black w-20 h-8 text-center bg-opacity-80 backdrop-blur-3xl mt-2 bg-gray-100 border-1 border-gray-200 rounded-3xl': activeLink === 'services'}" 
               @click="setActive('services')">
              Services
              <span v-if="activeLink === 'services'" class="absolute left-7 bottom-0.5 w-6 h-0.5  bg-purple-600 rounded-2xl"></span>
            </a>
          </div>
          <div>
            <a href="#"
              class="bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] text-white rounded-full px-5 py-3 font-normal hover:opacity-80 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeLink: 'home', 
        showDropDown:false
      };
    },
    methods: {
      setActive(link) {
        this.activeLink = link;
      },
      toggleDropDown(){
      this.showDropDown = !this.showDropDown
    }
    },
  }
  </script>
  
  <style>
  
  .navdrop{
    background-color: rgba(0, 0, 0, 0.249);
  }
  </style>
  