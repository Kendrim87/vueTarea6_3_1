<template>
  <div class="listado-contenedor">
    <h1>Listado de Personas</h1>
    
    <div class="personas-grid">
      <!-- Iteramos sobre el array de personas y creamos un enlace para cada una -->
      <div v-for="persona in datos.personas" :key="persona.id" class="persona-item">
        <div class="persona-nombre">{{ persona.nombre }} {{ persona.apellidos }}</div>
        <router-link :to="'/personas/' + persona.id" class="btn-ver-detalles">Ver detalles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Importamos el estado centralizado
import { datos } from '../estado.js'

export default {
  name: 'ListadoPersonas',
  
  data() {
    return {
      // Se incorpora el estado común como estado del componente
      datos
    }
  }
}
</script>

<style scoped>
.listado-contenedor {
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

.personas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.persona-item {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.persona-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.persona-nombre {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.btn-ver-detalles {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-ver-detalles:hover {
  background-color: #45a049;
}

/* Responsive */
@media (max-width: 600px) {
  .personas-grid {
    grid-template-columns: 1fr;
  }
  
  .listado-contenedor {
    padding: 15px;
  }
  
  h1 {
    font-size: 24px;
  }
}
</style>
