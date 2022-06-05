<template>
  <div class="ProjectFive">
    <h1>List Demo</h1>
    <List :data="propsIn" />
  </div>
</template>

<script>
import List from "@/components/praticies/List.vue"
export default {
  name: "ProjectFive",
  data(){
    return{
      propsIn:this.$store.state.projectFive,
      default:[]
    }
  },
  components:{
    List
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  text-align: center;
}
</style>