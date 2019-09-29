<template>
  <div id="app">
    <NeuralNetworkForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import NeuralNetworkForm from './components/NeuralNetworkForm.vue'

export default {
  name: 'app',
  components: {
    NeuralNetworkForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
