<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/report">Report</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
/* Estilos específicos para la navegación */
nav {
  padding: 1em;
  background-color: #f5f5f5;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #35495e;
}
</style>
