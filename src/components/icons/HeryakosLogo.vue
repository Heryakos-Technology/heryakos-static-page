<script setup>
import Logo from '/public/Logo.png'
const props = defineProps({
  class: String,
})
</script>

<template>
  <RouterLink :to="{ name: 'home' }">
    <img :src="Logo" alt="Heryakos Logo" :class="props.class">
  </RouterLink>
</template>