<template>
  <div>
    <div class="block md:hidden mb-36 mt-16">
      <img src="/teamimage1.png" alt="" class="w-4/5 ml-16 mt-5 relative animated-image">
      <div class="w-11/12 h-44 bg-white absolute -mt-14 animated-text-intro">
        <p class="w-full text-center font-bold bg-gradient-to-r from-[#984AF7] to-[#8523F5] bg-clip-text text-transparent">
         About Us
        </p>
        <p class="text-wrap text-sm ml-2 pt-5 pl-5 pr-4">We offer cutting-edge technology solutions designed to accelerate your business growth. From stunning web experiences to powerful mobile applications and future-ready blockchain solutions, we provide end-to-end services tailored to your unique needs.</p>
      </div>
    </div>
    <div class="hidden lg:block md:block">
      <div class="md:mb-64 lg:ml-44 md:w-2/3 ">
        <div class="lg:ml-24">
          <img class="pt-32 lg:ml-88 md:w-1/3 md:ml-64 relative text-purple-300 animated-image intro-image" src="/teamimage1.png" alt="Service Landing Image">
        </div>
        <div class="-mt-10 ml-28">
          <div class="lg:w-2/6 md:w-1/2 -ml- h-96 -mt-96 bg-white absolute animated-text">
            <div class="mt-10 mb-4">
              <p class="lg:text-2xl md:text-xl text-center text-md md:mt-4 pt-2 font-sans font-bold bg-gradient-to-r from-[#984AF7] to-[#8523F5] bg-clip-text text-transparent">
               About Us
              </p>
            </div>
            <div class="w-11/12 mx-auto">
              <p class="ml-8 p-2 lg:text-xl md:text-xl font-semi-bold text-black">We offer cutting-edge technology solutions designed to accelerate your business growth. From stunning web experiences to powerful mobile applications and future-ready blockchain solutions, we provide end-to-end services tailored to your unique needs.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <div class="lg:hidden  w-11/11 md:w-7/11 md:mx-auto md:-mt-36">
      <h1 class="w-4/5 text-lg mx-auto font-semibold md:text-2xl">Meet The Founder And CEO <br> <span class="text-red-400">Naod </span>Yeshiwas</h1>
      <div class="flex mx-4 mt-6 w-11/11 md:w-10/11 md:mx-auto">
        <div class="w-10/10 mx-auto">
          <img src="/singleman.png" alt="" class="rounded-full w-4/5 ml-3">
          <div class="flex w-1/3 mx-auto mt-3 md:w-1/3 md:mx-auto">
            <div class="mr-3 w-8 h-8 rounded-full bg-red-400 flex items-center justify-center">
              <i class="fa-brands fa-instagram text-white text-sm"></i>
            </div>
            <div class="mr-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <i class="fa-brands fa-linkedin text-white text-sm"></i>
            </div>
          </div>
          <div class="w-2/3 mx-auto md:w-1/2 md:mx-auto md:mt-3 " >

            <button class="mt-2 bg-purple-500 text-white px-10 rounded-full   mb-3 text-xs py-2">Follow on LinkedIn</button>
          </div>
        </div>

      </div>
      <div class="w-11/11 mb-2 bg-purple-200 pt-5 mx-1 mr-7  shadow-md">
          <div class="flex pb-2 px-2 ">
            <div @click="toggleAbout"><i class="fa-solid fa-caret-left"></i></div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold">About Naos Yeshiwas</div>
              <div v-if="aboutShow" class="w-5/6 mx-auto mt-5"> 
                Naod Yeshiwas is the CEO of Yegna Developers, which is the best website design company in ethiopia that specializes in website design, SEO, digital marketing, software development, mobile app and paid ads. Naod is a highly skilled professional with years of experience in the industry. He is a talented software developer, with a strong background in building and managing software projects. In addition to his technical skills, Naod is also an experienced project manager, with a track record of successfully delivering projects on time and within budget. Whether it’s developing a custom software solution, designing a user-friendly mobile app, or creating a visually stunning website, Naod and his team at Yegna Developers have the skills and expertise to bring any project to life.
              </div>
            </div>
          </div>
          <hr class="text-gray-400">
          <div class="flex pb-2 px-2 mt-4">
            <div><i class="fa-solid fa-caret-left" @click="toggleSkill"></i></div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold">Skills</div>
              <div v-if="skillShow" class="w-5/6 mx-auto mt-5">
