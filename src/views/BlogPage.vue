<template>
<div class="lg:px-20 md:mb-20 lg:-mt-32 hidden md:pt-24 md:block">
    <img src="/light-bulb-of-blog-page.png" alt=""
        class="w-2/3 mt-5 md:w-2/3 md:ml-72 relative lg:w-2/3 lg:ml-auto lg:mr-0 lg:flex lg:justify-end lg:mt-10 lg:p-28 animated-image">
    <div class="lg:-mt-40 lg:ml-36 animated-text">
        <div class="w-11/12 h-44 md:ml-20 md:w-4/5 bg-white absolute -mt-14 lg:w-2/5 lg:h-96 lg:-mt-96">
            <p class="text-sm  pt-5 pl-5 pr-4 md:text-lg md:w-11/12 lg:text-2xl lg:w-11/12 lg:mx-auto lg:mt-6">
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
    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-40 pb-56 mb-10 block md:hidden card" :class="{ visible: isVisible }" ref="card">
        <img src="/cardfirst-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64 h-56 bg-white ml-3.5 absolute -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">The Future of Healthcare: Technology Meets
                Compassion</p>
            <p class="ml-4 text-sm mt-2 font-semibold">August 30, 2024 <span class="font-bold text-lg ml-3 mr-3">.
                </span> Healthcare</p>
            <p class="w-56 ml-4 mt-3 text-sm">innovations like AI and telemedicine are reshaping healthcare. By blending
                cutting-edge technology with heartfelt care, we can ensure that every patient_</p>

            <div class="flex ml-4">
                <p class="text-purple-600">Read more</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-56 mb-10 block md:hidden card" :class="{ visible: isVisible }" ref="card">
        <img src="/cardsecond-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64 h-56 bg-white ml-3.5 absolute -mt-8 animated-content">
            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Exploring Web & Mobile Development</p>

            <p class="ml-4 text-sm mt-2 font-semibold">August 2, 2024 <span class="font-bold text-lg ml-3 mr-3">.
                </span> Software</p>
            <p class="w-56 ml-4 mt-3 text-sm">Explore the dynamic world of web and mobile development, where creativity
                meets technology. From responsive designs to_</p>

            <div class="flex ml-4">
                <p class="text-purple-600">Read more</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-56 mb-10 block md:hidden card" :class="{ visible: isVisible }" ref="card">
        <img src="/cardthird-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64 h-56 bg-white ml-3.5 absolute -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Cloud Technology Revolutionizing Business in 2025
            </p>
            <p class="ml-4 text-sm mt-2 font-semibold">january 30, 2025 <span class="font-bold text-lg ml-3 mr-3">.
                </span> Technology</p>
            <p class="w-56 ml-4 mt-3 text-sm">Cloud technology is reshaping the business landscape in 2025 by enhancing
                operational efficiency, enabling seamless collaboration, and_</p>

            <div class="flex ml-4">
                <p class="text-purple-600">Read more</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-56 mb-10 block md:hidden card" :class="{ visible: isVisible }" ref="card">
        <img src="/cardfourth-blog.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64 h-56 bg-white ml-3.5 absolute -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Enhancing Business Operations Through Online
                Platforms</p>
            <p class="ml-4 text-sm mt-2 font-semibold">march 2, 2025 <span class="font-bold text-lg ml-3 mr-3">. </span>
                Business</p>
            <p class="w-56 ml-4 mt-3 text-sm">Business companies are increasingly leveraging online platforms to
                optimize their operations and drive growth. Services like_</p>

            <div class="flex ml-4">
                <p class="text-purple-600">Read more</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-56 mb-10 block md:hidden card" :class="{ visible: isVisible }" ref="card">
        <img src="/smart-hotel-blog.jpg" alt="" class="w-11/12 h-72 pt-6 mx-auto relative animated-image">
        <div class="w-64 h-56 bg-white ml-3.5 absolute -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800"> Smart Hotels</p>
            <p class="ml-4 text-sm mt-2 font-semibold">march 2, 2025 <span class="font-bold text-lg ml-3 mr-3">. </span>
                technology</p>
            <p class="w-56 ml-4 mt-3 text-sm">Hotels are increasingly integrating technology to elevate guest experiences, utilizing automation, smart room features, and mobile apps. These innovations_</p>

            <div class="flex ml-4">
                <p class="text-purple-600">Read more</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-56 mb-10 block md:hidden card" :class="{ visible: isVisible }" ref="card">
        <img src="/digital-travling-blog.jpg" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64 h-56 bg-white ml-3.5 absolute -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Preparing for Your Journey in the Digital Age</p>
            <p class="ml-4 text-sm mt-2 font-semibold">march 2, 2025 <span class="font-bold text-lg ml-3 mr-3">. </span>
                Business</p>
            <p class="w-56 ml-4 mt-3 text-sm">Digital travel revolutionizes journey planning by using technology for booking, navigation, and local insights. By leveraging apps_</p>

            <div class="flex ml-4">
                <p class="text-purple-600">Read more</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>


    <!-- /end of mobile -->
    <!-- desktop view-->
    <div class=" w-11/12 mx-auto px-10 hidden  md:block">
        <div class="flex">
            <div class="bg-[#ece3ff] w-1/2 md:w-1/2 mx-auto pb-26 mb-10 mr-10 card" 
     :class="{ visible: isVisible }" 
     ref="card">
    <img src="/cardfirst-blog.png" alt="" 
         class="w-9/10 md:1/2 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="w-1/5 h-56 md:4/5 pb-6 bg-white ml-5 absolute -mt-16  animated-content">
        <p class="w-64 mx-auto mt-2 text-md font-bold text-gray-800">The Future of Healthcare Technology Meets Compassion</p>
        <p class="w-64 mx-auto text-sm mt-2 font-semibold">August 30, 2024 <span class="font-bold text-sm ml-3 mr-3">. </span> Healthcare</p>
        <p class="w-72 mx-auto mt-3 text-sm">Innovations like AI and telemedicine are reshaping healthcare. By blending cutting-edge technology with heartfelt care, we can ensure that every patient...</p>
        <div class="ml-8 cursor-pointer" @click="showContent">
            <div v-if="readmore">
                Outcomes but also fosters a more efficient healthcare system that can adapt to the evolving needs of society.
            </div>
            <div class="flex -ml-6">
                <p class="text-purple-600">{{ readmore ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>
</div>
            <div class="bg-[#ece3ff] w-1/2 md:w-1/2 mx-auto md- mr-10 pb-26 mb-10 card" :class="{ visible: isVisible }" ref="card">
                <img src="/cardsecond-blog.png" alt="" class="w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
                <div class="w-1/5 h-56 pb-6  bg-white ml-5 absolute -mt-16 animated-content">
                    <p class="w-64 mx-auto mt-2  text-md font-bold text-gray-800">Exploring Web & Mobile Development</p>
                    <p class="w-64 mx-auto text-sm mt-2 font-semibold">August 2, 2024 <span
                            class="font-bold text-sm ml-3 mr-3">. </span> Software</p>
                    <p class="w-72 mx-auto mt-3 text-sm">Explore the dynamic world of web and mobile development, where
                        creativity meets technology. From responsive designs to_</p>
                    <div class=" ml-8 cursor-pointer" @click="showContent">
                        <div v-if="readmore">
                            intuitive user interfaces, developers are crafting seamless experiences that engage users
                            across various platforms.
                        </div>
                        <div class="flex -ml-6">
                            <p class="text-purple-600">{{ readmore ? 'Read less' : 'Read more' }}</p>
                            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
                        </div>
                    </div>

                </div>
            </div>


            <div class="bg-[#ece3ff] w-1/2 md:w-1/2 mx-auto md-  pb-26 mb-10 card" :class="{ visible: isVisible }" ref="card">
                <img src="/smart-hotel-blog.jpg" alt="" class="w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
                <div class="w-1/5 h-56 pb-6  bg-white ml-5 absolute -mt-16 animated-content">
                    <p class="w-64 mx-auto mt-2  text-md font-bold text-gray-800">Smart Hotels</p>
                    <p class="w-64 mx-auto text-sm mt-2 font-semibold">August 2, 2024 <span
                            class="font-bold text-sm ml-3 mr-3">. </span> Software</p>
                    <p class="w-72 mx-auto mt-3 text-sm">Hotels are increasingly integrating technology to elevate guest experiences, utilizing automation, smart room features, and mobile apps. These innovations_</p>
                    <div class=" ml-8 cursor-pointer" @click="showContent">
                        <div v-if="readmore">
                            intuitive user interfaces, developers are crafting seamless experiences that engage users
                            across various platforms.
                        </div>
                        <div class="flex -ml-6">
                            <p class="text-purple-600">{{ readmore ? 'Read less' : 'Read more' }}</p>
                            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>


    <div class=" w-11/12 mx-auto px-10 hidden  md:block -mt-20">
        <div class="flex ">
            <div class="bg-[#ece3ff] w-11/12 mx-auto mt-20 pb-26 mb-10 mr-10 card" :class="{ visible: isVisible }" ref="card">
                <img src="/cardthird-blog.png" alt="" class="w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
                <div class="w-1/5 h-56 pb-6  bg-white ml-5 absolute -mt-16 animated-content">
                    <p class="w-64 mx-auto mt-2  text-md font-bold text-gray-800">Cloud Technology Revolutionizing
                        Business in 2025</p>
                    <p class="w-64 mx-auto text-sm mt-2 font-semibold">january 30, 2025 <span
                            class="font-bold text-sm ml-3 mr-3">. </span> Technology</p>
                    <p class="w-72 mx-auto mt-3 text-sm">Cloud technology is reshaping the business landscape in 2025 by
                        enhancing operational efficiency, enabling seamless collaboration, and_</p>
                    <div class=" ml-8 cursor-pointer" @click="showContent">
                        <div v-if="readmore">
                            providing businesses with scalable solutions that adapt to ever-changing demands. Companies
                            can now access powerful tools and resources from anywhere.
                        </div>
                        <div class="flex -ml-6">
                            <p class="text-purple-600">{{ readmore ? 'Read less' : 'Read more' }}</p>
                            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-[#ece3ff] w-11/12 mx-auto mt-20 pb-26 mb-10 card" :class="{ visible: isVisible }" ref="card">
                <img src="/cardfourth-blog.png" alt="" class="w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
                <div class="w-1/5 h-56 pb-6  bg-white ml-5 absolute -mt-16 animated-content">
                    <p class="w-64 mx-auto mt-2  text-md font-bold text-gray-800">Enhancing Business Operations Through
                        Online Platforms</p>
                    <p class="w-64 mx-auto text-md mt-2 font-semibold">march 2, 2025 <span
                            class="font-bold text-sm ml-3 mr-3">. </span> Business</p>
                    <p class="w-72 mx-auto mt-3 text-sm">Business companies are increasingly leveraging online platforms
                        to optimize their operations and drive growth. Services like_</p>
                    <div class=" ml-8 cursor-pointer" @click="showContent">
                        <div v-if="readmore">
                            e-commerce solutions, cloud-based project management tools, and digital marketing platforms
                            allow businesses to streamline processes and reach wider audiences.
                        </div>
                        <div class="flex -ml-6">
                            <p class="text-purple-600">Read more</p>
                            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
                        </div>
                    </div>

                </div>
            </div>

            <div class="bg-[#ece3ff] w-11/12 mx-auto mt-20 pb-26 mb-10 card" :class="{ visible: isVisible }" ref="card">
                <img src="/digital-travling-blog.jpg" alt="" class="w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
                <div class="w-1/5 h-56 pb-6  bg-white ml-5 absolute -mt-16 animated-content">
                    <p class="w-64 mx-auto mt-2  text-md font-bold text-gray-800">Preparing for Your Journey in the Digital Age</p>
                    <p class="w-64 mx-auto text-sm mt-2 font-semibold">march 2, 2025 <span
                            class="font-bold text-sm ml-3 mr-3">. </span> Business</p>
                    <p class="w-72 mx-auto mt-3 text-sm">Digital travel revolutionizes journey planning by using technology for booking, navigation, and local insights. By leveraging apps_</p>
                    <div class=" ml-8 cursor-pointer" @click="showContent">
                        <div v-if="readmore">
                            e-commerce solutions, cloud-based project management tools, and digital marketing platforms
                            allow businesses to streamline processes and reach wider audiences.
                        </div>
                        <div class="flex -ml-6">
                            <p class="text-purple-600">Read more</p>
                            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>

    <!-- /end of desktop -->


    <p class="w-40 text-xl mx-auto font-bold mb-5">Popular Posts</p>

    <!-- mobile -->
    <div class="w-11/12 bg-[#F3E4FF] pb-10 mx-auto block md:hidden">
        <img src="/popularposts-blog.png" alt="">
        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 ">
            <img src="/popularpostfirst-blog.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34">
                <p class="font-bold text-2xl text-center">1</p>
            </div>

            <p class="w-64 text-md font-semibold mt-4 mx-auto">Enhancing Business Operations Through Online Platforms
            </p>
            <p class="text-sm w-64 mx-auto mt-6">march 15, 2024 . Business</p>

        </div>

        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 ">
            <img src="/popularpostssecond-blog.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34">
                <p class="font-bold text-2xl text-center">2</p>
            </div>
            <p class="w-64 text-md font-semibold mt-4 mx-auto">The Future of Healthcare: Technology Meets Compassion</p>

            <p class="text-sm w-64 mx-auto mt-6"> August 30, 2024 . Healthcare</p>

        </div>

        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 ">
            <img src="/popularpoststhird-blog.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34">
                <p class="font-bold text-2xl text-center">3</p>
            </div>
            <p class="w-64 text-md font-semibold mt-4 mx-auto">Exploring Web & Mobile Development</p>

            <p class="text-sm w-64 mx-auto mt-6"> july 30, 2024 . Software</p>
        </div>
    </div>
    <!-- /end of mobile -->
    <!-- desktop -->
    <div class="w-11/12 bg-[#F3E4FF] pb-10 mx-auto hidden md:block mb-20">
        <img src="/popularposts-blog.png" alt="" class="w-full mx-auto">
        <div class="flex">
            <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 mr-10">
                <img src="/popularpostfirst-blog.png" alt="" class="w-full relative">
                <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-44">
                    <p class="font-bold text-2xl text-center">1</p>
                </div>
                <p class="w-64 text-md font-semibold mt-4 mx-auto">Enhancing Business Operations Through Online
                    Platforms</p>
                <p class="text-sm w-64 mx-auto mt-6">march 15, 2024 . Business</p>
            </div>

            <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 mr-10">
                <img src="/popularpostssecond-blog.png" alt="" class="w-full relative">
                <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-44">
                    <p class="font-bold text-2xl text-center">2</p>
                </div>
                <p class="w-64 text-md font-semibold mt-4 mx-auto">The Future of Healthcare: Technology Meets Compassion
                </p>
                <p class="text-sm w-64 mx-auto mt-6"> August 30, 2024 . Healthcare</p>
            </div>

            <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 ">
                <img src="/popularpoststhird-blog.png" alt="" class="w-full relative">
                <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-44">
                    <p class="font-bold text-2xl text-center">3</p>
                </div>
                <p class="w-64 text-md font-semibold mt-4 mx-auto">Exploring Web & Mobile Development</p>
                <p class="text-sm w-64 mx-auto mt-6"> july 30, 2024 . Software</p>
            </div>
        </div>
    </div>

 
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    setup() {
        const isVisible = ref(false); 
        const readmore = ref(false);
        const card = ref(null);
        let observer = null;

        const showContent = () => {
            readmore.value = !readmore.value;
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible.value = true; 
                } else {
                    isVisible.value = false; 
                }
            });
        };

        onMounted(() => {
            observer = new IntersectionObserver(handleIntersect);
            if (card.value) {
                observer.observe(card.value);
            }

            setTimeout(() => {
                isVisible.value = true; 
            }, 200); 
        });

        onBeforeUnmount(() => {
            if (observer) {
                observer.disconnect(); 
            }
        });

        return {
            isVisible,
            readmore,
            showContent,
            card,
        };
    },
};
</script>


<style>
.card {
    opacity: 0.3;
    transition: opacity 1s ease-in-out; 
}

.card.visible {
    opacity: 1;
}
.animated-image {
    opacity: 0;
    transform: translateX(100px); 
    animation: slideInImage 1s forwards; 
}

.animated-text {
    opacity: 0;
    transform: translateX(-100px); 
    animation: slideInText 1s forwards; 
    animation-delay: 0.5s; 
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
 
