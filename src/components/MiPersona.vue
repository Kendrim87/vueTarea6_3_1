<template>
  <!-- Contenedor principal de cada persona -->
  <div class="datos-persona">
    
    <!-- Vista de datos (no editable) -->
    <div v-if="!editando" class="persona-card">
      <img :src="datos.foto" :alt="datos.nombre" class="foto-persona">
      <div class="info">
        <p><strong>Nombre:</strong> {{ datos.nombre }}</p>
        <p><strong>Apellidos:</strong> {{ datos.apellidos }}</p>
        <p><strong>Edad:</strong> {{ datos.edad }} años</p>
        <button @click="activarEdicion()" class="btn-editar">Editar</button>
      </div>
    </div>

    <!-- Vista de edición (formulario) -->
    <div v-else class="formulario-edicion">
      <h3>Editar datos de {{ datos.nombre }}</h3>
      
      <div class="form-group">
        <label>Nombre:</label>
        <input type="text" v-model="personaEditada.nombre">
      </div>

      <div class="form-group">
        <label>Apellidos:</label>
        <input type="text" v-model="personaEditada.apellidos">
      </div>

      <div class="form-group">
        <label>Edad:</label>
        <input type="number" v-model.number="personaEditada.edad">
      </div>

      <div class="form-group">
        <label>URL de la foto:</label>
        <input type="text" v-model="personaEditada.foto">
      </div>

      <button @click="guardarCambios()" class="btn-actualizar">Guardar</button>
      <button @click="cancelarEdicion()" class="btn-cancelar">Cancelar</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MiPersona',
  
  // Props recibidas del componente padre
  props: ['datos'],
  
  // Estado local del componente
  data() {
    return {
      editando: false,  // Controla si está en modo edición
      personaEditada: {  // Copia de los datos para editar
        nombre: '',
        apellidos: '',
        edad: 0,
        foto: ''
      }
    }
  },
  
  // Métodos del componente
  methods: {
    // Activa el modo edición y copia los datos actuales
    activarEdicion() {
      this.editando = true;
      // Copiamos todos los datos incluyendo el ID
      this.personaEditada = { ...this.datos };
    },
    
    // Guarda los cambios y emite evento al padre
    guardarCambios() {
      // Aseguramos que se mantenga el ID original
      this.personaEditada.id = this.datos.id;
      this.$emit('actualizar', this.personaEditada);
      this.editando = false;
    },
    
    // Cancela la edición sin guardar cambios
    cancelarEdicion() {
      this.editando = false;
    }
  }
}
</script>

<style scoped>
/* Estilos específicos del componente */
.datos-persona {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.persona-card {
  display: flex;
  align-items: center;
  gap: 20px;
}

.foto-persona {
  width: 150px;
  height: 150px;
  border: 3px solid #4CAF50;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.info p {
  margin: 10px 0;
  font-size: 16px;
  color: #333;
}

.info strong {
  color: #4CAF50;
}

.btn-editar {
  margin-top: 10px;
  padding: 8px 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-editar:hover {
  background-color: #0b7dda;
}

.formulario-edicion {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.formulario-edicion h3 {
  margin-top: 0;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #4CAF50;
}

.btn-actualizar {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-actualizar:hover {
  background-color: #45a049;
}

.btn-cancelar {
  padding: 12px 24px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-cancelar:hover {
  background-color: #da190b;
}

/* Responsive */
@media (max-width: 600px) {
  .persona-card {
    flex-direction: column;
    text-align: center;
  }
  
  .foto-persona {
    width: 120px;
    height: 120px;
  }
}
</style>
