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
      <h1 class="w-4/5 text-lg mx-auto font-semibold md:text-2xl">Meet The Founder And CEO <br> <span class="text-red-400">Yared </span>Solomon</h1>
      <div class="flex mx-4 mt-6 w-11/11 md:w-10/11 md:mx-auto">
        <div class="w-10/10 mx-auto">
          <img src="/yared2.jpeg" alt="" class="w-5/6 lg:h-80 md:h-90 rounded-full  ml-3">
          <div class="flex w-1/3 mx-auto mt-3 md:w-1/3 md:mx-auto">
            <a href="">

              <div class="mr-3 w-8 h-8 rounded-full bg-red-400 flex items-center justify-center">
                <i class="fa-brands fa-instagram text-white text-sm"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

              <div class="mr-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-white text-sm"></i>
              </div>
            </a>
          </div>
          <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

            <div class="w-2/3 mx-auto md:w-1/2 md:mx-auto md:mt-3 " >
  
              <button class="mt-2 bg-purple-500 text-white px-10 rounded-full   mb-3 text-xs py-2 cursor-pointer">Follow on LinkedIn</button>
            </div>
          </a>
        </div>

      </div>
      <div class="w-11/11 mb-2 bg-purple-200 pt-5 mx-1 mr-7  shadow-md">
          <div class="flex pb-2 px-2 ">
            <div @click="toggleAbout">
              <i class="fa-solid fa-caret-down"  v-if="aboutShow"></i>
              <i class="fa-solid fa-caret-left"  v-if="!aboutShow"></i>
            </div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold" :style="{ color: aboutShow ? 'red' : 'black' }"> About Yared Solomon</div>
              <div v-if="aboutShow" class="w-5/6 mx-auto mt-5"> 
                As the CEO of Heryakos Technology I bring a unique blend of leadership, technical expertise, and project management skills to drive innovation and success. With over five years of experience as a Fullstack Engineer, I have worked extensively with Flutter, ASP.NET Core, Python, AWS, and Golang, leading the development of scalable and efficient solutions.

My strong foundation in data structures and algorithms enhances my problem-solving abilities, allowing me to tackle complex challenges with precision. Beyond coding, I excel in project management, ensuring seamless execution of initiatives while fostering collaboration within teams. I am passionate about leveraging technology to create impactful solutions and driving my company toward new heights in the ever-evolving digital landscape.
              </div>
            </div>
          </div>
          <hr class="text-gray-400">
          <div class="flex pb-2 px-2 mt-4">
            <div @click="toggleSkill">
              <i class="fa-solid fa-caret-down"  v-if="skillShow"></i>
              <i class="fa-solid fa-caret-left"  v-if="!skillShow">

              </i></div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold" :style="{ color: skillShow ? 'red' : 'black' }">Skills</div>
              <div v-if="skillShow" class="w-10/10 mx-auto mt-5 ml-3">
<ul class="list-disc">
  <li>Project Managment </li>
  <li> Fullstack Development,</li>
  <li>Technical Team lead</li>

</ul>
              </div>
            </div>
          </div>
          <hr class="text-gray-400">
          <div class="flex pb-2 px-2 mt-4">
            <div @click="toggleAim">
              <i class="fa-solid fa-caret-down"  v-if="aimShow"></i>
              <i class="fa-solid fa-caret-left" v-if="!aimShow"></i>
            </div>
            <div>

              <div class="ml-2 text-sm mx-auto font-semibold" :style="{ color: aimShow ? 'red' : 'black' }">Aim</div>
              <div v-if="aimShow" class="w-5/6 mx-auto mt-5">
                My vision is to build an extraordinary and impactful company that tackles diverse enterprise challenges in the technology sector. I am committed to advancing Ethiopia in the field of AI, positioning it as a competitive player on the global stage. Additionally, I strive to create a company that empowers university students, equipping them with the skills and knowledge necessary to thrive in the job market. Through innovation, mentorship, and strategic problem-solving, my goal is to drive meaningful change and shape the future of technology in Ethiopia and beyond.
              </div>
            </div>
          </div>
        </div>
    </div>
    <!--large-->
