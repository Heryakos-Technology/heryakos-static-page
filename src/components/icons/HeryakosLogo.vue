<script setup>
import Logo from '/public/Logo.png'
const props = defineProps({
  class: String,
})
</script>

<template>
  <img :src="Logo" alt="Heryakos Logo" :class="props.class">
</template>