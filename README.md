# Tarea 6.3.1 - Aplicación Vue con Rutas

## Descripción

Esta tarea implementa una aplicación Vue 3 con sistema de rutas (vue-router) que permite navegar entre diferentes vistas de un listado de personas. La aplicación utiliza la API Reactivity de Vue para centralizar la gestión del estado.

## Requisitos Implementados

### 1. Ruta Raíz (/)
- Muestra un listado con el nombre de cada persona
- Cada persona tiene un enlace "Ver detalles" que permite acceder a sus datos completos
- Los datos se cargan desde el estado centralizado

### 2. Ruta de Detalle (/personas/:id)
- Muestra los datos completos de la persona seleccionada:
  - Nombre
  - Apellidos
  - Fotografía
  - Edad
- Dispone de dos enlaces de navegación:
  - "Volver al listado" - regresa a la ruta raíz
  - "Editar" - accede al formulario de edición

### 3. Ruta de Edición (/personas/:id/editar)
- Muestra un formulario para editar los datos de la persona:
  - Nombre
  - Apellidos
  - Edad
  - URL de la fotografía
- Incluye una vista previa de la fotografía mientras se edita
- Dispone de dos botones:
  - "Guardar cambios" - guarda los cambios en el estado centralizado y redirige a la vista de detalle
  - "Cancelar" - regresa a la vista de detalle sin guardar cambios

## Arquitectura

### Estructura de Carpetas

```
src/
├── App.vue                  # Componente raíz con router-view
├── main.js                  # Configuración de la aplicación y rutas
├── estado.js               # Estado centralizado con Reactivity API
└── components/
    ├── Listado.vue         # Componente de listado de personas
    ├── DetallePerson.vue   # Componente de detalle de una persona
    ├── EditarPersona.vue   # Componente de formulario de edición
    └── MiPersona.vue       # Componente heredado de la tarea anterior
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
  }
})
```

### Componentes

#### Listado.vue
- Carga el estado centralizado
- Itera sobre el array de personas
- Proporciona enlaces para acceder a los detalles de cada persona

#### DetallePerson.vue
- Recibe el ID de la persona a través de la ruta
- Utiliza un computed property para obtener los datos de la persona desde el estado centralizado
- Muestra todos los datos de la persona con su fotografía

#### EditarPersona.vue
- Recibe el ID de la persona a través de la ruta
- Utiliza un watcher para detectar cambios en el ID de la ruta (navegación entre diferentes personas)
- Carga los datos iniciales en el hook `created()`
- Proporciona un formulario para editar los datos
- Muestra una vista previa de la fotografía mientras se edita

### Router (main.js)

Se configura un router con tres rutas:

- `/` → Componente `Listado`
- `/personas/:id` → Componente `DetallePerson` (con props activado)
- `/personas/:id/editar` → Componente `EditarPersona` (con props activado)

El router utiliza el modo hash (`createWebHashHistory`) para que las URLs sean más sencillas de gestionar en desarrollo.

## Instalación y Ejecución

### Instalación de dependencias

```bash
npm install
```

### Desarrollo

```bash
npm run serve
```

La aplicación estará disponible en `http://localhost:8080/#/`

### Build para producción

```bash
npm run build
```

## Características Principales

1. **Navegación entre vistas**: Los componentes `router-link` permite navegar entre las diferentes vistas de forma sencilla
2. **Parámetros dinámicos en rutas**: Las rutas `/personas/:id` y `/personas/:id/editar` utilizan parámetros dinámicos para identificar qué persona se está visualizando o editando
3. **Estado centralizado**: La API Reactivity de Vue permite que todos los componentes accedan y modifiquen el mismo estado de forma reactiva
4. **Reutilización de componentes**: El componente `DetallePerson` y `EditarPersona` se reutilizan para mostrar datos de diferentes personas a través del mismo parámetro dinámico
5. **Watchers para cambios de ruta**: Se utiliza un watcher en `EditarPersona` para detectar cuando el usuario navega de una persona a otra

## Notas Importantes

- Se utiliza un watcher en lugar del hook `created()` para observar cambios en el parámetro de la ruta, evitando problemas cuando se navega entre personas del mismo tipo (como ir de `/personas/1/editar` a `/personas/2/editar`).
- El estado centralizado con `reactive()` proporciona una forma sencilla de compartir datos entre componentes sin necesidad de props o eventos.
- La aplicación utiliza transiciones suaves entre vistas gracias a Vue Router.

## Datos de Ejemplo

La aplicación viene preconfigurada con cuatro personas:

1. **Mario Bros.** - 39 años
2. **Luigi Bros.** - 38 años
3. **Peach Princess** - 30 años
4. **Toad Captain** - 24 años

Todos los datos se pueden editar a través de la interfaz de la aplicación.
