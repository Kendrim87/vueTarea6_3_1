# Tarea 6.2.1: Creación de una aplicación Vue con componentes

## Enunciado

Crea una aplicación Vue con componentes de una sola página que muestre los datos de un listado (array) de personas.

Dicho listado estará formado por un array de objetos con las siguientes propiedades:
- Nombre
- Apellidos
- Fotografía (cargada de Internet a través de una URL)
- Edad

La aplicación deberá utilizar un componente denominado **MiPersona** para mostrar los datos y el formulario de edición de cada persona.

El componente implementará los botones y la lógica necesaria para alternar entre las vistas de datos y edición.

---

## Proceso de instalación y configuración

### 1. Instalación de Vue CLI

Vue CLI es necesario para crear y gestionar proyectos Vue. Se instaló globalmente con npm:

```bash
sudo npm install -g @vue/cli
```

### 2. Creación del proyecto

Se creó el proyecto Vue con configuración por defecto en la ruta especificada:

```bash
cd /var/www/html/DWEC/UT06/Tarea6_2_1
vue create vue3 -d
```

La opción `-d` crea el proyecto con la configuración por defecto, evitando el asistente de configuración.

### 3. Estructura del proyecto

El proyecto generado tiene la siguiente estructura:

```
vue3/
├── public/           # Archivos públicos (index.html)
├── src/
│   ├── assets/      # Recursos estáticos
│   ├── components/  # Componentes Vue
│   │   └── MiPersona.vue
│   ├── App.vue      # Componente principal
│   └── main.js      # Punto de entrada de la aplicación
├── dist/            # Aplicación compilada (generada con npm run build)
├── package.json     # Dependencias del proyecto
└── README.md        # Esta documentación
```

---

## Desarrollo de la aplicación

### Componente principal: App.vue

Este componente contiene:
- **Listado de personas**: Array con 4 personas de ejemplo
- **Iteración con v-for**: Crea un componente `MiPersona` por cada persona
- **Gestión de eventos**: Recibe eventos del componente hijo para actualizar datos

**Características principales:**
- Importa el componente `MiPersona`
- Define el array de personas en `data()`
- Método `actualizarPersona()` para procesar cambios del componente hijo
- Estilos globales para el contenedor principal

### Componente hijo: MiPersona.vue

Este componente se encarga de:
- **Recibir datos mediante props**: La prop `datos` contiene la información de la persona
- **Dos vistas alternativas**:
  - **Vista normal**: Muestra los datos con un botón "Editar"
  - **Vista de edición**: Formulario para modificar los datos
- **Emitir eventos**: Envía los datos actualizados al componente padre

**Características principales:**
- Estado local `editando` controla qué vista mostrar
- Copia de datos en `personaEditada` para no modificar el original hasta guardar
- Métodos:
  - `activarEdicion()`: Activa el modo edición
  - `guardarCambios()`: Emite evento `actualizar` con los nuevos datos
  - `cancelarEdicion()`: Cancela sin guardar

### Comunicación entre componentes

**Padre → Hijo (Props):**
```vue
<MiPersona :datos="persona" />
```

**Hijo → Padre (Eventos):**
```javascript
// En el hijo
this.$emit('actualizar', this.personaEditada);

// En el padre
<MiPersona @actualizar="actualizarPersona" />
```

---

## Estilos

Los estilos están inspirados en la aplicación de referencia (`Tarea6_1_1/Vue`) con:
- Color principal: `#4CAF50` (verde)
- Tarjetas con sombras y bordes redondeados
- Diseño responsive para móviles
- Fotos con borde verde y sombra
- Botones con efectos hover

---

## Comandos disponibles

### Modo desarrollo (con hot-reload)
```bash
cd /var/www/html/DWEC/UT06/Tarea6_2_1/vue3
npm run serve
```
Accesible en: `http://localhost:8080`

### Compilar para producción
```bash
npm run build
```
Genera la aplicación optimizada en la carpeta `dist/`

### Acceso desde localhost

Para acceder a la aplicación compilada desde `http://localhost`:

1. La aplicación compilada está en la carpeta `dist/`
2. Acceder mediante: `http://localhost/DWEC/UT06/Tarea6_2_1/vue3/dist/`

---

## Conceptos de Vue aplicados

1. **Componentes de archivo único (.vue)**: Cada componente tiene plantilla, lógica y estilos
2. **Props**: Para pasar datos del padre al hijo
3. **Eventos personalizados**: Para comunicación hijo → padre
4. **Directivas**:
   - `v-if` / `v-else`: Mostrar/ocultar elementos
   - `v-for`: Iterar sobre arrays
   - `v-model`: Binding bidireccional en formularios
   - `v-bind` (`:attr`): Binding de atributos
   - `v-on` (`@event`): Escuchar eventos
5. **Estilos con scoped**: Los estilos del componente no afectan al resto

---

## Datos de ejemplo

La aplicación incluye 4 personas de prueba con fotos de [randomuser.me](https://randomuser.me):
- Laura Pérez García (28 años)
- Juan Martínez López (35 años)
- Ana González Ruiz (24 años)
- Carlos Sánchez Torres (42 años)

Puedes modificar cualquier campo haciendo clic en "Editar".

---

## Notas adicionales

- La aplicación mantiene la reactividad de Vue al actualizar los datos
- Se utiliza el operador spread (`...`) para copiar objetos sin modificar el original
- Cada persona tiene un `id` único usado como `:key` en `v-for`
- Los estilos son responsive y se adaptan a pantallas pequeñas
