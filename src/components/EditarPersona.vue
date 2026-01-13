<template>
  <div class="editar-contenedor" v-if="persona">
    <h1>Editar Persona</h1>
    
    <form class="formulario-edicion" @submit.prevent="guardarCambios()">
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" v-model="personaEditada.nombre" required>
      </div>

      <div class="form-group">
        <label>Apellidos:</label>
        <input type="text" v-model="personaEditada.apellidos" required>
      </div>

      <div class="form-group">
        <label>Edad:</label>
        <input type="number" v-model.number="personaEditada.edad" required>
      </div>

      <div class="form-group">
        <label>URL de la foto:</label>
        <input type="text" v-model="personaEditada.foto" required>
      </div>

      <div class="preview-foto" v-if="personaEditada.foto">
        <p><strong>Vista previa:</strong></p>
        <img :src="personaEditada.foto" :alt="personaEditada.nombre" class="foto-preview">
      </div>

      <div class="botones">
        <button type="submit" class="btn btn-guardar">Guardar cambios</button>
        <router-link :to="'/personas/' + id" class="btn btn-cancelar">Cancelar</router-link>
      </div>
    </form>
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
  name: 'EditarPersona',
  
  // Props recibidas desde la ruta
  props: {
    id: {
      type: String,
      required: true
    }
  },
  
  data() {
    return {
      datos,
      personaEditada: {
        id: 0,
        nombre: '',
        apellidos: '',
        edad: 0,
        foto: ''
      }
    }
  },
  
  computed: {
    // Calculamos la persona actual basándonos en el ID de la ruta
    persona() {
      return this.datos.obtenerPersona(parseInt(this.id));
    }
  },
  
  // Ciclo de vida: cuando el componente se crea, cargamos los datos de la persona
  created() {
    this.cargarDatosPersona();
  },
  
  // Watchers: observamos cambios en el ID de la ruta
  watch: {
    id() {
      this.cargarDatosPersona();
    }
  },
  
  methods: {
    // Cargamos los datos de la persona en el formulario
    cargarDatosPersona() {
      if (this.persona) {
        this.personaEditada = { ...this.persona };
      }
    },
    
    // Guardamos los cambios
    guardarCambios() {
      this.datos.actualizarPersona(this.personaEditada);
      // Redirigimos a la página de detalle de la persona
      this.$router.push('/personas/' + this.id);
    }
  }
}
</script>

<style scoped>
.editar-contenedor {
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

.formulario-edicion {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
  font-size: 16px;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.preview-foto {
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 4px;
}

.preview-foto p {
  margin-bottom: 10px;
  color: #333;
}

.foto-preview {
  max-width: 200px;
  max-height: 200px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.botones {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  flex: 1;
}

.btn-guardar {
  background-color: #4CAF50;
  color: white;
}

.btn-guardar:hover {
  background-color: #45a049;
}

.btn-cancelar {
  background-color: #f44336;
  color: white;
  display: inline-block;
}

.btn-cancelar:hover {
  background-color: #da190b;
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
  .editar-contenedor {
    padding: 15px;
  }
  
  .formulario-edicion {
    padding: 15px;
  }
  
  h1 {
    font-size: 24px;
  }
  
  .botones {
    flex-direction: column;
  }
}
</style>
