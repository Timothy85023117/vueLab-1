<template>
  <Menu :Menu="Menu"/>
  <routerViewContent />
</template>

<script>
import routerViewContent from "./views/index.vue";
import Menu from "@/components/praticies/Menu.vue";
export default {
  components: {
    routerViewContent,
    Menu,
  },
  data(){
    return{
      Menu:['Home','About','Pratice']
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
