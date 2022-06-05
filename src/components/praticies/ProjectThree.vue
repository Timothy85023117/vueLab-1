<template>
  <div>
    <div class="ProjectThree">
      <h1>Search</h1>
      <ul class="filterData">
        <li>
          <input type="text" v-model="filter" placeholder="搜尋文字 ..." />
        </li>
        <li>目前有 {{ ori.length }} 筆資料</li>
        <li v-for="item of ori" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { filterArraySearch } from "@/utils/filterSearch";
export default {
  name: "ProjectThree",
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    ori() {
      return filterArraySearch(this.filter, this.$store.state.projectThree);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ProjectThree {
  h1 {
    text-align: center;
  }
}
.filterData {
  background: #eee;
  margin: 16px;
  padding: 8px 16px;
  li {
    list-style: none;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    padding: 15px 10px;
    border: 1px solid rgb(234, 234, 234);
    input {
      box-sizing: border-box;
      width: 100%;
      background: #fff;
      padding: 15px 10px;
      border: 1px solid rgb(177, 177, 177);
      border-radius: 4px;
      &:focus {
        border: 1px solid rgb(138, 138, 138);
      }
    }
  }
  li:nth-child(1) {
    padding: 0;
  }
  li:nth-child(2) {
    padding-left: 0;
    background-color: #eee;
  }
}
</style>