<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/Header.vue'

</script>

<template>
  <Header />
  <div class="bg-[#f7f3fe]">
    <RouterView />
  </div>
</template>
