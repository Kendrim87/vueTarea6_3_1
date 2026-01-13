import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

// Importamos los componentes que se usarán como destino de las rutas
import Listado from './components/Listado.vue'
import DetallePerson from './components/DetallePerson.vue'
import EditarPersona from './components/EditarPersona.vue'

// Definimos las rutas de la aplicación
const rutas = [
  { path: '/', component: Listado },
  { path: '/personas/:id', component: DetallePerson, props: true },
  { path: '/personas/:id/editar', component: EditarPersona, props: true }
]

// Creamos el router con el array de rutas
const router = createRouter({
  history: createWebHashHistory(),
  routes: rutas
})

// Creamos la aplicación de Vue y la configuramos para que use el router
createApp(App).use(router).mount('#app')
