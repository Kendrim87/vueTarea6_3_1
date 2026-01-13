# Tarea 6.2.2: Transición entre vistas (Vue 3)

## Requisitos del ejercicio

- Modifica el código del caso práctico para que se realice una transición al cambiar entre las vistas de datos y edición de cada elemento persona.
- La transición se implementa dentro del componente `MiPersona`.
- Las transiciones en Vue se usan principalmente junto con `v-if`, `v-else-if` y `v-else`.
- Se emplean las clases CSS generadas por `<Transition>` (enter/leave) tal como se vio en el apartado teórico.

## Cambios realizados

- Se añadió `<Transition name="cambio-vista" mode="out-in">` alrededor de las dos vistas (`v-if` / `v-else`).
- Se asignaron claves únicas (`key`) a cada vista para que Vue gestione correctamente la animación.
- Se definió la animación en CSS (opacidad + escala) mediante las clases `cambio-vista-*`.
- El resto de la lógica (props, edición, eventos `actualizar`) se mantiene sin cambios.

## Uso básico

### Desarrollo (hot-reload)
```bash
cd /var/www/html/DWEC/UT06/Tarea6_2_2/vue4
npm run serve
```
Acceso: `http://localhost:8080`

### Producción
```bash
cd /var/www/html/DWEC/UT06/Tarea6_2_2/vue4
npm run build
```
Resultado en `dist/` (acceso local): `http://localhost/DWEC/UT06/Tarea6_2_2/vue4/dist/`

## Conceptos clave usados

- Componente `<Transition>` con `mode="out-in"` para encadenar salida y entrada.
- Directivas `v-if` / `v-else` para alternar vistas.
- Clases de transición generadas por Vue: `*-enter-active`, `*-enter-from`, `*-enter-to`, `*-leave-active`, `*-leave-from`, `*-leave-to`.
- CSS de la transición: opacidad y escala para un cambio suave entre vistas.
