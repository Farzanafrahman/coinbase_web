<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import Homepage from './views/Homepage.vue'
export default {
  name: "App",
};
</script>

<style>
@import "../src/assets/font/stylesheet.css";
@import "../src/assets/styles/hamburger.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: Poppins;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