<ul>
  <li>Professional software developers</li>
  <li>Mobile application developer</li>
  <li>Website designer</li>
  <li>Project Manager</li>
  <li>Motion and visual graphics designer</li>
</ul>
              </div>
            </div>
          </div>
          <hr class="text-gray-400">
          <div class="flex pb-2 px-2 mt-4">
            <div @click="toggleAim"><i class="fa-solid fa-caret-left"></i></div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold">Aim</div>
              <div v-if="aimShow" class="w-5/6 mx-auto mt-5">
                As the CEO of Yegna Developers, Naod Yeshiwas’s aim is to provide his clients with high-quality digital marketing, software development, mobile app development, and website design services. He is dedicated to delivering projects that meet the specific needs and requirements of his clients, and is committed to using his technical expertise and project management skills to ensure that each project is a success. In addition to delivering exceptional results for his clients, Naod also strives to create a positive and collaborative work environment for his team at Yegna Developers, helping them to grow and develop as professionals. Overall, Naod’s aim is to be a leading provider of software development, mobile app development, and website design services, and to build a reputation for delivering exceptional results for his clients.
              </div>
            </div>
          </div>
        </div>
    </div>
    <!--large-->
<div class="hidden lg:block w-1/2 -mt-40 mx-auto">
<div class="flex w-10/10 mx-auto">
<div class="w-6/7 mx-auto">
  <h1 class="w-10/10 text-lg mx-auto font-semibold md:text-2xl mb-3">Meet The Founder And CEO <br> <span class="text-red-400">Naod </span>Yeshiwas</h1>
  <div class=" w-11/10 mx-auto">
          <img src="/singleman.png" alt="" class="rounded-full w-3/4 ">
          <div class="flex w-1/2 mx-auto mt-3 ">
            <div class="mr-3 w-8 h-8 rounded-full bg-red-400 flex items-center justify-center">
              <i class="fa-brands fa-instagram text-white text-sm"></i>
            </div>
            <div class="mr-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <i class="fa-brands fa-linkedin text-white text-sm"></i>
            </div>
          </div>
          <div class=" mx-auto w-3/4 md:mx-auto md:mt-3 " >

            <button class="mt-2 bg-purple-500 text-white px-10 rounded-full   mb-3 text-xs py-2">Follow on LinkedIn</button>
          </div>
        </div>
</div>
<div class="w-6/7">
  <div class="sideCard mb-2 bg-purple-300 pt-5 mx-1   shadow-md mt-26 -ml-1 w-15/11 animated-card">
          <div class="flex py-5 px-2 " @click="toggleAbout">
            <div >
              <i class="fa-solid fa-caret-down"  v-if="aboutShow"></i>
              <i class="fa-solid fa-caret-left"  v-if="!aboutShow"></i>
            </div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold" :style="{ color: aboutShow ? 'red' : 'black' }">About Naos Yeshiwas</div>
              <div v-if="aboutShow" class="w-7/8 mx-auto mt-5 text-sm">
                <hr class="text-gray-400 mb-2 -ml-11 -mr-9"> 
                Naod Yeshiwas is the CEO of Yegna Developers, which is the best website design company in ethiopia that specializes in website design, SEO, digital marketing, software development, mobile app and paid ads. Naod is a highly skilled professional with years of experience in the industry. He is a talented software developer, with a strong background in building and managing software projects. In addition to his technical skills, Naod is also an experienced project manager, with a track record of successfully delivering projects on time and within budget. Whether it’s developing a custom software solution, designing a user-friendly mobile app, or creating a visually stunning website, Naod and his team at Yegna Developers have the skills and expertise to bring any project to life.
              </div>
            </div>
          </div>
          <hr class="text-gray-300">
          <div class="flex py-5 px-2 mt-4" @click="toggleSkill">
            <div>
              <i class="fa-solid fa-caret-down" v-if="skillShow"></i>
              <i class="fa-solid fa-caret-left"  v-if="!skillShow"></i>
            </div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold" :style="{ color: skillShow ? 'red' : 'black' }">Skills</div>
              <div v-if="skillShow" class="w-7/8 text-sm mx-auto mt-5" >
