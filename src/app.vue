<template>
  <nav>
    <router-link :to="{name:'Home'}">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link :to="{name:'Pratice'}">Practice</router-link>
  </nav>
  <routerViewContent/>
</template>

<script>
import routerViewContent from "./views/index.vue"
export default {
  components:{
    routerViewContent
  }
}
</script>
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
  background: #eee;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
