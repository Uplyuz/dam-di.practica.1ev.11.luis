<template>
    <div class="button-container">
        <button @click="$emit('crearNota')"><font-awesome-icon icon="square-plus" /> Nueva</button>
        <button @click="$emit('clonarNotas')"><font-awesome-icon icon="clone" /> Copiar</button>
        <button @click="$emit('borrarNotas')" ><font-awesome-icon icon="square-minus" /> Borrar</button>
        <button @click="$emit('limpiarNotas')"><font-awesome-icon icon="trash" /> Limpiar</button>
        <button @click="$emit('seleccionarTodo')"><font-awesome-icon icon="square-check" /> Seleccionar</button>
        <button @click="$emit('invertirSeleccion')"><font-awesome-icon icon="arrow-up-short-wide" /> Invertir</button>
        <button @click="$emit('anularSeleccion')"><font-awesome-icon icon="window-restore" /> Anular</button>
        <button @click="$emit('debug')"><font-awesome-icon icon="bug" /> Debug</button>
        <button @click="$emit('limpiarConsola')"><font-awesome-icon icon="broom" /> Limpiar</button>
        <button @click="$emit('abrirConsola')"><font-awesome-icon icon="desktop" /> Consola</button>
        <button @click="$emit('reload')"><font-awesome-icon icon="rotate-right" /> Recargar</button>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';


const emit = defineEmits([
  'crearNota',
  'clonarNotas',
  'borrarNotas',
  'limpiarNotas',
  'seleccionarTodo',
  'invertirSeleccion',
  'anularSeleccion',
  'debug',
  'limpiarConsola',
  'abrirConsola',
  'reload'
]);
</script>
<style scoped>

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  background-color: #000000; /* Fondo negro para el contenedor */
  padding: 20px;
  border-radius: 8px; /* Redondea las esquinas */
  border-bottom: 3px solid #f42e56; /* Borde inferior rojo brillante */
}

button {
  background-color: #f42e56; /* Color de fondo del botón en rojo */
  color: #f5f5f5; /* Color de texto en blanco */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

button:hover {
  background-color: #d91b45; /* Rojo más oscuro en hover */
  box-shadow: 0px 4px 8px rgba(244, 46, 86, 0.4); /* Sombra suave */
}

button font-awesome-icon {
  margin-right: 8px; /* Espacio entre el icono y el texto */
  font-size: 20px; /* Tamaño del icono */
}

</style>