<template>

  <div>
    <!-- mobile size -->
    <div class="block md:hidden lg:mb-64">
      <img class="w-11/12 lg:w-11/12 lg:mx-auto lg:h-screen lg:overflow-hidden ml-4 h-72 mt-6 rounded-xl relative text-purple-300" src="/service-landing.png" alt="Service Landing Image">
      <p class="lg:text-5xl lg:text-center lg:relative text-md -mt-72 pt-2 ml-36 absolute font-sans font-bold bg-gradient-to-r from-[#984AF7] to-[#8523F5] bg-clip-text text-transparent">
        OUR SERVICES
      </p>
      <p class="w-72 p-2 absolute -mt-64 ml-16 text-xs font-extralight text-white">We offer cutting-edge technology solutions designed to accelerate your business growth. From stunning web experiences to powerful mobile applications and future-ready blockchain solutions, we provide end-to-end services tailored to your unique needs.</p>
    </div>
    <!-- /end of mobile size -->

    <!-- desktop -->
    <div class="mb-96 hidden md:block">
      <img class="w-11/12 lg:w-11/12 lg:mx-auto lg:h-screen lg:overflow-hidden ml-4 h-72 mt-6 rounded-4xl relative text-purple-300" src="/service-landing.png" alt="Service Landing Image">
      <div class="-mt-64 w-64 mx-auto">
        <p class="lg:text-5xl lg:text-center -ml-20 text-md -mt-96 pt-2 absolute font-sans font-bold bg-gradient-to-r from-[#984AF7] to-[#8523F5] bg-clip-text text-transparent">
          OUR SERVICES
        </p>
      </div>
      <div class="w-2/3 mx-auto -mt-96">
        <p class="w-1/2 text-center p-2 absolute text-2xl ml-20 -mt-28 font-extralight text-white">We offer cutting-edge technology solutions designed to accelerate your business growth. From stunning web experiences to powerful mobile applications and future-ready blockchain solutions, we provide end-to-end services tailored to your unique needs.</p>
      </div>
    </div>
    <!-- /end of desktop -->

    <!-- mobile view -->
    <div class="block md:hidden bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] md:p-8 w-11/12 pb-2 rounded-lg mx-auto mt-8 mb-10">
      <img style="border-top-right-radius: 130px; border-bottom-left-radius: 130px;" src="/service-one.png" alt="Static Website Development" class="mx-auto rounded-bl-2xl rounded-tr-full w-full h-auto">
      <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center mt-4">
        Static Website Development
      </h2>
      <p class="text-sm text-center font-serif">
        <span class="text-blue-500">🌐</span> "Beautifully Crafted Websites That Speak for Your Brand"
      </p>
      <p class="ml-6 mb-4 w-80 text-center">
        We design fast, secure, visually stunning static websites ideal for portfolios, landing pages, and informational platforms. Our static websites ensure top performance with minimal maintenance.
      </p>
    </div>

    <div class="block md:hidden bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] md:p-8 w-11/12 pb-2 rounded-lg mx-auto mt-8 mb-2">
      <img style="border-top-left-radius: 130px; border-bottom-right-radius: 130px;" src="/service-two.png" alt="Static Website Development" class="mx-auto w-full h-64">
      <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center mt-4">
        Technology Consultancy
      </h2>
      <p class="text-sm text-center font-serif mb-2">
        <span class="text-blue-500">🔍</span> "Empowering Ideas with the Right Technology"
      </p>
      <p class="ml-6 mb-4 w-80 text-center">
        We provide expert guidance to help you choose the right technologies and strategies for your business. From project planning to tech stack selection, we ensure you make informed decisions that lead to success.
      </p>
    </div>
    <!-- /end of mobile -->

    <!-- desktop view -->
    <div class="flex px-20">
      <div class="hidden md:block bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] lg:w-1/2 mr-5 rounded-lg h-1/3 mx-auto mt-8 mb-10">
        <img style="border-top-right-radius: 130px; border-bottom-left-radius: 130px; height: 450px;" src="/service-one.png" alt="Static Website Development" class="mx-auto rounded-bl-2xl rounded-tr-full w-full mb-6">
        <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center">
          Static Website Development
        </h2>
        <p class="text-lg text-center font-serif">
          <span class="text-blue-500">🌐</span> "Beautifully Crafted Websites That Speak for Your Brand"
        </p>
        <p class="ml-16 mt-10 mb-4 w-4/5 text-center pb-6">
          We design fast, secure, visually stunning static websites ideal for portfolios, landing pages, and informational platforms. Our static websites ensure top performance with minimal maintenance.
        </p>
      </div>

      <div class="hidden md:block bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] lg:w-1/2 ml-5 rounded-lg h-1/3 mx-auto mt-8 mb-10">
        <img style="border-top-left-radius: 130px; border-bottom-right-radius: 130px; height: 450px;" src="/service-two-new.png" alt="Static Website Development" class="mx-auto w-full h-1/2 mb-6">
        <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center">
          Technology Consultancy
        </h2>
        <p class="text-lg text-center font-serif mb-2">
          <span class="text-blue-500">🔍</span> "Empowering Ideas with the Right Technology"
        </p>
        <p class="ml-16 mb-4 w-4/5 mt-10 pb-6 text-center">
          We provide expert guidance to help you choose the right technologies and strategies for your business. From project planning to tech stack selection, we ensure you make informed decisions that lead to success.
        </p>
      </div>
    </div>
    <!-- /end of desktop -->

    <!-- mobile view -->
    <div class="block md:hidden bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] md:p-8 w-11/12 pb-2 rounded-lg mx-auto mt-8 mb-10">
      <img style="border-top-right-radius: 130px; border-bottom-left-radius: 130px;" src="/service-three.png" alt="Static Website Development" class="mx-auto w-full h-64">
      <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center mt-4">
        Mobile Application Development (Android & iOS)
      </h2>
      <p class="text-sm text-center font-serif mb-2">
        <span class="text-blue-500">📱</span> "Seamless Mobile Experiences at Your Fingertips"
      </p>
      <p class="ml-6 mb-4 w-80 text-center">
        Reach a wider audience with intuitive and responsive mobile applications. We specialize in building high-performance Android and iOS apps with offline capabilities and real-time data sync for maximum user engagement.
      </p>
    </div>

    <div class="block md:hidden bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] md:p-8 w-11/12 pb-2 rounded-lg mx-auto mt-8 mb-2">
      <img style="border-top-left-radius: 130px; border-bottom-right-radius: 130px;" src="/service-four.png" alt="Static Website Development" class="mx-auto w-full h-64">
      <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center mt-4">
        Dynamic Website Development
      </h2>
      <p class="text-sm text-center font-serif mb-2">
        <span class="text-blue-500">⚡</span> "Interactive Web Solutions That Engage and Convert"
      </p>
      <p class="ml-6 mb-4 w-80 text-center">
        Transform your online presence with feature-rich, dynamic websites that adapt to user interactions. We build scalable platforms with powerful backends tailored for e-commerce, blogs, and web applications.
      </p>
    </div>
    <!-- /end of mobile -->

    <!-- desktop -->
    <div class="flex px-20 -mt-8">
      <div class="hidden md:block bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] w-1/2 mr-5 h-1/3 rounded-lg mx-auto mt-8 mb-10">
        <img style="border-top-right-radius: 130px; border-bottom-left-radius: 130px; height: 450px;" src="/service-three.png" alt="Static Website Development" class="mx-auto w-full mb-6">
        <h2 class="text-2xl md:text-3xl font-normal mb-4 w-4/5 mx-auto text-center">
          Mobile Application Development (Android & iOS)
        </h2>
        <p class="text-lg text-center font-serif mb-2">
          <span class="text-blue-500">📱</span> "Seamless Mobile Experiences at Your Fingertips"
        </p>
        <p class="ml-16 mb-4 w-4/5 mt-10 pb-6 text-center">
          Reach a wider audience with intuitive and responsive mobile applications. We specialize in building high-performance Android and iOS apps with offline capabilities and real-time data sync for maximum user engagement.
        </p>
      </div>

      <div class="hidden md:block bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] w-1/2 ml-5 h-1/3 rounded-lg pb-9 mx-auto mt-8 mb-10">
        <img style="border-top-left-radius: 130px; border-bottom-right-radius: 130px; height: 450px;" src="/service-four.png" alt="Static Website Development" class="mx-auto w-full mb-6">
        <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center">
          Dynamic Website Development
        </h2>
        <p class="text-lg text-center font-serif mb-2">
          <span class="text-blue-500">⚡</span> "Interactive Web Solutions That Engage and Convert"
        </p>
        <p class="ml-16 mb-4 w-4/5 mt-10 pb-6 text-center">
          Transform your online presence with feature-rich, dynamic websites that adapt to user interactions. We build scalable platforms with powerful backends tailored for e-commerce, blogs, and web applications.
        </p>
      </div>
    </div>
    <!-- /end of desktop -->

    <!-- mobile view -->
    <div class="block md:hidden bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] md:p-8 w-11/12 pb-2 rounded-lg mx-auto mt-8 mb-10">
      <img style="border-top-right-radius: 130px; border-bottom-left-radius: 130px;" src="/service-five.png" alt="Static Website Development" class="mx-auto w-full h-64">
      <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center mt-4">
        Blockchain Integration
      </h2>
      <p class="text-sm text-center font-serif mb-2">
        <span class="text-blue-500">🔗 </span> "Future-Proof Your Business with Blockchain"
      </p>
      <p class="ml-6 mb-4 w-80 text-center">
        Leverage the power of blockchain for secure transactions, smart contracts, and decentralized applications. We integrate blockchain solutions tailored to your business needs, ensuring transparency and trust.
      </p>
    </div>

    <div class="block md:hidden bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] md:p-8 w-11/12 pb-2 rounded-lg mx-auto mt-8 mb-10">
      <img style="border-top-left-radius: 130px; border-bottom-right-radius: 130px;" src="/service-six.png" alt="Static Website Development" class="mx-auto w-full h-64">
      <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center mt-4">
        Cloud Computing Solutions
      </h2>
      <p class="text-sm text-center font-serif mb-2">
        <span class="text-gray-500">☁ </span> "Scalable, Secure, and Reliable Cloud Solutions"
      </p>
      <p class="ml-6 mb-4 w-80 text-center">
        Optimize your business operations with our cloud computing services. We offer cloud integration, migration, and management solutions that ensure scalability, data security, and high availability.
      </p>
    </div>
    <!-- /end of mobile -->

    <!-- desktop -->
    <div class="flex px-20 -mt-8">
      <div class="hidden md:block bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] w-1/2 mr-5 h-1/3 rounded-lg mx-auto mt-8 mb-10">
        <img style="border-top-right-radius: 130px; border-bottom-left-radius: 130px; height: 450px;" src="/service-five-new.png" alt="Static Website Development" class="mx-auto w-full mb-6">
        <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center">
          Blockchain Integration
        </h2>
        <p class="text-lg text-center font-serif mb-2">
          <span class="text-blue-500">🔗 </span> "Future-Proof Your Business with Blockchain"
        </p>
        <p class="ml-16 mb-4 w-4/5 mt-10 pb-6 text-center">
          Leverage the power of blockchain for secure transactions, smart contracts, and decentralized applications. We integrate blockchain solutions tailored to your business needs, ensuring transparency and trust.
        </p>
      </div>

      <div class="hidden md:block bg-gradient-to-b from-[#F7F3FE] to-[#eee6ff] w-1/2 h-1/3 ml-5 rounded-lg mx-auto mt-8 mb-10">
        <img style="border-top-left-radius: 130px; border-bottom-right-radius: 130px; height: 450px;" src="/service-six.png" alt="Static Website Development" class="mx-auto w-full mb-6">
        <h2 class="text-2xl md:text-3xl font-normal mb-4 text-center">
          Cloud Computing Solutions
        </h2>
        <p class="text-lg text-center font-serif mb-2">
          <span class="text-gray-500">☁ </span> "Scalable, Secure, and Reliable Cloud Solutions"
        </p>
        <p class="ml-16 mb-4 w-4/5 mt-10 pb-6 text-center">
          Optimize your business operations with our cloud computing services. We offer cloud integration, migration, and management solutions that ensure scalability, data security, and high availability.
        </p>
      </div>
    </div>
    <!-- /end of desktop -->

    <div class="w-64 mx-auto">
      <p class="text center font-bold text-2xl mb-10 ml-16">pricing plan</p>
    </div>

    <!-- pricing section -->
    <div class="block md:hidden section two flex">
      <div class="bg-[#EBD2FF] rounded-xl p-6 w-46 ml-3 mx-auto shadow-lg h-72">
        <div class="bg-[#DAA8FD] w-46 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
          <h2 class="text-center text-xs font-medium">Static Website Development</h2>
        </div>
        <div class="flex justify-center mb-4 w-32">
          <img src="/globe.png" alt="" class="w-20 mt-5">
        </div>
        <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">5</span></p>
        <div class="text-center">
          <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-3 rounded-xl hover:bg-[#7C4AAC]">
            Get It Now
          </button>
        </div>
      </div>
      <div class="bg-[#EBD2FF] rounded-xl p-6 w-46 -ml-1 mx-auto shadow-lg h-72">
        <div class="bg-[#DAA8FD] w-46 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
          <h2 class="text-center text-xs font-medium">Technology Consultancy</h2>
        </div>
        <div class="flex justify-center mb-4">
          <img src="/lens.png" alt="" class="w-80 mt-5">
        </div>
        <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
        <div class="text-center">
          <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 rounded-xl hover:bg-[#7C4AAC]">
            Get It Now
          </button>
        </div>
      </div>
    </div>

    <div class="block md:hidden section two flex mt-10">
      <div class="bg-[#EBD2FF] rounded-xl p-6 w-46 ml-3 mx-auto shadow-lg h-72">
        <div class="bg-[#DAA8FD] w-46 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
          <h2 class="text-center text-xs font-medium -mt-2">Mobile Application Development (Android & iOS)</h2>
        </div>
        <div class="flex justify-center mb-4">
          <img src="/mobile.png" alt="">
        </div>
        <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
        <div class="text-center">
          <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-4 rounded-xl hover:bg-[#7C4AAC]">
            Get It Now
          </button>
        </div>
      </div>
      <div class="bg-[#EBD2FF] rounded-xl p-6 w-46 -ml-1 mx-auto shadow-lg h-72">
        <div class="bg-[#DAA8FD] w-46 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
          <h2 class="text-center text-xs font-medium -mt-2">Dynamic Website Development</h2>
        </div>
        <div class="flex justify-center mb-4">
          <img src="/flash.png" alt="" class="mt-2">
        </div>
        <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
        <div class="text-center">
          <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-3 rounded-xl hover:bg-[#7C4AAC]">
            Get It Now
          </button>
        </div>
      </div>
    </div>

    <div class="block md:hidden section two flex mt-10 mb-10">
      <div class="bg-[#EBD2FF] rounded-xl p-6 w-46 ml-3 mx-auto shadow-lg h-72">
        <div class="bg-[#DAA8FD] w-46 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
          <h2 class="text-center text-xs font-medium">Blockchain Integration</h2>
        </div>
        <div class="flex justify-center mb-4">
          <img src="/chain.png" alt="" class="mt-7">
        </div>
        <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">5</span></p>
        <div class="text-center">
          <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-2 rounded-xl hover:bg-[#7C4AAC]">
            Get It Now
          </button>
        </div>
      </div>
      <div class="bg-[#EBD2FF] rounded-xl p-6 w-46 -ml-1 mx-auto shadow-lg h-72">
        <div class="bg-[#DAA8FD] w-46 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
          <h2 class="text-center text-xs font-medium">Cloud Computing Solutions</h2>
        </div>
        <div class="flex justify-center mb-4">
          <img src="/cloud.png" alt="" class="mt-10">
        </div>
        <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
        <div class="text-center">
          <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 rounded-xl hover:bg-[#7C4AAC]">
            Get It Now
          </button>
        </div>
      </div>
    </div>
    <!-- /end of pricing section -->

    <!-- desktop size for pricing section -->
    <div class="hidden md:block section two">
      <div class="flex px-40">
        <div class="bg-[#EBD2FF] rounded-xl p-6 w-64 mx-auto shadow-lg h-72">
          <div class="bg-[#DAA8FD] w-64 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
            <h2 class="text-center text-xs font-medium">Static Website Development</h2>
          </div>
          <div class="flex justify-center mb-4 w-32 mx-auto">
            <img src="/globe.png" alt="" class="w-20 mt-5 mx-auto">
          </div>
          <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">5</span></p>
          <div class="text-center mt-6">
            <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 rounded-xl hover:bg-[#7C4AAC]">
              Get It Now
            </button>
          </div>
        </div>
        <div class="bg-[#EBD2FF] rounded-xl p-6 w-64 mx-auto shadow-lg h-72">
          <div class="bg-[#DAA8FD] w-64 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
            <h2 class="text-center text-xs font-medium">Technology Consultancy</h2>
          </div>
          <div class="flex justify-center w-40 mx-auto">
            <img src="/lens.png" alt="" class="w-64 mt-2">
          </div>
          <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
          <div class="text-center mt-4">
            <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-2 rounded-xl hover:bg-[#7C4AAC]">
              Get It Now
            </button>
          </div>
        </div>
        <div class="bg-[#EBD2FF] rounded-xl p-6 w-64 mx-auto shadow-lg h-72">
          <div class="bg-[#DAA8FD] w-64 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
            <h2 class="text-center text-xs font-medium w-56 mx-auto">Mobile Application Development (Android & iOS)</h2>
          </div>
          <div class="flex justify-center mb-4 mt-5">
            <img src="/mobile.png" alt="">
          </div>
          <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
          <div class="text-center">
            <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-1 rounded-xl hover:bg-[#7C4AAC]">
              Get It Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:block section two flex mt-10 mb-10">
      <div class="flex px-40">
        <div class="bg-[#EBD2FF] rounded-xl p-6 w-64 mx-auto shadow-lg h-72">
          <div class="bg-[#DAA8FD] w-64 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
            <h2 class="text-center text-xs font-medium">Dynamic Website Development</h2>
          </div>
          <div class="flex justify-center mb-6">
            <img src="/flash.png" alt="" class="mt-2">
          </div>
          <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
          <div class="text-center mt-7">
            <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 rounded-xl hover:bg-[#7C4AAC]">
              Get It Now
            </button>
          </div>
        </div>
        <div class="bg-[#EBD2FF] rounded-xl p-6 w-64 mx-auto shadow-lg h-72">
          <div class="bg-[#DAA8FD] w-64 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
            <h2 class="text-center text-xs font-medium">Blockchain Integration</h2>
          </div>
          <div class="flex justify-center mb-4">
            <img src="/chain.png" alt="" class="mt-6">
          </div>
          <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">5</span></p>
          <div class="text-center">
            <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-2 rounded-xl hover:bg-[#7C4AAC]">
              Get It Now
            </button>
          </div>
        </div>
        <div class="bg-[#EBD2FF] rounded-xl p-6 w-64 mx-auto shadow-lg h-72">
          <div class="bg-[#DAA8FD] w-64 h-16 py-7 rounded-tr-xl rounded-tl-xl -ml-6 -mt-6">
            <h2 class="text-center text-xs font-medium">Cloud Computing Solutions</h2>
          </div>
          <div class="flex justify-center mb-4">
            <img src="/cloud.png" alt="" class="mt-5">
          </div>
          <p class="text-center text-3xl font-normal font-serif mb-4 -mt-2">$ <span class="-ml-2 -mt-3">50</span></p>
          <div class="text-center">
            <button class="bg-[#7C4AAC] text-white font-light py-2 px-4 mt-1 rounded-xl hover:bg-[#7C4AAC]">
              Get It Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /end of desktop view -->

    <div>
      <p class="lg:text-xl mb-4 text-sm font-bold text-center w-96 lg:w-1/2 mx-auto mb-10">Ready to Showcase Your Products? <a href="#" class="text-[#984AF7]"><u>Click here</u></a> to sign up!</p>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({

});
</script>

<style>
/* Add your styles here */
</style>