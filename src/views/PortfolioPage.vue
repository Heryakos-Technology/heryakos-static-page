<script setup>
import { onMounted } from 'vue';

import ProjectCard from "@/components/PortfolioPage/ProjectCard.vue";
import our_works_illustration from "/images/our_works_illustration.png";
import AIVision from "/images/AIVision ¨C Saas Hero Section Figma Template.jpeg";
import CSVECommerce from "/images/CSV E-Commerce Application.jpeg";
import HospitalManagement from "/images/Hospital Management System.jpeg";
import SurfaceInsight from "/images/SurfaceInsight – Intelligent RPA Implementation Platform.jpeg";
import TrustBroker from "/images/Trust-Broker Website .png";
import AiPowered from "/images/AI-Powered Proposal Tool - SAAS UI.jpeg";
import { ref } from 'vue';
import ContactUsCard from "@/components/PortfolioPage/ContactUsCard.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

const projects = ref([
  {
    title: "Hospital Management System (HMS)",
    description: "Hospital Management System is a digital solution that simplifies hospital management by centralizing patient records, appointments, billing, staff, and inventory. With cloud computing, AI, and data analytics, it enhances decision-making, reduces paperwork, and optimizes resources for better patient care",
    imageUrl: HospitalManagement,
  },
  {
    title: "CSV E-Commerce",
    description: "CSV E-Commerce is a custom-built platform designed for seamless bulk product uploads, order processing, and inventory control via CSV. Featuring a web platform for merchants and a mobile app for users.",
    imageUrl: CSVECommerce,
  },
  {
    title: "Trust-Broker –  Brokerage Platform for  Deals",
    description: "Trust-Broker is a brokerage platform designed to facilitate secure and transparent deals between parties. It provides a robust system for managing transactions, verifying identities, and ensuring compliance.",
    imageUrl: TrustBroker,
  },
  {
    title: "AIVision –  SaaS for Creative Automation",
    description: "AIVision is a SaaS platform that leverages AI to automate creative processes. It offers tools for image recognition, content generation, and design optimization, enabling users to streamline their creative workflows.",
    imageUrl: AIVision,
  },
  {
    title: "SurfaceInsight – Intelligent RPA Implementation Platform",
    description: "SurfaceInsight is an intelligent RPA (Robotic Process Automation) implementation platform that helps businesses automate repetitive tasks. It uses AI to identify automation opportunities and streamline processes.",
    imageUrl: SurfaceInsight,
  },
  {
    title: "AI-Powered Proposal Tool",
    description: "An AI-powered SaaS tool designed to streamline and automate the creation of business proposals. Leverages machine learning to generate tailored content, predict success rates, and optimize pricing strategies.",
    imageUrl: AiPowered,
  },
]);
</script>

<template>
  <div class="py-16 pb-16 px-5 lg:px-10 xl:px-15 2xl:px-24 md:pt-32 ">
    <div class="flex flex-col justify-center gap-y-8  items-center md:flex-row md:justify-evenly">

      <div class="mt-8  flex flex-col    gap-y-4 md:gap-y-8 md:items-start ">
        <h1 class="text-center text-4xl font-bold sm:text-5xl lg:text-6xl xl:text-7xl"><span
            class="text-btnColor">Our</span> Works
        </h1>
        <p class="text-sm text-center md:text-left max-w-[270px] lg:max-w-[370px] lg:text-base 2xl:max-w-[420px]">
          Delivering innovative solutions and exceptional results. Browse our featured projects and client success
          stories.
        </p>
        <div class=" text-center">
          <button
            class="bg-gradient-to-r from-[#9B4AF7] to-[#8523F5] text-white px-12 py-2.5 rounded-4xl font-medium">Contact
            US</button>
        </div>
      </div>

      <div class="ml-8 max-w-[300px] xs:max-w-[350px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[500px]">
        <img :src="our_works_illustration" alt="our_works_illustration" class="w-full">
      </div>
    </div>
    <div class="mt-16 grid gap-y-8 place-items-center md:grid-cols-2 gap-x-2 lg:gap-y-16">
      <ProjectCard v-for="(project, index) in projects" :key="index" :title="project.title"
        :description="project.description" :imageUrl="project.imageUrl" />
    </div>
    <div class="">
      <ContactUsCard />
    </div>
  </div>
</template>