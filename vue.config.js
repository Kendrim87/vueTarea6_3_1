const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Configurar publicPath para usar rutas relativas
  // Permite acceder desde subcarpetas como /DWEC/UT06/Tarea6_2_1/vue3/dist/
  publicPath: './'
})