<ul class="list-disc">
  <hr class="text-gray-300 mb-2 -ml-7 -mr-61"> 
  <li>Professional software developers</li>
  <li>Mobile application developer</li>
  <li>Website designer</li>
  <li>Project Manager</li>
  <li>Motion and visual graphics designer</li>
</ul>
              </div>
            </div>
          </div>
          <hr class="text-gray-300">
          <div class="flex py-5 px-2 mt-4" @click="toggleAim">
            <div >
              <i class="fa-solid fa-caret-down" v-if="aimShow"></i>
              <i class="fa-solid fa-caret-left" v-if="!aimShow"></i>
            </div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold" :style="{ color: aimShow ? 'red' : 'black' }">Aim</div>
              <div v-if="aimShow" class="w-7/8 text-sm mx-auto mt-5" >
                <hr class="text-gray-300 mb-2 -ml-10 -mr-9"> 
                As the CEO of Yegna Developers, Naod Yeshiwas’s aim is to provide his clients with high-quality digital marketing, software development, mobile app development, and website design services. He is dedicated to delivering projects that meet the specific needs and requirements of his clients, and is committed to using his technical expertise and project management skills to ensure that each project is a success. In addition to delivering exceptional results for his clients, Naod also strives to create a positive and collaborative work environment for his team at Yegna Developers, helping them to grow and develop as professionals. Overall, Naod’s aim is to be a leading provider of software development, mobile app development, and website design services, and to build a reputation for delivering exceptional results for his clients.
              </div>
            </div>
          </div>
        </div>
</div>
</div>
</div>
<div class="hidden lg:block mt-60 w-1/2 mx-auto">
      <div>
        <div class="flex mb-5 mx-2 mt-5 ">

          <div class="lgbox flex w-1/2 mx-auto h-35 bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/businessman3.webp" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 mt-5 mx-auto flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1 class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-4">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="lgbox1 flex w-1/2 h-35 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1  class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="lgbox flex w-1/2 mx-auto h-35 bg-purple-400 text-white mr-3 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/PedroFemale.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 mt-5 mx-auto flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1 class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-4">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="lgbox1 flex w-1/2 h-35 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/businessman2.avif" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1  class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="lgbox flex w-1/2 mx-auto h-35 bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/bisinessman4.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 mt-5 mx-auto flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1 class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-4">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="lgbox1 flex w-1/2 h-35 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/bisinessman1.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1  class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--end of large-->
    <h1 class="text-center md:hidden lg:hidden" >Our Teams</h1>
    <div class="lg:hidden md:hidden   md:w-3/4 md:mx-auto">
      <div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="smbox flex bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/PedroFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="smbox1 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5">
          <div class="smbox flex bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto">
              <img src="/PedroFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="smbox1 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-10 mx-2">
          <div class="smbox flex bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto">
              <img src="/MariaFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="smbox1 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--middiwm-->
<div class="lg:hiddeen  md:w-2/3 md:mx-auto">
      <div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="mdbox flex bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/PedroFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="mdbox1 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5">
          <div class="mdbox flex bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto">
              <img src="/PedroFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="mdbox1 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/bisinessman1.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-10 mx-2">
          <div class="mdbox flex bg-purple-400 text-white mr-2 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto">
              <img src="/MariaFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="mdbox1 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>  
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { animate } from 'motion';

