<script setup>
import Header from './components/Header.vue';
import ToolBar from './components/ToolBar.vue';
import Nota from './components/Nota.vue';
import {ref, reactive,onMounted, onUpdated} from 'vue'
import Consola from './components/Consola.vue';

const notas = ref([
  reactive({
    id: 'id-1',
    titulo: 'nota-1',
    descripcion: 'Esta es la descripción de la primera nota',
  }),
  reactive({
    id: 'id-2',
    titulo: 'nota-2',
    descripcion: 'Esta es la descripción de la segunda nota',
  }),
  reactive({
    id: 'id-3',
    titulo: 'nota-3',
    descripcion: 'Esta es la descripción de la tercera nota',
  }),
]);
let contador=3

const notasMarcadas=ref([]);

const borrarNotas = () => {
  notasMarcadas.value.sort((a, b) => b - a).forEach(index => borrarNota(index));
  notasMarcadas.value = [];
};

const borrarNota = (index) =>{
    notas.value.splice(index,1);
    notasMarcadas.value = notasMarcadas.value.filter((i) => i < notas.value.length);
    if(permisoDebug.value){

    anadirMensaje(`Nota borrada`);
    }
};

const clonarNotas = () => {
  notasMarcadas.value.forEach(index => clonarNota(index));
  notasMarcadas.value=[];
};

const clonarNota = (index) =>{
    contador++;
    const notaOriginal= notas.value[index];
    const notaNueva={
        ...notaOriginal,
        id: `id-${contador}`,
    }
    notas.value.push(reactive(notaNueva));
    if(permisoDebug.value){

    anadirMensaje(`Nota clonada`);
    }
}

const marcarNota =(index) =>{
  if (notasMarcadas.value.includes(index)) {
    notasMarcadas.value = notasMarcadas.value.filter(i => i !== index);
  } else {
    notasMarcadas.value.push(index);
    if(permisoDebug.value){

    anadirMensaje(`Nota marcada`);
    }
  }

}

const crearNota=()=>{
    contador++;
        notas.value.push(reactive({
        id : `id-${contador}`,
        titulo : `nota-${contador}`,
        descripcion : 'Esta es la descripcion de la nueva nota',
    }));
    if(permisoDebug.value){

    anadirMensaje(`Nota creada`);
    }
}

const limpiarNotas = () => {
  notas.value = [];       // Vaciamos el array `notas`
  notasMarcadas.value = []; // Limpiamos las notas seleccionadas
  contador = 0;            // Reiniciamos el contador si se desea
  if(permisoDebug.value){

  anadirMensaje(`Notas limpiadas`);
  }
};

const seleccionarTodo = () => {
  notas.value.forEach((_, index) => {
    if (!notasMarcadas.value.includes(index)) {
      notasMarcadas.value.push(index);
    }
  });
  if(permisoDebug.value){

  anadirMensaje(`Todas las notas han sido seleccionadas`);
  }
};

const invertirSeleccion = () => {
  const Seleccionadas = [];
  notas.value.forEach((_, index) => {
 if (!notasMarcadas.value.includes(index)) {
    Seleccionadas.push(index);
    }
  });

  notasMarcadas.value = Seleccionadas;

};
const anularSeleccion =()=>{
    notasMarcadas.value=[];
    if(permisoDebug.value){
    anadirMensaje(`Seleccion de notas anuladas`);
    }
}

const reload=()=>{
    window.location.reload();
}

const mensajesConsola=ref([]);
const consolaVisible =ref(false);
const abrirConsola=()=>{
consolaVisible.value=!consolaVisible.value
};
const anadirMensaje=(mensaje)=>{
    mensajesConsola.value.push(mensaje);
}
const limpiarConsola=()=>{
    mensajesConsola.value=[];
}

const permisoDebug=ref(false);
const debug=()=>{
    permisoDebug.value=!permisoDebug.value
};

onMounted(() => {
  if (permisoDebug.value) {
    anadirMensaje('Componente montado');
  }
});

onUpdated(() => {
  if (permisoDebug.value) {
    anadirMensaje('Componente actualizado');
  }
});
</script>

<template>
<Header></Header>
<ToolBar 
@crearNota="crearNota" 
@clonarNotas="clonarNotas"
@borrarNotas="borrarNotas" 
@limpiarNotas="limpiarNotas" 
@seleccionarTodo="seleccionarTodo"
@invertirSeleccion="invertirSeleccion"
@anularSeleccion="anularSeleccion"
@reload="reload"
@abrirConsola="abrirConsola"
@debug="debug"
@limpiarConsola="limpiarConsola"
>
</ToolBar>
<Nota 
:notas="notas" 
:notasMarcadas="notasMarcadas"
@borrarNota="borrarNota" 
@clonarNota="clonarNota" 
@marcarNota="marcarNota"></Nota>
<Consola v-if="consolaVisible" :mensajesConsola="mensajesConsola"></Consola>
</template>

<style scoped>
    body{
    
    background-color: blue;
    }
  </style>
