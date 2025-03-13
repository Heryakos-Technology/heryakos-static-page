<template>
    <div class="lg:px-20 md:mb-10 lg:mb-20 lg:-mt-32 hidden md:pt-24 md:block">
        <img src="/light-bulb-of-blog-page.png" alt=""
            class=" mt-5 md:w-1/2 md:ml-88 relative lg:w-2/3 lg:ml-auto lg:mr-0 lg:flex lg:justify-end lg:mt-10 lg:p-28 animated-image">
        <div class="lg:-mt-40 lg:ml-36 animated-text">
            <div class="w-11/12 h-44 md:ml-10  md:w-4/9 md:-mt-72 md:h-64   bg-white absolute -mt-14 lg:w-2/5 lg:h-88 lg:-mt-96">
                <p class="text-sm  pt-5 pl-5 pr-4 md:text-lg md:w-11/12 md:ml-10 lg:text-xl lg:w-11/12 lg:mx-auto lg:mt-6">
                    <span class="text-purple-700 font-bold">Welcome to our blog,</span> where insights and inspiration
                    converge. Explore a curated collection of articles that delve into diverse topics, from industry
                    trends to personal reflections. Join us on this journey of discovery and knowledge, as we share
                    thought-provoking content designed to engage and elevate your understanding.
                </p>
            </div>
        </div>
    </div>

    <div class="block md:hidden">
        <img src="/light-bulb-of-blog-page.png" alt="" class="w-4/5 ml-16 mt-5 relative animated-image">
        <div class="w-11/12 h-44 bg-white absolute -mt-14 animated-text">
            <p class="text-wrap text-sm ml-2 pt-5 pl-5 pr-4  "><span class="text-purple-700 font-bold">Welcome to our
                    blog,</span> where insights and inspiration converge. Explore a curated collection of articles that
                delve into diverse topics, from industry trends to personal reflections. Join us on this journey of
                discovery and knowledge, as we share thought-provoking content designed to engage and elevate your
                understanding.</p>
        </div>
    </div>
    <!-- mobile size -->
    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-40 pb-5 mb-10 h-fit block md:hidden " 
        ref="card">
        <img src="/cardfirst-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">The Future of Healthcare: Technology Meets
                Compassion</p>
            <p class="ml-4 text-sm mt-2 font-semibold">August 30, 2024 <span class="font-bold text-lg ml-3 mr-3">.
                </span> Healthcare</p>
            <p class="w-56 ml-4 mt-3 text-sm" >innovations like AI and telemedicine are reshaping healthcare. By blending
                cutting-edge technology with heartfelt care, we can ensure that every patient
                <span v-if="readmore[0]" class="text-sm md:text-xs"> outcomes but also fosters a more efficient healthcare system that can adapt to the evolving needs of society.</span>
            </p>
            <div class="flex ml-4" @click="showContent1">
                <p class="text-purple-600">{{ readmore[0] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 mb-10 h-fit block md:hidden " 
        ref="card">
        <img src="/cardsecond-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white ml-3.5  -mt-8 animated-content">
            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Exploring Web & Mobile Development</p>

            <p class="ml-4 text-sm mt-2 font-semibold">August 2, 2024 <span class="font-bold text-lg ml-3 mr-3">.
                </span> Software</p>
            <p class="w-56 ml-4 mt-3 text-sm">Explore the dynamic world of web and mobile development, where creativity
                meets technology. From responsive designs to
                <span v-if="readmore[1]" class="text-sm md:text-xs"> intuitive user interfaces, developers are crafting seamless experiences that engage users across various platforms.</span>
            </p>
            <div class="flex ml-4" @click="showContent2">
                <p class="text-purple-600">{{ readmore[1] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 h-fit mb-10 block md:hidden " 
        ref="card">
        <img src="/cardthird-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Cloud Technology Revolutionizing Business in 2025
            </p>
            <p class="ml-4 text-sm mt-2 font-semibold">january 30, 2025 <span class="font-bold text-lg ml-3 mr-3">.
                </span> Technology</p>
            <p class="w-56 ml-4 mt-3 text-sm">Cloud technology is reshaping the business landscape in 2025 by enhancing
                operational efficiency, enabling seamless collaboration, and
                <span v-if="readmore[2]" class="text-sm md:text-xs"> scalable solutions that adapt to ever-changing demands. Companies can now access powerful tools and resources from anywhere.</span>
            </p>
            <div class="flex ml-4" @click="showContent3">
                <p class="text-purple-600">{{ readmore[2] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 h-fit mb-10 block md:hidden " 
        ref="card">
        <img src="/cardfourth-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Enhancing Business Operations Through Online
                Platforms</p>
            <p class="ml-4 text-sm mt-2 font-semibold">march 2, 2025 <span class="font-bold text-lg ml-3 mr-3">. </span>
                Business</p>
            <p class="w-56 ml-4 mt-3 text-sm">Business companies are increasingly leveraging online platforms to
                optimize their operations and drive growth. Services like
                <span v-if="readmore[3]" class="text-sm md:text-xs"> e-commerce solutions, cloud-based project management tools, and digital marketing platforms allow businesses to streamline processes and reach wider audiences.</span>
            </p>
            <div class="flex ml-4" @click="showContent4">
                <p class="text-purple-600">{{ readmore[3] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 h-fit mb-10  block md:hidden " 
        ref="card">
        <img src="/smart-hotel-blog.jpg" alt="" class="w-11/12 h-72 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800"> Smart Hotels</p>
            <p class="ml-4 text-sm mt-2 font-semibold">march 2, 2025 <span class="font-bold text-lg ml-3 mr-3">. </span>
                technology</p>
            <p class="w-56 ml-4 mt-3 text-sm">Hotels are increasingly integrating technology to elevate guest
                experiences, utilizing automation, smart room features, and mobile apps. These innovations
                <span v-if="readmore[4]" class="text-sm md:text-xs">These intuitive user interfaces are helping developers craft seamless experiences that engage users across various platforms.</span>
            </p>
            <div class="flex ml-4" @click="showContent5">
                <p class="text-purple-600">{{ readmore[4] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5  mb-10 h-fit  block md:hidden " 
        ref="card">
        <img src="/digital-travling-blog.jpg" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Preparing for Your Journey in the Digital Age</p>
            <p class="ml-4 text-sm mt-2 font-semibold">march 2, 2025 <span class="font-bold text-lg ml-3 mr-3">. </span>
                Business</p>
            <p class="w-56 ml-4 mt-3 text-sm">Digital travel revolutionizes journey planning by using technology for
                booking, navigation, and local insights. By leveraging apps
                <span v-if="readmore[5]" class="text-sm md:text-xs"> access resources that enhance their travel experiences and streamline their itineraries.</span>
            </p>
            <div class="flex ml-4" @click="showContent6">
                <p class="text-purple-600">{{ readmore[5] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>


    <!-- /end of mobile -->
    <!-- desktop view-->
    <div class="  mx-auto px-10 md:px-10 lg:px-16   hidden  md:block">
        <div class="flex">
            <div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto pb-2 h-fit mb-10 mr-10 card left-entry" ref="card">
        <img src="/cardfirst-blog.png" alt="" class="rounded-lg w-9/10 md:1/2 h-4/5 pt-6 mx-auto relative animated-image">
        <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5.5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-16 animated-content">
            <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">The Future of Healthcare Technology Meets Compassion</p>
            <p class="lg:h-5  w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">August 30, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Healthcare</p>
            <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm lg:ml-4 lg:font-semibold  md:w-11/12 md:ml-2">
                Innovations like AI and telemedicine are reshaping healthcare. By blending cutting-edge technology with heartfelt care, we can ensure that every patient
                <span v-if="readmore[0]" class="lg:text-md md:text-sm lg:font-semibold"> outcomes but also fosters a more efficient healthcare system that can adapt to the evolving needs of society.</span>
            </p>
            <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-4" @click="showContent1">
                <p class="text-purple-600  md:text-md">{{ readmore[0] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardsecond-blog.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5.5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-16 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Exploring Web & Mobile Development</p>
        <p class="lg:h-5  w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold ">August 2, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Software</p>
        
        <p class=" w-64 mx-auto ml-6 mt-3  md:text-sm  lg:font-semibold lg:ml-4 md:w-11/12 md:ml-2">
            Explore the dynamic realm of web and mobile development, where creativity meets technology. From responsive designs to interactive features, the
            <span v-if="readmore[1]" class=" md:text-sm lg:font-semibold"> intuitive user interfaces, developers are crafting seamless experiences that engage users across various platforms.</span>
        </p>

        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-4" @click="showContent2">
            <p class="text-purple-600  md:text-md">{{ readmore[1] ? 'Read less' : 'Read more' }}</p>
            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>
<!-- ////////////////////////////////////////// -->

<div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/smart-hotel-blog.jpg" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-3 bg-white md:w-54 lg:ml-5.5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-16 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Smart Hotels</p>
        <p class="lg:h-5  w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">August 2, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Software</p>
        <p class=" w-64 mx-auto ml-6 mt-3  md:text-sm  lg:font-semibold lg:ml-4 md:w-11/12 md:ml-2">
            Hotels are increasingly integrating technology to elevate guest experiences, utilizing automation, smart room features, and mobile apps. 
            <span v-if="readmore[2]" class=" md:text-sm lg:font-semibold">These intuitive user interfaces are helping developers craft seamless experiences that engage users across various platforms.</span>
        </p>
        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 md:pb-3 lg:ml-4" @click="showContent3">
                <p class="text-purple-600  md:text-md">{{ readmore[2] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>


        </div>
    </div>


    <div class="  mx-auto md:px-10 lg:px-16 px-10 hidden  md:block -mt-20">
        <div class="flex ">
            <div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto mt-20 pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardthird-blog.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5.5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-16 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Cloud Technology Revolutionizing Business in 2025</p>
        <p class="lg:h-5  w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">January 30, 2025 <span class="font-bold text-sm ml-3 mr-3">. </span> Technology</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  lg:font-semibold lg:ml-4 md:w-11/12 md:ml-2">Cloud technology is reshaping the business landscape in 2025 by enhancing operational efficiency, enabling seamless collaboration, and providing access to 
            <span v-if="readmore[3]" class="lg:text-md md:text-sm lg:font-semibold"> scalable solutions that adapt to ever-changing demands. Companies can now access powerful tools and resources from anywhere.</span>
        </p>
        <div class="flex ml-6 mt-3 cursor-pointer md:ml-2 lg:ml-4" @click="showContent4">
                <p class="text-purple-600 md:text-md">{{ readmore[3] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>

<div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto mt-20 pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardfourth-blog.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5.5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-16 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Enhancing Business Operations Through Online Platforms</p>
        <p class="lg:h-5  w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">March 2, 2025 <span class="font-bold text-sm ml-3 mr-3">. </span> Business</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  lg:font-semibold lg:ml-4 md:w-11/12 md:ml-2">Business companies are increasingly leveraging online platforms to optimize their operations and drive growth. Services like e-commerce, digital 
            <span v-if="readmore[4]" class="lg:text-md md:text-sm lg:font-semibold"> e-commerce solutions, cloud-based project management tools, and digital marketing platforms allow businesses to streamline processes and reach wider audiences.</span>
        </p>
        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-4" @click="showContent5">
                <p class="text-purple-600 md:text-md">{{ readmore[4] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>

<div class="bg-[#ece3ff] w-11/12 md:w-4/5 md:mr-2 rounded-lg mx-auto mt-20 pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/digital-travling-blog.jpg" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5.5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-16 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Preparing for Your Journey in the Digital Age</p>
        <p class="lg:h-5  w-64 mx-auto text-sm md:text-xs md:w-11/12 md:h-4 mt-2 font-semibold">March 2, 2025 <span class="font-bold text-sm ml-3 mr-3">. </span> Business</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm  lg:font-semibold lg:ml-4 md:w-11/12 md:ml-2">Digital travel revolutionizes journey planning by using technology for booking, navigation, and local insights. By leveraging apps, travelers can 
            <span v-if="readmore[5]" class="lg:text-md md:text-sm lg:font-semibold"> access resources that enhance their travel experiences and streamline their itineraries.</span>
        </p>
        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-4" @click="showContent6">

                <p class="text-purple-600 lg:text md:text-md">{{ readmore[5] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>

        </div>
    </div>

    <!-- /end of desktop -->


    <p class="w-40 text-xl mx-auto font-bold mb-5">Popular Posts</p>

    <!-- mobile -->
    <div class="w-11/12 bg-[#F3E4FF] pb-10 mx-auto block md:hidden">

        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-md">
            <img src="/popularpostfirst-blog.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34 rounded-tl-md">
                <p class="font-bold text-2xl text-center ">1</p>
            </div>

            <p class="w-64 text-md font-semibold mt-4 mx-auto">Enhancing Business Operations Through Online Platforms
            </p>
            <p class="text-sm w-64 mx-auto mt-6">march 15, 2024 . Business</p>

        </div>

        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-md">
            <img src="/popularpostssecond-blog.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34 rounded-tl-md">
                <p class="font-bold text-2xl text-center">2</p>
            </div>
            <p class="w-64 text-md font-semibold mt-4 mx-auto">The Future of Healthcare: Technology Meets Compassion</p>

            <p class="text-sm w-64 mx-auto mt-6"> August 30, 2024 . Healthcare</p>

        </div>

        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-md">
            <img src="/popularpoststhird-blog.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34 rounded-tl-md">
                <p class="font-bold text-2xl text-center">3</p>
            </div>
            <p class="w-64 text-md font-semibold mt-4 mx-auto">Exploring Web & Mobile Development</p>

            <p class="text-sm w-64 mx-auto mt-6"> july 30, 2024 . Software</p>
        </div>
    </div>
    <!-- /end of mobile -->
    <!-- desktop -->
    <div class="w-11/12  pb-10 mx-auto hidden md:block mb-20">

        <div class="flex">
            <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 mr-10 rounded-lg card last-three"  ref="card">
                <img src="/popularpostfirst-blog.png" alt="" class="w-full relative">
                <div class="w-10 h-10 bg-[#f7f3fe] absolute lg:-mt-44 md:-mt-26">
                    <p class="font-bold lg:text-2xl text-center md:text-md ">1</p>
                </div>
                <p class="w-full text-center h-6 lg:text-md font-semibold mt-4 mx-auto md:text-sm">Enhancing Business Operations Through Online
                    Platforms</p>
                <p class="lg:text-md font-medium text-center w-64 mx-auto mt-6 md:text-sm">march 15, 2024 . Business</p>
            </div>

            <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 mr-10 rounded-lg card last-three"  ref="card">
                <img src="/popularpostssecond-blog.png" alt="" class="w-full relative">
                <div class="w-10 h-10 bg-[#f7f3fe] absolute lg:-mt-44 md:-mt-26">
                    <p class="font-bold lg:text-2xl text-center md:text-md ">2</p>
                </div>
                <p class="w-full text-center h-6 lg:text-md font-semibold mt-4 mx-auto md:text-sm">The Future of Healthcare Technology Meets Compassion
                </p>
                <p class="lg:text-md font-medium text-center w-64 mx-auto mt-6 md:text-sm"> August 30, 2024 . Healthcare</p>
            </div>

            <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-lg card last-three"  ref="card">
                <img src="/popularpoststhird-blog.png" alt="" class="w-full relative">
                <div class="w-10 h-10 bg-[#f7f3fe] absolute lg:-mt-44 md:-mt-26">
                    <p class="font-bold lg:text-2xl text-center md:text-md ">3</p>
                </div>
                <p class="w-full text-center h-6 lg:text-md font-semibold mt-4 mx-auto md:text-sm">Exploring Web & Mobile Development</p>
                <p class="lg:text-md font-medium text-center w-64 mx-auto mt-6 md:text-sm"> july 30, 2024 . Software</p>
            </div>
        </div>
    </div>
<!-- end of section -->

</template><script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const readmore = ref([false, false, false, false, false, false]); // Track read-more states for each card
        const observer = ref(null);

        const showContent = (index) => {
            readmore.value[index] = !readmore.value[index]; // Toggle the respective index
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        onMounted(() => {
            observer.value = new IntersectionObserver(handleIntersect);
            const cards = document.querySelectorAll('.card');

            // Initially set all cards to visible on mount
            cards.forEach(card => {
                card.classList.add('visible');
            });

            // Observe each card for scroll events
            cards.forEach(card => {
                observer.value.observe(card);
            });
        });

        onBeforeUnmount(() => {
            if (observer.value) {
                observer.value.disconnect();
            }
        });

        return {
            readmore,
            showContent1: () => showContent(0),
            showContent2: () => showContent(1),
            showContent3: () => showContent(2),
            showContent4: () => showContent(3),
            showContent5: () => showContent(4),
            showContent6: () => showContent(5),
        };
    },
};
</script>
<style scoped>
.card {
    opacity: 0; 
    transition: opacity 1s ease-in-out; 
}

.card.visible {
    opacity: 1; 
}

.animated-image {
    opacity: 0;
    transform: translateY(-50px);
    animation: slideInImage 1s forwards;
}

.animated-text {
    opacity: 0;
    transform: translateX(-100px);
    animation: slideInText 1s forwards;
    animation-delay: 1s;
}

@keyframes slideInImage {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInText {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.last-three {
    opacity: 0;
    transform: translateX(-100px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.last-three.visible {
    opacity: 1;
    transform: translateX(0);
}
</style>