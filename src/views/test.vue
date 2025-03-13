<template>
 <!-- desktop view-->
 <div class=" w-11/12 mx-auto px-10 md:px-4 hidden  md:block">
        <div class="flex">
            <div class="bg-[#ece3ff] w-1/2  md:w-4/5 md:mr-2 rounded-lg mx-auto pb-26 mb-10 mr-10 card left-entry" ref="card">
        <img src="/cardfirst-blog.png" alt="" class="rounded-lg w-9/10 md:1/2 h-4/5 pt-6 mx-auto relative animated-image">
        <div class="lg:w-2/9   pb-6 bg-white md:w-54  lg:ml- md:ml-3 md:rounded-sm  rounded-lg ml-5 absolute -mt-16 animated-content">
            <p class="lg:h-18 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">The Future of Healthcare Technology Meets Compassion</p>
            <p class="h-5 w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">August 30, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Healthcare</p>
            <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  lg:font-semibold  md:w-11/12 md:ml-2">
                Innovations like AI and telemedicine are reshaping healthcare. By blending cutting-edge technology with heartfelt care, we can ensure that every patient
                <span v-if="readmore[0]" class="lg:text-md md:text-sm lg:font-semibold"> outcomes but also fosters a more efficient healthcare system that can adapt to the evolving needs of society.</span>
            </p>
            <div class="flex ml-6 mt-2 cursor-pointer md:ml-2" @click="showContent1">
                <p class="text-purple-600 lg:text-md md:text-sm">{{ readmore[0] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-1 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-1/2 md:w-4/5 md:mr-2 rounded-lg mx-auto pb-26 mb-10 mr-10 card left-entry" ref="card">
    <img src="/cardsecond-blog.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-2/9   pb-6 bg-white md:w-54  lg:ml- md:ml-3 md:rounded-sm  rounded-lg ml-5 absolute -mt-16 animated-content">
        <p class="lg:h-18 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Exploring Web & Mobile Development</p>
        <p class="h-5 w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold ">August 2, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Software</p>
        
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  md:w-11/12 md:ml-2 lg:font-semibold">
            Explore the dynamic realm of web and mobile development, where creativity meets technology. From responsive designs to interactive features, the
            <span v-if="readmore[1]" class="lg:text-md md:text-sm lg:font-semibold"> intuitive user interfaces, developers are crafting seamless experiences that engage users across various platforms.</span>
        </p>

        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2" @click="showContent2">
            <p class="text-purple-600 lg:text-md md:text-sm">{{ readmore[1] ? 'Read less' : 'Read more' }}</p>
            <i class="fa-solid fa-arrow-right mt-1 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>


<div class="bg-[#ece3ff] w-1/2 md:w-4/5 md:mr-2 rounded-lg mx-auto pb-26 mb-10 card left-entry" ref="card">
    <img src="/smart-hotel-blog.jpg" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-2/9 pb-6 bg-white rounded-lg ml-5 md:w-54 md:ml-3 md:rounded-sm  absolute -mt-16 animated-content">
        <p class="lg:h-18 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Smart Hotels</p>
        <p class="h-5 w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">August 2, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Software</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  md:w-11/12 md:ml-2 lg:font-semibold">
            Hotels are increasingly integrating technology to elevate guest experiences, utilizing automation, smart room features, and mobile apps. 
            <span v-if="readmore[2]" class="lg:text-md md:text-sm lg:font-semibold">These intuitive user interfaces are helping developers craft seamless experiences that engage users across various platforms.</span>
        </p>
        <div class="ml-10 cursor-pointer h-20" @click="showContent3">
            <div class="flex md:-ml-8 -ml-4 md:h-10 md:mt-2">
                <p class="text-purple-600 lg:text-md md:text-sm">{{ readmore[2] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-1 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>
</div>


        </div>
    </div>


    <div class=" w-11/12 mx-auto md:px-4 px-10 hidden  md:block -mt-20">
        <div class="flex ">
            <div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto mt-20 pb-26 mb-10 mr-10 card left-entry" ref="card">
    <img src="/cardthird-blog.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-2/9  pb-6 bg-white rounded-lg ml-5 md:w-54 md:ml-3 md:rounded-sm  absolute -mt-16 animated-content">
        <p class="lg:h-18 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Cloud Technology Revolutionizing Business in 2025</p>
        <p class="h-5 w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">January 30, 2025 <span class="font-bold text-sm ml-3 mr-3">. </span> Technology</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  md:w-11/12 md:ml-2 lg:font-semibold">Cloud technology is reshaping the business landscape in 2025 by enhancing operational efficiency, enabling seamless collaboration, and providing access to 
            <span v-if="readmore[3]" class="lg:text-md md:text-sm lg:font-semibold"> scalable solutions that adapt to ever-changing demands. Companies can now access powerful tools and resources from anywhere.</span>
        </p>
        <div class="ml-12 cursor-pointer h-20" @click="showContent4">
            <div class="flex md:-ml-10 -ml-6 md:h-10 md:mt-2">
                <p class="text-purple-600 lg:text-md md:text-sm">{{ readmore[3] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-1 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>
</div>

<div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto mt-20 pb-26 mb-10 card left-entry" ref="card">
    <img src="/cardfourth-blog.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-2/9 pb-6 bg-white rounded-lg ml-5 md:w-54 md:ml-3 md:rounded-sm  absolute -mt-16 animated-content">
        <p class="lg:h-18 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Enhancing Business Operations Through Online Platforms</p>
        <p class="h-5 w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">March 2, 2025 <span class="font-bold text-sm ml-3 mr-3">. </span> Business</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  md:w-11/12 md:ml-2 lg:font-semibold">Business companies are increasingly leveraging online platforms to optimize their operations and drive growth. Services like e-commerce, digital 
            <span v-if="readmore[4]" class="lg:text-md md:text-sm lg:font-semibold"> e-commerce solutions, cloud-based project management tools, and digital marketing platforms allow businesses to streamline processes and reach wider audiences.</span>
        </p>
        <div class="ml-12 cursor-pointer h-20" @click="showContent5">
            <div class="flex md:-ml-10 -ml-6 md:h-10 md:mt-2">
                <p class="text-purple-600 lg:text-md md:text-sm">{{ readmore[4] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-1 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>
</div>

<div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto mt-20 pb-26 mb-10 card left-entry" ref="card">
    <img src="/digital-travling-blog.jpg" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-2/9  pb-6 bg-white rounded-lg ml-5 md:w-54 md:ml-3 md:rounded-sm  absolute -mt-16 animated-content">
        <p class="lg:h-18 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Preparing for Your Journey in the Digital Age</p>
        <p class="h-5 w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">March 2, 2025 <span class="font-bold text-sm ml-3 mr-3">. </span> Business</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  md:w-11/12 md:ml-2 lg:font-semibold">Digital travel revolutionizes journey planning by using technology for booking, navigation, and local insights. By leveraging apps, travelers can 
            <span v-if="readmore[5]" class="lg:text-md md:text-sm lg:font-semibold"> access resources that enhance their travel experiences and streamline their itineraries.</span>
        </p>
        <div class="ml-12 cursor-pointer h-20" @click="showContent6">
            <div class="flex md:-ml-10 -ml-6 md:h-10 md:mt-2">
                <p class="text-purple-600 lg:text-md md:text-sm">{{ readmore[5] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-1 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>
</div>

        </div>
    </div>

    <!-- /end of desktop -->  
</template>

<script>
export default {

}
</script>

<style>

</style>