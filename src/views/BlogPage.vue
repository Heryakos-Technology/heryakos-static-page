<template>
    <div class="lg:px-20 md:mb-10 lg:mb-20 lg:-mt-32 hidden md:pt-24 md:block">
        <img src="/light-bulb-of-blog-page.png" alt=""
            class=" mt-5 md:w-1/2 md:ml-88 relative lg:w-2/3 lg:ml-auto lg:mr-0 lg:flex lg:justify-end lg:mt-10 lg:p-28 animated-image">
        <div class="lg:-mt-40 lg:ml-36 animated-text">
            <div class="w-11/12 h-44 md:ml-10  md:w-4/9 md:-mt-72 md:h-64    bg-white absolute -mt-14 lg:w-2/5 lg:h-88 lg:-mt-96">
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
        <img src="/cardfirst-blog2.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white rounded-md ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Introduction to PingCap/TiDB/ Part-1 Installation of TiDB on Windows machine.</p>
            <p class="ml-4 text-sm mt-2 font-semibold">Posted on Apr 2, 2021 • Edited on Apr 5, 2021</p>
            <p class="w-56 ml-4 mt-3 text-sm" >In Part 1 of the Introduction to PingCap and TiDB series, this guide provides a comprehensive exploration of installing  
                <span v-if="readmore[0]" class="lg:text-md md:text-sm ">TiDB on a Windows machine. The segment offers a meticulous, step-by-step approach designed to facilitate a 
                    seamless installation experience for users, empowering them to harness the capabilities of TiDB effectively. For an in-depth walkthrough, 
                    <a class="text-purple-600" href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-1-installation-of-tidb-on-windows-machine-1320">click here</a> to explore more.</span>
            </p>
            <div class="flex ml-4 text-sm" @click="showContent1">
                <a class="text-purple-600">{{ readmore[0] ? 'Read less' : 'Read more' }}</a>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 mb-10 h-fit block md:hidden " 
        ref="card">
        <img src="/cardsecond-blog2.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white rounded-md ml-3.5  -mt-8 animated-content">
            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Introduction to PingCap/TiDB/ Part-2 Monitoring TiDB MySQL data using Grafana</p>

            <p class="ml-4 text-sm mt-2 font-semibold">Posted on Apr 10, 2021</p>
            <p class="w-56 ml-4 mt-3 text-sm">In Part 2 of the Introduction to PingCap and TiDB series, the focus is on monitoring TiDB MySQL data with Grafana. This 
                <span v-if="readmore[1]" class="text-sm md:text-xs">section covers how to use Grafana's visualization tools to track and analyze TiDB metrics effectively, ensuring optimal database performance. For detailed guidance, <a class="text-purple-600" href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-2-monitoring-tidb-mysql-data-using-grafana-5039">click here</a> to explore more.</span>
            </p>
            <div class="flex ml-4 text-sm" @click="showContent2">
                <p class="text-purple-600">{{ readmore[1] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 h-fit mb-10 block md:hidden " 
        ref="card">
        <img src="/cardthird-blog2.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white rounded-md ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Introduction to PingCap/TiDB/ Part-3 Building a .Net core web API and connect to TiDB Mysql Server
            </p>
            <p class="ml-4 text-sm mt-2 font-semibold">Posted on Apr 20, 2021</p>
            <p class="w-56 ml-4 mt-3 text-sm">In Part 3 of the Introduction to PingCap and TiDB series, this guide focuses on building a .NET Core Web API and connecting it to a TiDB MySQL server. The segment  
                <span v-if="readmore[2]" class="text-sm md:text-xs">provides a detailed, step-by-step approach to creating a robust API that leverages the power of TiDB, enabling seamless data interactions. For a comprehensive tutorial, <a class="text-purple-600" href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-3-building-a-net-core-web-api-and-connect-to-tidb-mysql-server-4e35">click here</a> to explore more.</span>
            </p>
            <div class="flex ml-4 text-sm" @click="showContent3">
                <p class="text-purple-600">{{ readmore[2] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 h-fit mb-10 block md:hidden " 
        ref="card">
        <img src="/cardfourth-blog2.png" alt="" class="w-11/12 pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white rounded-md ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800">Building BitPrice web application using Next js and React js Then deploy it to Azure Static Website
                Platforms</p>
            <p class="ml-4 text-sm mt-2 font-semibold">Posted on Feb 19, 2021</p>
            <p class="w-56 ml-4 mt-3 text-sm">In this guide, the focus is on building the BitPrice web application using Next.js and React.js, followed by deploying it to Azure Static Websites. The tutorial 
                <span v-if="readmore[3]" class="text-sm md:text-xs">offers a detailed, step-by-step approach to creating a dynamic web application that efficiently displays cryptocurrency pricing, ensuring a smooth deployment process to Azure. For a complete walkthrough, <a class="text-purple-600" href="https://dev.to/yared123yared/building-bitprice-web-application-using-next-js-and-react-js-then-deploy-it-to-azure-static-website-42i4">click here</a> to explore more.</span>
            </p>
            <div class="flex ml-4 text-sm" @click="showContent4">
                <p class="text-purple-600">{{ readmore[3] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] w-11/12 mx-auto mt-10 pb-5 h-fit mb-10  block md:hidden " 
        ref="card">
        <img src="/cardfifth-blog2.png" alt="" class="w-11/12  pt-6 mx-auto relative animated-image">
        <div class="w-64  bg-white rounded-md ml-3.5  -mt-8 animated-content">

            <p class="w-56 mt-2 ml-4 text-sm font-bold text-gray-800"> Building a Photo Displayer Application with Postgress, GraphQL, Hasura Subscription, and React–Class Component.</p>
            <p class="ml-4 text-sm mt-2 font-semibold">Posted on Dec 6, 2020</p>
            <p class="w-56 ml-4 mt-3 text-sm">delves into building a Photo Displayer application utilizing PostgreSQL, GraphQL, Hasura subscriptions, and React with class components. It provides a 
                <span v-if="readmore[4]" class="text-sm md:text-xs">comprehensive, step-by-step approach to developing an interactive application that efficiently manages and displays photos, harnessing the power of modern technologies. For an in-depth tutorial, <a class="text-purple-600" href="https://dev.to/yared123yared/building-a-photo-displayer-application-with-postgress-graphql-hasura-subscription-and-react-class-component-799">click here</a> to explore more.</span>
            </p>
            <div class="flex ml-4 text-sm" @click="showContent5">
                <p class="text-purple-600">{{ readmore[4] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>


    <!-- /end of mobile -->
    <!-- desktop view-->
    <div class="  mx-auto px-10 md:px-10 lg:px-14   hidden  md:block">
        <div class="flex">
            <div class="bg-[#ece3ff] lg:w-1/2 md:w-4/5 md:mr-8 rounded-lg mx-auto pb-2 h-fit mb-10 mr-10 card left-entry" ref="card">
        <img src="/cardfirst-blog2.png" alt="" class="rounded-lg  w-9/10 md:1/2 h-4/5 pt-6 mx-auto relative animated-image">
        <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-8 animated-content">
            <p class="lg:h-24 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Introduction to PingCap/TiDB/ Part-1 Installation of TiDB on Windows machine.</p>
            <p class="lg:h-4  w-64 mx-auto lg:text-md lg:font-bold md:text-xs md:text-gray-800 md:w-11/12 md:h-4 mt-10  font-semibold">Posted on Apr 2, 2021 • Edited on Apr 5, 2021</p>
            <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm lg:ml-4  md:w-11/12 md:ml-2">
                In Part 1 of the Introduction to PingCap and TiDB series, this guide provides a comprehensive exploration of installing TiDB on a Windows machine. The segment offers a meticulous, step-by-step approach designed to facilitate a 
                <span v-if="readmore[0]" class="lg:text-md md:text-sm "> seamless installation experience for users, empowering them to harness the capabilities of TiDB effectively. For an in-depth walkthrough, <a class="text-purple-600" href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-1-installation-of-tidb-on-windows-machine-1320">click here</a> to explore more.</span>
            </p>
            <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-4" @click="showContent1">
                <p class="text-purple-600  md:text-md">{{ readmore[0] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
            </div>
        </div>
    </div>

    <div class="bg-[#ece3ff] lg:w-1/2 md:w-4/5 md:mr-8 rounded-lg mx-auto pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardsecond-blog2.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-8 animated-content">
        <p class="lg:h-24 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Introduction to PingCap/TiDB/ Part-2 Monitoring TiDB MySQL data using Grafana</p>
        <p class="lg:h-4  w-64 mx-auto lg:text-md lg:font-bold md:text-xs md:text-gray-800 md:w-11/12 md:h-4 mt-10  font-semibold ">Posted on Apr 10, 2021</p>
        
        <p class=" w-64 mx-auto ml-6 mt-3  md:text-sm   lg:ml-4 md:w-11/12 md:ml-2">
            In Part 2 of the Introduction to PingCap and TiDB series, the focus is on monitoring TiDB MySQL data with Grafana. This section covers how to use Grafana's visualization tools to track and analyze TiDB metrics effectively, 
            <span v-if="readmore[1]" class=" md:text-sm ">ensuring optimal database performance. For detailed guidance, <a class="text-purple-600" href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-2-monitoring-tidb-mysql-data-using-grafana-5039">click here</a> to explore more.</span>
        </p>

        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-4" @click="showContent2">
            <p class="text-purple-600  md:text-md">{{ readmore[1] ? 'Read less' : 'Read more' }}</p>
            <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>


<div class="bg-[#ece3ff] lg:w-1/2 md:w-4/5 md:mr-8 rounded-lg mx-auto pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardthird-blog2.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-3 bg-white md:w-54 lg:ml-5   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-8 animated-content">
        <p class="lg:h-24 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Introduction to PingCap/TiDB/ Part-3 Building a .Net core web API and connect to TiDB Mysql Server</p>
        <p class="lg:h-4  w-64 mx-auto lg:text-md lg:font-bold md:text-xs md:text-gray-800 md:w-11/12 md:h-4 mt-10  font-semibold">Posted on Apr 20, 2021</p>
        <p class=" w-64 mx-auto ml-6 mt-3  md:text-sm   lg:ml-4 md:w-11/12 md:ml-2">
            In Part 3 of the Introduction to PingCap and TiDB series, this guide focuses on building a .NET Core Web API and connecting it to a TiDB MySQL server. The segment provides a detailed, step-by-step approach to creating a robust 
            <span v-if="readmore[2]" class=" md:text-sm ">API that leverages the power of TiDB, enabling seamless data interactions. For a comprehensive tutorial, <a class="text-purple-600" href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-3-building-a-net-core-web-api-and-connect-to-tidb-mysql-server-4e35">click here</a> to explore more.</span>
        </p>
        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 md:pb-3 lg:ml-4" @click="showContent3">
                <p class="text-purple-600  md:text-md">{{ readmore[2] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>


        </div>
    </div>


    <div class="  mx-auto md:px-10 lg:px-14 px-10 hidden  md:block -mt-20">
        <div class="flex ">
            <div class="bg-[#ece3ff] lg:w-1/2 md:w-4/5 md:mr-8 rounded-lg mx-auto mt-20 pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardfourth-blog2.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-8   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-8 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Building BitPrice web application using Next js and React js Then deploy it to Azure Static Website</p>
        <p class="lg:h-4  w-64 mx-auto lg:text-md lg:font-bold md:text-xs md:text-gray-800 md:w-11/12 md:h-4 mt-10  font-semibold">Posted on Feb 19, 2021</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm   lg:ml-6 md:w-11/12 md:ml-2">In this guide, the focus is on building the BitPrice web application using Next.js and React.js, followed by deploying it to Azure Static Websites. The tutorial 
            <span v-if="readmore[3]" class="lg:text-md md:text-sm ">offers a detailed, step-by-step approach to creating a dynamic web application that efficiently displays cryptocurrency pricing, ensuring a smooth deployment process to Azure. For a complete walkthrough, <a class="text-purple-600" href="https://dev.to/yared123yared/building-bitprice-web-application-using-next-js-and-react-js-then-deploy-it-to-azure-static-website-42i4">click here</a> to explore more.</span>
        </p>
        <div class="flex ml-6 mt-3 cursor-pointer md:ml-2 lg:ml-6" @click="showContent4">
                <p class="text-purple-600 md:text-md">{{ readmore[3] ? 'Read less' : 'Read more' }}</p>
                <i class="fa-solid fa-arrow-right mt-2 ml-1 text-purple-600"></i>
        </div>
    </div>
</div>

<div class="bg-[#ece3ff] lg:w-1/2 md:w-4/5 md:mr-8 rounded-lg mx-auto mt-20 pb-2 h-fit mb-10 card left-entry" ref="card">
    <img src="/cardfifth-blog2.png" alt="" class="rounded-lg w-9/10 h-4/5 pt-6 mx-auto relative animated-image">
    <div class="lg:w-5/6   pb-6 bg-white md:w-54 lg:ml-8   md:ml-3 md:rounded-sm  rounded-lg ml-5  -mt-8 animated-content">
        <p class="lg:h-18 md:h-8 md:pt-1 w-64 mx-auto mt-2 lg:text-lg lg:font-semibold  md:text-xs md:font-bold md:w-11/12 md:mx-auto text-gray-800">Building a Photo Displayer Application with Postgress, GraphQL, Hasura Subscription, and React–Class Component.</p>
        <p class="lg:h-4  w-64 mx-auto lg:text-md lg:font-bold md:text-xs md:text-gray-800 md:w-11/12 md:h-4 mt-10  font-semibold">Posted on Dec 6, 2020</p>
        <p class=" w-64 mx-auto ml-6 mt-3 lg:text-md md:text-sm   lg:ml-6 md:w-11/12 md:ml-2">delves into building a Photo Displayer application utilizing PostgreSQL, GraphQL, Hasura subscriptions, and React with class components. It provides a 
            <span v-if="readmore[4]" class="lg:text-md md:text-sm ">comprehensive, step-by-step approach to developing an interactive application that efficiently manages and displays photos, harnessing the power of modern technologies. For an in-depth tutorial, <a class="text-purple-600" href="https://dev.to/yared123yared/building-a-photo-displayer-application-with-postgress-graphql-hasura-subscription-and-react-class-component-799">click here</a> to explore more.</span>
        </p>
        <div class="flex ml-6 mt-2 cursor-pointer md:ml-2 lg:ml-6" @click="showContent5">
                <p class="text-purple-600 md:text-md">{{ readmore[4] ? 'Read less' : 'Read more' }}</p>
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
        <a href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-1-installation-of-tidb-on-windows-machine-1320">
        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-md">
            <img src="/cardfirst-blog2.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34 rounded-tl-md">
                <p class="font-bold text-2xl text-center ">1</p>
            </div>

            <p class="w-64 text-md font-semibold mt-4 mx-auto">Introduction to PingCap/TiDB/ Part-1 Installation of TiDB on Windows machine.
            </p>
            <p class="text-sm w-64 mx-auto mt-6">Posted on Apr 2, 2021 • Edited on Apr 5, 2021</p>

        </div>
    </a>
    <a href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-2-monitoring-tidb-mysql-data-using-grafana-5039">
        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-md">
            <img src="/cardsecond-blog2.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34 rounded-tl-md">
                <p class="font-bold text-2xl text-center">2</p>
            </div>
            <p class="w-64 text-md font-semibold mt-4 mx-auto">Introduction to PingCap/TiDB/ Part-2 Monitoring TiDB MySQL data using Grafana</p>

            <p class="text-sm w-64 mx-auto mt-6">Posted on Apr 10, 2021</p>

        </div>
    </a>
    <a href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-3-building-a-net-core-web-api-and-connect-to-tidb-mysql-server-4e35">
        <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-md">
            <img src="/cardthird-blog2.png" alt="" class="w-full relative">
            <div class="w-10 h-10 bg-[#F3E4FF] absolute -mt-34 rounded-tl-md">
                <p class="font-bold text-2xl text-center">3</p>
            </div>
            <p class="w-64 text-md font-semibold mt-4 mx-auto">Introduction to PingCap/TiDB/ Part-3 Building a .Net core web API and connect to TiDB Mysql Server</p>

            <p class="text-sm w-64 mx-auto mt-6">Posted on Apr 20, 2021</p>
        </div>
    </a>
    </div>
    <!-- /end of mobile -->
    <!-- desktop -->
    <div class="w-11/12  pb-10 mx-auto hidden md:block mb-20">

        <div class="flex">
            <a href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-1-installation-of-tidb-on-windows-machine-1320">
                <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 mr-10 rounded-lg card last-three"  ref="card">
                    <img src="/cardfirst-blog2.png" alt="" class="w-full relative">
                    <div class="w-10 h-10 bg-[#f7f3fe] absolute lg:-mt-47 md:-mt-26">
                        <p class="font-bold lg:text-2xl text-center md:text-md ">1</p>
                    </div>
                    <p class="w-full text-center h-6 lg:text-md font-semibold mt-4 mx-auto md:text-sm">Introduction to PingCap/TiDB/ Part-1 Installation of TiDB on Windows machine.
                        Platforms</p>
                    <p class="lg:text-sm text-purple-800 font-medium lg:h-6 text-center w-72 mx-auto mt-6 md:text-sm">Posted on Apr 2, 2021 • Edited on Apr 5, 2021</p>
                </div>
            </a>
            <a href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-2-monitoring-tidb-mysql-data-using-grafana-5039">
                <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 mr-10 rounded-lg card last-three"  ref="card">
                    <img src="/cardsecond-blog2.png" alt="" class="w-full relative">
                    <div class="w-10 h-10 bg-[#f7f3fe] absolute lg:-mt-47 md:-mt-26">
                        <p class="font-bold lg:text-2xl text-center md:text-md ">2</p>
                    </div>
                    <p class="w-full text-center h-6 font-semibold mt-4 mx-auto md:text-sm">Introduction to PingCap/TiDB/ Part-2 Monitoring TiDB MySQL data using Grafana
                    </p>
                    <p class="lg:text-sm text-purple-800 font-medium lg:h-6 text-center w-72 mx-auto mt-6 md:text-sm">Posted on Apr 10, 2021</p>
                </div>
            </a>
            <a href="https://dev.to/yared123yared/introduction-to-pingcap-tidb-part-3-building-a-net-core-web-api-and-connect-to-tidb-mysql-server-4e35">
                <div class="bg-[#e8c7ff] w-11/12 mx-auto pb-6 mt-6 rounded-lg card last-three"  ref="card">
                    <img src="/cardthird-blog2.png" alt="" class="w-full relative">
                    <div class="w-10 h-10 bg-[#f7f3fe] absolute lg:-mt-47 md:-mt-26">
                        <p class="font-bold lg:text-2xl text-center md:text-md ">3</p>
                    </div>
                    <p class="w-full text-center h-6 lg:text-md font-semibold mt-4 mx-auto md:text-sm">Introduction to PingCap/TiDB/ Part-3 Building a .Net core web API and connect to TiDB Mysql Server</p>
                    <p class="lg:text-sm text-purple-800 font-medium lg:h-6 text-center w-72 mx-auto mt-6 md:text-sm">Posted on Apr 20, 2021</p>
                </div>
            </a>
        </div>
    </div>
<!-- end of section -->

</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const readmore = ref([false, false, false, false, false, false]); 
let observer = null;

const showContent = (index) => {
    readmore.value[index] = !readmore.value[index];
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
    observer = new IntersectionObserver(handleIntersect);
    const cards = document.querySelectorAll('.card');


    cards.forEach(card => {
        card.classList.add('visible');
    });


    cards.forEach(card => {
        observer.observe(card);
    });
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
});


const showContent1 = () => showContent(0);
const showContent2 = () => showContent(1);
const showContent3 = () => showContent(2);
const showContent4 = () => showContent(3);
const showContent5 = () => showContent(4);
const showContent6 = () => showContent(5);
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