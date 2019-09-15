<template>
  <div id="app">
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="stylus">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: $font-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-container {
  padding-top: 2em;
}
</style>
