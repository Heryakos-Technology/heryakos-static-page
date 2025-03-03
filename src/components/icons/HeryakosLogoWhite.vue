<script setup>
import Logo from '/public/LogoWhite.png'
const props = defineProps({
  class: String,
})
</script>

<template>
  <div :class="props.class">
    <img :src="Logo" alt="Heryakos Logo" class="w-fit">
  </div>
</template>