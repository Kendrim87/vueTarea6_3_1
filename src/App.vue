<template>
  <div class="container">
    <!-- router-view es el contenedor donde se cargarán los componentes según la ruta -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}
</style>
