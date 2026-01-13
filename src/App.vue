<template>
  <div class="container">
    <h1>Listado de Personas</h1>

    <!-- Iteramos sobre el array de personas y creamos un componente para cada una -->
    <MiPersona v-for="persona in personas" :key="persona.id" :datos="persona" @actualizar="actualizarPersona" />
  </div>
</template>

<script>
// Importamos el componente MiPersona
import MiPersona from './components/MiPersona.vue'

// Datos de ejemplo (array de personas)
const listadoPersonas = [
  {
    id: 1,
    nombre: "Mario",
    apellidos: "Bros.",
    edad: 39,
    foto: "https://i.pinimg.com/736x/ea/53/5a/ea535ae76deda5d96601729e34b48a76.jpg"
  },
  {
    id: 2,
    nombre: "Luigi",
    apellidos: "Bros.",
    edad: 38,
    foto: "https://i.pinimg.com/736x/60/dc/05/60dc05864f57f5489c69e55cf4862bb9.jpg"
  },
  {
    id: 3,
    nombre: "Peach",
    apellidos: "Princess",
    edad: 30,
    foto: "https://i.pinimg.com/736x/32/d3/35/32d33547d5454524f8a192ff61eb1f51.jpg"
  },
  {
    id: 4,
    nombre: "Toad",
    apellidos: "Captain",
    edad: 24,
    foto: "https://i.pinimg.com/736x/64/45/d2/6445d269756e9821000d1471fcae75dd.jpg"
  }
];

export default {
  name: 'App',

  // Registramos el componente MiPersona
  components: {
    MiPersona
  },

  // Estado de la aplicación
  data() {
    return {
      personas: listadoPersonas
    }
  },

  // Métodos de la aplicación
  methods: {
    // Método para actualizar los datos de una persona
    actualizarPersona(datosActualizados) {
      // Buscar la persona por ID y actualizar sus datos
      const index = this.personas.findIndex(p => p.id === datosActualizados.id);
      if (index !== -1) {
        // Actualizamos manteniendo la reactividad de Vue
        this.personas.splice(index, 1, datosActualizados);
      }
    }
  }
}
</script>

<style>
/* Estilos globales de la aplicación */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f0f0f0;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #4CAF50;
}
</style>
