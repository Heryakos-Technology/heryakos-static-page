<script setup>
import Logo from "/public/LogoWhite.png";
const props = defineProps({
  class: String,
});
</script>

<template>
  <RouterLink :to="{ name: 'Home' }">
    <div :class="props.class">
      <img :src="Logo" alt="Heryakos Logo" class="w-fit" />
    </div>
  </RouterLink>
</template>