<div class="hidden lg:block w-1/2 -mt-40 mx-auto">
<div class="flex w-10/10 mx-auto">
<div class="w-6/7 mx-auto">
  <h1 class="w-10/10 text-lg mx-auto font-semibold md:text-2xl mb-3">Meet The Founder And CEO <br> <span class="text-red-400">Yared</span> Solomon</h1>
  <div class=" w-11/10 mx-auto -ml-4">
          <img src="/yared2.jpeg" alt="" class="rounded-full w-6/7 h-82 ">
          <div class="flex w-1/3 mx-auto mt-3 ">
            <a href="">

              <div class="mr-3 w-8 h-8 rounded-full bg-red-400 flex items-center justify-center">
                <i class="fa-brands fa-instagram text-white text-sm"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

              <div class="mr-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-white text-sm"></i>
              </div>
            </a>
          </div>
          <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

            <div class=" w-2/4 ml-20 md:mt-3 " >
  
              <button class="mt-2  bg-purple-500 text-white px-10 rounded-full   mb-3 text-xs py-2 cursor-pointer">Follow on LinkedIn</button>
            </div>
          </a>
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
                As the CEO of Heryakos Technology I bring a unique blend of leadership, technical expertise, and project management skills to drive innovation and success. With over five years of experience as a Fullstack Engineer, I have worked extensively with Flutter, ASP.NET Core, Python, AWS, and Golang, leading the development of scalable and efficient solutions.

My strong foundation in data structures and algorithms enhances my problem-solving abilities, allowing me to tackle complex challenges with precision. Beyond coding, I excel in project management, ensuring seamless execution of initiatives while fostering collaboration within teams. I am passionate about leveraging technology to create impactful solutions and driving my company toward new heights in the ever-evolving digital landscape.
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
  <li>Project Managment</li>
  <li>Fullstack Development</li>
  <li>Technical Team lead</li>
 
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
                My vision is to build an extraordinary and impactful company that tackles diverse enterprise challenges in the technology sector. I am committed to advancing Ethiopia in the field of AI, positioning it as a competitive player on the global stage. Additionally, I strive to create a company that empowers university students, equipping them with the skills and knowledge necessary to thrive in the job market. Through innovation, mentorship, and strategic problem-solving, my goal is to drive meaningful change and shape the future of technology in Ethiopia and beyond.
              </div>
            </div>
          </div>
        </div>
</div>
</div>
</div>
<div class="hidden lg:block mt-60 w-1/2 mx-auto">
  <h1 class="text-center text-2xl font-bold " >Our Teams</h1>
      <div>
        <div class="flex mb-5 mx-2 mt-5 ">

          <div class="lgbox flex w-1/2  mx-auto h-35 bg-purple-400 text-white mr-10 text-xs rounded-md animated-card">

            <div class="w-1/2 mx-auto h-35  flex items-center">
              <img src="/yared2.jpeg" alt="" class="w-4/4 h-35  mx-auto   object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 mt-5 mx-auto flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">CEO</h1>
              <h1 class="text-sm mt-3">Yared Solomon</h1>
              <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

                <div class="mr-3 w-5 h-5 mt-10 rounded-full bg-white flex items-center justify-center ">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="lgbox1 flex w-1/2 mx-auto h-35 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/tigi.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Front-end Developer</h1>
              <h1  class="text-sm mt-3">Tiegist Girma</h1>
              <a href="https://www.linkedin.com/in/tiegist-hassen-b6b997233">

                <div class="mr-3 w-5 h-5 mt-10 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="lgbox flex w-1/2 mx-auto h-35 bg-purple-400 text-white mr-10 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/kal.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 mt-5 mx-auto flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Front-end Developer</h1>
              <h1 class="text-sm mt-3">Kalkidan Solomon</h1>
              <a href="https://linkedin.com/in/kalkidan-solomon-006542356">

                <div class="mr-3 w-5 h-5 mt-10 rounded-full bg-white flex items-center justify-center ">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="lgbox1 flex w-1/2 mx-auto h-35 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/businessman2.avif" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1  class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-10 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="lgbox flex w-1/2 mx-auto h-35 bg-purple-400 text-white mr-10 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/bisinessman4.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 mt-5 mx-auto flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1 class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-10 rounded-full bg-white flex items-center justify-center ">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
          <div class="lgbox1 flex w-1/2 mx-auto h-35 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/bisinessman1.jpg" alt="" class="w-4/4 h-35 mx-auto  object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto text-sm">Marketing Direct</h1>
              <h1  class="text-sm mt-3">Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-10 rounded-full bg-white flex items-center justify-center">
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
          <div class="smbox w-1/2 flex bg-purple-400 text-white mr-5 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto flex items-center">
              <img src="/yared.jpeg" alt="" class="w-13/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">CEO</h1>
              <h1>Yared Solomon</h1>
              <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

                <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="smbox1 w-1/2 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/tigi.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Front-end Developer</h1>
              <h1>Tiegist Girma</h1>
              <a href="https://www.linkedin.com/in/tiegist-hassen-b6b997233">

                <div class="mr-3 w-5 h-5 mt-3 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5">
          <div class="smbox w-1/2 flex bg-purple-400 text-white mr-5 text-xs rounded-md animated-card">
            <div class="w-1/3 mx-auto">
              <img src="/kal.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Front-end Developer</h1>
              <h1>kalkidan solomon</h1>
              <a href="https://linkedin.com/in/kalkidan-solomon-006542356">

                <div class="mr-3 w-5 h-5 mt-3 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="smbox1 w-1/2 flex bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/MariaFemaleWithTablate.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-10 mx-2">
          <div class="smbox flex bg-purple-400 text-white mr-5 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto">
              <img src="/MariaFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
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
              <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--middiwm-->
