<script setup>
import HeroSection from '@/components/Landing Page/HeroSection.vue';
import TheWelcome from '../components/TheWelcome.vue'
import AboutUsSection from '@/components/Landing Page/AboutUsSection.vue';
import ServiceSection from '@/components/Landing Page/ServiceSection.vue';
import PortfolioSection from '@/components/Landing Page/PortfolioSection.vue';
import ContactUsSection from '@/components/Landing Page/ContactUsSection.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <HeroSection />
  <main class="pb-16 px-5 lg:px-10 xl:px-15 2xl:px-24  ">
    <AboutUsSection />
    <ServiceSection />
    <PortfolioSection />
    <ContactUsSection />
  </main>
</template>
