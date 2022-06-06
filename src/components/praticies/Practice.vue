<template>
  <div>
    <h4>練習項目清單</h4>
    <div class="list">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'ProjectTwo' }">Counter</router-link>
      <router-link :to="{ name: 'ProjectThree' }">Search</router-link>
      <router-link :to="{ name: 'ProjectFour' }">Filter Demo</router-link>
      <router-link :to="{ name: 'ProjectFive' }">listDemo</router-link>
      <router-link :to="{ name: 'ProjectSeven' }">ModalDemo</router-link>
      <router-link :to="{ name: 'ProjectEight' }">Register</router-link>
      <router-link :to="{ name: 'ProjectNine' }">project-9</router-link>
      <router-link :to="{ name: 'ProjectTen' }">project-10</router-link>
      <router-link :to="{ name: 'ProjectEleven' }">project-11</router-link>
      <router-link :to="{ name: 'ProjectTwelve' }">project-12</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pratice",
};
</script>

<style lang="scss" scoped>
h4{
  display: flex;
  justify-content: center;
}
.list{
  display: grid;
  width: 60%;
  margin: 20px auto;
  grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
  a{
    padding: 15px;
    text-decoration: none;
    color: #000;
    border: 1px solid #ccc;
    &:hover{
      color: aquamarine;
    }
  }
}
</style>