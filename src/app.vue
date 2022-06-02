<template>
  <nav>
    <router-link :to="{name:'Home'}">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link :to="{name:'Menu'}">Practice</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  padding: 30px;
  background: #ccc;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
