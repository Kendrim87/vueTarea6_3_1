<template>
  <div class="detalle-contenedor" v-if="persona">
    <h1>Detalle de Persona</h1>
    
    <div class="detalle-persona">
      <img :src="persona.foto" :alt="persona.nombre" class="foto-persona">
      
      <div class="info-persona">
        <p><strong>Nombre:</strong> {{ persona.nombre }}</p>
        <p><strong>Apellidos:</strong> {{ persona.apellidos }}</p>
        <p><strong>Edad:</strong> {{ persona.edad }} años</p>
        
        <div class="botones">
          <router-link to="/" class="btn btn-volver">Volver al listado</router-link>
          <router-link :to="'/personas/' + $route.params.id + '/editar'" class="btn btn-editar">Editar</router-link>
        </div>
      </div>
    </div>
  </div>
  
  <div class="error-persona" v-else>
    <p>Persona no encontrada</p>
    <router-link to="/" class="btn btn-volver">Volver al listado</router-link>
  </div>
</template>

<script>
// Importamos el estado centralizado
import { datos } from '../estado.js'

export default {
  name: 'DetallePerson',
  
  data() {
    return {
      datos
    }
  },
  
  computed: {
    // Calculamos la persona actual basándonos en el ID de la ruta
    persona() {
      return this.datos.obtenerPersona(parseInt(this.$route.params.id));
    }
  }
}
</script>

<style scoped>
.detalle-contenedor {
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

.detalle-persona {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.foto-persona {
  width: 200px;
  height: 200px;
  border: 3px solid #4CAF50;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.info-persona {
  flex: 1;
}

.info-persona p {
  margin: 15px 0;
  font-size: 18px;
  color: #333;
}

.info-persona strong {
  color: #4CAF50;
}

.botones {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-volver {
  background-color: #2196F3;
  color: white;
}

.btn-volver:hover {
  background-color: #0b7dda;
}

.btn-editar {
  background-color: #FFC107;
  color: #333;
}

.btn-editar:hover {
  background-color: #FFB300;
}

.error-persona {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  text-align: center;
}

.error-persona p {
  color: #721c24;
  margin-bottom: 20px;
  font-size: 18px;
}

/* Responsive */
@media (max-width: 600px) {
  .detalle-persona {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .foto-persona {
    width: 150px;
    height: 150px;
  }
  
  .botones {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>
