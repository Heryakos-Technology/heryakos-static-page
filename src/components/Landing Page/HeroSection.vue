<script setup>
import developerIllustration from '/images/hero_developer_illustration.png'
</script>

<template>

  <div
    class="bg-[url('/images/Landing_BG_Image_Small.png')] bg-no-repeat bg-cover  bg-left-top h-screen pt-[100px]  md:bg-[url('/images/Landing_BG_Image_Large.png')]  lg:px-12 md:pt-[140px] lg:pt-[160px]  ">
    <div class=" lg:flex items-center justify-center   ">
      <div class=" ">
        <div
          class=" px-4 mt-3 text-center max-w-[375px] mx-auto xs:max-w-[450px] sm:max-w-[550px] lg:text-left lg:mx-0  lg:px-0  ">
          <h1 class=" -tracking-[1px] text-2xl  xs:text-3xl font-semibold sm:text-4xl xl:text-6xl xl:font-normal 2xl: ">
            Cutting-Edge Tech Solutions for a Digital Future
          </h1>
          <p
            class="mt-3 text-sm max-w-[300px] xs:max-w-[320px] mx-auto lg:mx-0 sm:max-w-[360px] sm:text-base sm:mt-5 xl:max-w-[390px] ">
            Delivering Innovative Solutions in Technology and Web Development to Elevate Your Business and Drive Success
          </p>
        </div>
        <div class="flex flex-col mt-8 sm:mt-10 items-center gap-y-6 w-full lg:flex-row gap-x-8 ">
          <div class="flex gap-x-4 items-center lg:order-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-10 fill-[#9946f7]">
              <path fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                clip-rule="evenodd" />
            </svg>
            <p class="font-semibold text-xl">Watch Demo</p>
          </div>
          <RouterLink :to="{ name: 'ServicePage' }">
            <div class="border-3 font-semibold rounded-xl px-15 py-2 border-[#9946f7]">Our Services</div>
          </RouterLink>
        </div>
      </div>
      <div class="hidden lg:block max-w-[485.109px]  xl:max-w-full ">
        <img :src="developerIllustration" alt="developer Illustration" class="w-full">
      </div>
    </div>
  </div>

</template>