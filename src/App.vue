<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

</script>

<template>
  <Header />
  <div class="bg-[#f7f3fe]">
    <RouterView />
  </div>
  <Footer />
</template>
