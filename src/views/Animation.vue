<template>
    <div id="app">
      <div class="box" ref="box"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const box = ref(null);
  
      onMounted(() => {
        const { animate } = window.Motion;
        animate(box.value, { rotate: 360 }, { duration: 1 });
      });
  
      return {
        box,
      };
    },
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
  }
  
  .box {
    width: 100px;
    height: 100px;
    background-color: #9911ff;
    border-radius: 10px;
  }
  </style>