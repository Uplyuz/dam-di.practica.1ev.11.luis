<template>
    <div class="nota-container">
      <div v-for="(nota, index) in notas" :key="nota.id" 
      :class="['nota-card', { 'nota-seleccionada': notasMarcadas.includes(index) }]">
        <p><strong>{{ nota.id }}</strong></p>
        <h3>{{ nota.titulo }}</h3>
        <p>{{ nota.descripcion }}</p>
        <div class="nota-actions">
          <button @click="$emit('borrarNota',index)">Borrar</button>
          <button @click="$emit('clonarNota', index)">Clonar</button>
          <button @click="$emit('marcarNota', index)">Marcar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

import { defineProps } from 'vue';
import {defineEmits} from 'vue';
const props = defineProps({
  notas: Array,
  notasMarcadas: Array
});

const emit= defineEmits(['borrarNota', 'clonarNota','marcarNota'])
  </script>

<style scoped>
¡/* Fondo general y estilos de texto */
body {
  background-color: #000000;
  color: #f5f5f5;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Contenedor de Notas */
.nota-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start; /* Alinea las notas hacia la izquierda */
  padding: 20px;
  background-color: #000000; /* Fondo oscuro para el contenedor de notas */
  border-radius: 8px;
  border: 1px solid #444;
  border-bottom: 3px solid #f42e56; /* Borde inferior rojo brillante */

}

/* Estilo de cada tarjeta de nota */
.nota-card {
  width: 150px;
  padding: 16px;
  background-color: #3a3a3a; /* Color gris para las tarjetas de notas */
  border: 1px solid #555;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f5f5f5;
}
.nota-seleccionada {
  background-color: #403535; /* Color más claro para la nota seleccionada */
}

.nota-card p, .nota-card h3 {
  margin: 0;
  color: #f5f5f5;
}

.nota-card h3 {
  font-size: 1.1em;
  margin-bottom: 4px;
}

/* Acciones en cada tarjeta de nota */
.nota-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.nota-actions button {
  background-color: #f42e56;
  color: #f5f5f5;
  border: none;
  padding: 5px 10px; /* Botones más pequeños */
  font-size: 12px; /* Tamaño de fuente más pequeño */
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;
}

.nota-actions button:hover {
  background-color: #d91b45;
}


</style>