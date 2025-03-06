<script setup>
import ServiceSectionCards from './ServiceSectionCards.vue';
import Software_Solutions_Icon from "/images/Software_Solutions_Icon.png"
import AI_Driven_Technologies_Icon from "/images/AI_Driven_Technologies_Icon.png"
import Client_Engagement_Icon from "/images/Client_Engagement_Icon.png"
import Application_maintenance_and_support_Icon from "/images/Application_maintenance_and_support_Icon.png"

const services = [
  {
    title: 'Software Solutions',
    description: 'We design and build custom software applications to meet the specific needs of our clients.',
    imageSrc: Software_Solutions_Icon
  },
  {
    title: 'AI-driven technologies',
    description: 'AI-driven Technologies: We create AI solutions to automate tasks and enhance decision-making.',
    imageSrc: AI_Driven_Technologies_Icon
  },
  {
    title: 'Client Engagement',
    description: 'We build solutions to strengthen relationships and boost customer interactions.',
    imageSrc: Client_Engagement_Icon
  },
  {
    title: 'Application maintenance and support',
    description: 'We ensure software applications run smoothly and efficiently through ongoing support and maintenance',
    imageSrc: Application_maintenance_and_support_Icon
  },
];
</script>

<template>
  <div class="mt-16">
    <h1 class="font-bold text-btnColor xs:px-6 md:px-0  lg:text-xl">What We Offer</h1>
    <div class="grid grid-cols-2 gap-4 mt-8 place-items-center md:grid-cols-4 max-w-[540px] mx-auto md:max-w-[1200px]">
      <ServiceSectionCards v-for="(service, index) in services" :key="index" :title="service.title"
        :description="service.description" :imageSrc="service.imageSrc" />
    </div>
  </div>
</template>