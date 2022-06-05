<template>
    <nav>
      <router-link :to="{ name: item }" v-for="item of Menu" :key="item">{{item}}</router-link>
    </nav>
</template>

<script>
export default {
    name:"Menu",
    props:{
        Menu:{
            type:Array
        }
    }
};
</script>

<style lang="scss" scoped>
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
    &+a::before{
        content:"|";
        padding: 0 10px;
        color: #000;
    }
  }
  
}
</style>