export default {
  setup() {
    const cards = ref([]);
    const mdcards = ref([]);
    const lgcards = ref([]);
    const sideCard = ref([]);
    const cards2 = ref([]);
    const mdcards2 = ref([]);
    const lgcards2 = ref([]);
    const aboutShow = ref(false)
    const skillShow = ref(false)
    const aimShow = ref(false)

const toggleAbout = ()=>{
  aboutShow.value = !aboutShow.value
  skillShow.value = false
  aimShow.value = false
}
   
const toggleSkill = ()=>{
  skillShow.value = !skillShow.value
  aboutShow.value = false
  aimShow.value = false
}
const toggleAim = ()=>{
  aimShow.value = !aimShow.value
  aboutShow.value = false
  skillShow.value = false
}
//
const cardobserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('cdvisible');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateY(-1px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('cdvisible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(150px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//


const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('visible');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(10)',
          }, {
            duration: 1.3,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-75px)';
        }
      });
    }, {
      threshold: 0.1,
    });
    //mediumm
    const mdobserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('mdvisible');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(10px)',
          }, {
            duration: 1.3,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('mdvisible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-175px)';
        }
      });
    }, {
      threshold: 0.1,
    });


    //large
    const lgobserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('lgvisible');
          animate(entry.target, {
            opacity: 1,
          

            transform: 'translateX(375px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('lgvisible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-275px)';
        }
      });
    }, {
      threshold: 0.1,
    });
    //
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animate(entry.target, {
            opacity: 1,
            transform: 'translateX(10px)',
          }, {
            duration: 1.1,
            easing: [0.17, 0.55, 0.55, 1],
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(75px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//medium
const mdobserver2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mdvisible');
          animate(entry.target, {
            opacity: 1,
            transform: 'translateX(10px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('mdvisible2');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(175px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//
const lgobserver2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('lgvisible2');
          animate(entry.target, {
            opacity: 1,

            transform: 'translateX(-375px)'
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('lgvisible2');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(275px)';
        }
      });
    }, {
      threshold: 0.1,
    });
    //
//large
    onMounted(() => {
      cards.value = [...document.querySelectorAll('.smbox')];
      cards.value.forEach(card => {
        observer.observe(card);
      });
      //
      sideCard.value = [...document.querySelectorAll('.sideCard')];
      sideCard.value.forEach(card => {
        cardobserver.observe(card);
      });
      //
      cards2.value = [...document.querySelectorAll('.smbox1')];
      cards2.value.forEach(card => {
        observer2.observe(card);
      });
      //medium
      mdcards.value = [...document.querySelectorAll('.mdbox')];
      mdcards.value.forEach(card => {
        mdobserver.observe(card);
      });
      mdcards2.value = [...document.querySelectorAll('.mdbox1')];
      mdcards2.value.forEach(card => {
        mdobserver2.observe(card);
      });
      //large
      lgcards.value = [...document.querySelectorAll('.lgbox')];
      lgcards.value.forEach(card => {
        lgobserver.observe(card);
      });
      lgcards2.value = [...document.querySelectorAll('.lgbox1')];
      lgcards2.value.forEach(card => {
        lgobserver2.observe(card);
      });
      onBeforeUnmount(() => {
        cards.value.forEach(card => {
          observer.unobserve(card);
        });
        //
        sideCard.value.forEach(card => {
          cardobserver.unobserve(card);
        });
        //
        
        mdcards.value.forEach(card => {
          mdobserver.unobserve(card);
        });
        cards2.value.forEach(card => {
          observer2.unobserve(card);
        });
        mdcards2.value.forEach(card => {
          mdobserver2.unobserve(card);
        });
      });
    });
    

    return {
      cards,
      mdcards,
      cards2,
      mdcards2,
      toggleAbout,
      aboutShow,
      skillShow,
      aimShow,
      toggleAim,
      toggleSkill
    };
  },
};
</script>

<style scoped>
.animated-card {
  opacity: 0; 
  transition: opacity 1.5s ease, transform 1.5s ease; 
  transform: translateX(190);
}

.visible {
  opacity: 1; 
  transform: translateX(190); 
}
.cdvisible {
  opacity: 1; 
  transform: translateX(190); 
}
.mdvisible {
  opacity: 1; 
  transform: translateX(190); 
}
.lgvisible {
  opacity: 1; 
  transform: translateX(190); 
}
.visible2 {
  opacity: 1; 
  transform: translateX(10); 
}
.mdvisible2 {
  opacity: 1; 
  transform: translateX(10); 
}
.lgvisible2 {
  opacity: 1; 
  transform: translateX(10); 
}
.intro-image {
  width: 700px;
  height: 600px;
}
@keyframes slideInImage {
      to {
          opacity: 1;
          transform: translateX(0); 
      }
  }
  
  @keyframes slideInText {
      to {
          opacity: 1;
          transform: translateX(0); 
      }
  }
  
  .animated-image {
      opacity: 0;
      transform: translateY(-50px); 
      animation: slideInImage 0.8s forwards; 
  }
  
  .animated-content {
      opacity: 0;
      transform: translateY(50px); 
      animation: slideInContent 0.8s forwards; 
      animation-delay: 0.4s; 
  }
  
  @keyframes slideInImage {
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }
  
  @keyframes slideInContent {
      to {
          opacity: 1;
          transform: translateY(0); 
      }
  }
</style>