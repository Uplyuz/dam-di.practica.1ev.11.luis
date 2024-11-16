import { createApp } from 'vue';
import App from './App.vue';

// Importa las librerías de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa el icono específico
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

// Añade el icono a la librería
library.add(faClone);
library.add(faSquarePlus)
library.add(faSquareMinus)
library.add(faTrash)
library.add(faSquareCheck)
library.add(faArrowUpShortWide)
library.add(faWindowRestore)
library.add(faBug)
library.add(faBroom)
library.add(faDesktop)
library.add(faRotateRight)
// Crea la aplicación y registra el componente FontAwesomeIcon
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
