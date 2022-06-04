<template>
  <div>
    <div class="list">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'ProjectTwo' }">Counter</router-link>
      <router-link :to="{ name: 'ProjectThree' }">Search</router-link>
      <router-link :to="{ name: 'ProjectFour' }">project-4</router-link>
      <router-link :to="{ name: 'ProjectFive' }">project-5</router-link>
      <router-link :to="{ name: 'ProjectSix' }">project-6</router-link>
      <router-link :to="{ name: 'ProjectSeven' }">project-7</router-link>
      <router-link :to="{ name: 'ProjectEight' }">project-8</router-link>
      <router-link :to="{ name: 'ProjectNine' }">project-9</router-link>
      <router-link :to="{ name: 'ProjectTen' }">project-10</router-link>
      <router-link :to="{ name: 'ProjectEleven' }">project-11</router-link>
      <router-link :to="{ name: 'ProjectTwelve' }">project-12</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.list{
  display: grid;
  width: 60%;
  margin: 20px auto;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
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