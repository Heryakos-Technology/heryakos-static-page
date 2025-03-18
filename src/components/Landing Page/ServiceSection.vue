<script setup>
import { onMounted } from "vue";
import { animate, stagger, inView } from "motion";
import ServiceSectionCards from "./ServiceSectionCards.vue";
import Website_Development_Icon from "/images/Website_Development_Icon.png";
import Mobile_App_Development_Icon from "/images/Mobile_App_Development_Icon.png";
import Technology_Consultancy_Icon from "/images/Client_Engagement_Icon.png";
import Blockchain_Integration_Icon from "/images/Blockchain_Integration.png";

const services = [
  {
    title: "Website Development",
    description:
      "Responsive websites tailored to your brand. From landing pages to web applications, we bring your vision to life.",
    imageSrc: Website_Development_Icon,
  },
  {
    title: "Mobile Application Development",
    description:
      "Native iOS and Android apps focused on performance and user experience. From concept to deployment.",
    imageSrc: Mobile_App_Development_Icon,
  },
  {
    title: "Blockchain Integration",
    description:
      "Integrating blockchain to enhance security and transparency. Explore decentralized solutions with our expertise.",
    imageSrc: Blockchain_Integration_Icon,
  },
  {
    title: "Technology Consultancy",
    description:
      "Expert advice to make informed technology decisions. We align technology with your business goals.",
    imageSrc: Technology_Consultancy_Icon,
  },
];

onMounted(() => {
  inView(
    ".service-cards-container",
    (element) => {
      animate(
        ".service-card",
        {
          opacity: 1,
          y: [50, 0],
        },
        {
          delay: stagger(0.3),
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        },
      );

      return () => {
        animate(
          ".service-card",
          {
            opacity: 0,
            y: 50,
          },
          {
            delay: stagger(0.1),
            duration: 0.3,
          },
        );
      };
    },
    {
      amount: 0.6,
      once: false,
    },
  );
});
</script>

<template>
  <div class="mt-16">
    <h1 class="text-btnColor xs:px-6 font-bold md:px-0 lg:text-xl">
      What We Offer
    </h1>
    <div
      class="service-cards-container mx-auto mt-8 grid max-w-[540px] grid-cols-2 place-items-center gap-x-4 gap-y-8 md:max-w-[1200px] md:grid-cols-4"
    >
      <ServiceSectionCards
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :imageSrc="service.imageSrc"
        class="service-card translate-y-[50px] opacity-0"
      />
    </div>
    <RouterLink
      :to="{ name: 'ServicePage' }"
      class="mt-32 flex flex-col md:items-start xl:mt-48"
    >
      <div
        class="mx-auto rounded-4xl bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] px-10 py-3.5 font-medium text-white"
      >
        See More Services
      </div>
    </RouterLink>
  </div>
</template>
