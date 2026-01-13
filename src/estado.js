// Importación de la librería 'reactive'
import { reactive } from 'vue'

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

// Exportación del objeto 'datos' con estado centralizado
export const datos = reactive({
  personas: listadoPersonas,
  
  // Método para obtener una persona por ID
  obtenerPersona(id) {
    return this.personas.find(p => p.id === id);
  },
  
  // Método para actualizar una persona
  actualizarPersona(datosActualizados) {
    const index = this.personas.findIndex(p => p.id === datosActualizados.id);
    if (index !== -1) {
      this.personas.splice(index, 1, datosActualizados);
    }
  }
})
