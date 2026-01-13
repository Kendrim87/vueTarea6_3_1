# Tarea 6.3.1: Creación de una aplicación Vue con rutas y estado centralizado

## Enunciado

Modifica el caso práctico del apartado anterior (aplicación Vue con componentes de una sola página que muestre los datos de un listado (array) de personas), para que la aplicación utilice rutas:

**Ruta raíz.** Mostrará un listado con el nombre de la persona y un enlace para acceder a sus datos.

**Ruta /personas/:id.** Mostrará los datos (nombre, apellidos, fotografía y edad) de la persona indicada a través de su id. Dispondrá de un enlace para volver al listado y otro para acceder al formulario de edición.

**Ruta /personas/:id/editar.** Mostrará un formulario de edición de la persona. Dispondrá de un enlace para volver a la vista de datos de la persona.

El listado de personas estará almacenado de manera centralizada mediante la API Reactivity. Cada componente cargará los datos de la persona correspondiente a través del id definido en su ruta.

## Estructura del Proyecto

### Estructura de Carpetas

```text
src/
├── App.vue                  # Componente raíz con router-view
├── main.js                  # Configuración de la aplicación y rutas
├── estado.js               # Estado centralizado con Reactivity API
└── components/
    ├── Listado.vue         # Componente de listado de personas
    ├── DetallePerson.vue   # Componente de detalle de una persona
    └── EditarPersona.vue   # Componente de formulario de edición
```

### Estado Centralizado (estado.js)

El archivo `estado.js` utiliza la función `reactive()` de Vue para crear un estado centralizado que es accesible desde todos los componentes:

```javascript
export const datos = reactive({
  personas: [...],  // Array de personas
  
  obtenerPersona(id) {
    return this.personas.find(p => p.id === id);
  },
  
  actualizarPersona(datosActualizados) {
    // Actualiza los datos de una persona
```

## Instalación y Ejecución

### Instalación de dependencias

```bash
npm install
```

### Desarrollo

```bash
npm run serve
```

### Build para producción

```bash
npm run build
```

## Acceso a la aplicación

- **Desarrollo**: `http://localhost:8080/#/`
- **Producción**: `http://localhost/DWEC/UT06/Tarea6_3_1/vue5/dist/`