<div class="hidden md:block lg:hidden  md:w-2/3 md:mx-auto">
      <div>
        <div class="flex mb-5 mx-2 mt-5 ">
          <div class="mdbox w-1/2 flex bg-purple-400 text-white mr-10 text-xs rounded-md animated-card">
            <div class="w-1/3 mx-auto flex items-center">
              <img src="/yared.jpeg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">CEO</h1>
              <h1>Yared Solomon</h1>
              <a href="https://www.linkedin.com/in/yared-solomon-740a85184/">

                <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="mdbox1 flex w-1/2 bg-purple-400 text-white rounded-md pr-2 text-xs animated-card">
            <div class="w-1/3 flex items-center mx-auto">
              <img src="/tigi.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Front-end Developer</h1>

              <h1>Tiegist GIrma</h1>
              <a href="https://www.linkedin.com/in/tiegist-hassen-b6b997233">

                <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex mb-5 mx-2 mt-5">
          <div class="mdbox w-1/2 flex bg-purple-400 text-white mr-10 text-xs rounded-md animated-card">
            <div class="w-1/3 mx-auto">
              <img src="/kal.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Front-end Developer</h1>
              <h1>Kalkidan Solomon</h1>
              <a href="https://linkedin.com/in/kalkidan-solomon-006542356">

                <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                  <i class="fa-brands fa-linkedin text-black text-xs"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="mdbox1 w-1/2 flex bg-purple-400 text-white  text-xs rounded-md animated-card">
            <div class="w-1/2 flex items-center mx-auto">
              <img src="/bisinessman1.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
                <i class="fa-brands fa-linkedin text-black text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mb-10 mx-2">
          <div class="mdbox flex bg-purple-400 text-white mr-10 text-xs rounded-md animated-card">
            <div class="w-1/2 mx-auto">
              <img src="/MariaFemale.jpg" alt="" class="w-11/11 mx-auto h-22 object-cover rounded-md">
            </div>
            <div class="w-2/3 ml-2 flex flex-col justify-center">
              <h1 class="w-11/11 mx-auto">Marketing Direct</h1>
              <h1>Melissa Lowry</h1>
              <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
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
              <div class="mr-3 w-5 h-5 mt-5 rounded-full bg-white flex items-center justify-center">
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
          
            transform: 'translateX(0)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-30px)';
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
          
            transform: 'translateX(10px)',
          }, {
            duration: 1.8,
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
          entry.target.classList.add('visible2');
          animate(entry.target, {
            opacity: 1,
            transform: 'translateX(10px)',
          }, {
            duration: 1.1,
            easing: [0.17, 0.55, 0.55, 1],
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible2');
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
          entry.target.classList.add('mdvisible2');
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
            transform: 'translateX(10px)',
          }, {
            duration: 1.8,
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