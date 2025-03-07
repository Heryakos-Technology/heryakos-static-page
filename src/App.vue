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
<!-- <script>
import {onMounted} from 'vue';
import {animate,spring} from 'motion';

export default {
  setup() {
    onMounted(()=>{
  const animation = animate(".box",{scale:1.1},{
    duration:1,
    easing:spring(),
    repeat:Infinity,
    direction:'alternate'
  })
})
  },
}
</script>
<template>
  <div class="box"/>
</template>
<style>
.box{
  margin: 100px;
  width: 200px;
  height: 200px;
  background: #43B883;
  border-radius: 5px;
}
</style> -->