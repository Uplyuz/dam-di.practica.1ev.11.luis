<template>
    <div class="consola">
      <h3>Consola</h3>
      <ul>
         <li v-for="(mensaje, index) in mensajesConsola" :key="index">{{ mensaje }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    mensajesConsola: Array
});

  </script>
  
  <style scoped>
  .consola {
    background-color: #000000;
    color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    max-height: 300px;
    overflow-y: auto;
    border-bottom: 3px solid #f42e56; /* Borde inferior rojo brillante */

  }
  
  .consola h3 {
    margin-top: 0;
  }
  
  .consola ul {
    list-style: none;
    padding: 0;
  }
  
  .consola li {
    margin-bottom: 8px;
  }
  </style>
  