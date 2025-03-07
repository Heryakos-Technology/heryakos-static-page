<script setup>
import { onMounted } from 'vue';
import { animate, stagger, inView } from 'motion';
import ServiceSectionCards from './ServiceSectionCards.vue';
import Software_Solutions_Icon from "/images/Software_Solutions_Icon.png"
import AI_Driven_Technologies_Icon from "/images/AI_Driven_Technologies_Icon.png"
import Client_Engagement_Icon from "/images/Client_Engagement_Icon.png"
import Application_maintenance_and_support_Icon from "/images/Application_maintenance_and_support_Icon.png"

const services = [
  {
    title: 'Static Website Development',
    description: 'We design fast, secure, visually stunning static websites ideal for portfolios and landing pages.',
    imageSrc: Software_Solutions_Icon
  },
  {
    title: 'Cloud Computing Solutions',
    description: 'Optimize your business with our cloud services, ensuring scalability, security, and high availability.',
    imageSrc: AI_Driven_Technologies_Icon
  },
  {
    title: 'Technology Consultancy',
    description: 'Expert guidance to help you choose the right technologies and strategies for your business success.',
    imageSrc: Client_Engagement_Icon
  },
  {
    title: 'Mobile Application Development (Android & iOS)',
    description: 'Build high-performance Android and iOS apps with offline capabilities and real-time data sync.',
    imageSrc: Application_maintenance_and_support_Icon
  },
];

onMounted(() => {
  inView(".service-cards-container", () => {
    animate(".service-card",
      {
        opacity: 1,
        y: [50, 0]
      },
      {
        delay: stagger(0.3),
        duration: 0.4,
        easing: [0.17, 0.55, 0.55, 1]
      },
    );
  },
    {
      amount: 0.6
    }
  );
});
</script>

<template>
  <div class="mt-16">
    <h1 class="font-bold text-btnColor xs:px-6 md:px-0 lg:text-xl">What We Offer</h1>
    <div
      class="service-cards-container grid grid-cols-2 gap-4 mt-8 place-items-center md:grid-cols-4 max-w-[540px] mx-auto md:max-w-[1200px]">
      <ServiceSectionCards v-for="(service, index) in services" :key="index" :title="service.title"
        :description="service.description" :imageSrc="service.imageSrc"
        class="service-card opacity-0 translate-y-[50px]" />
    </div>
    <RouterLink :to="{ name: 'ServicePage' }" class="mt-8 flex flex-col md:items-start 2xl:mt-24">
      <div class="bg-gradient-to-r from-[#9B4AF7] mx-auto to-[#8523F5] text-white px-10 py-3.5 rounded-4xl font-medium">
        See More Services
      </div>
    </RouterLink>
  </div>
</template>