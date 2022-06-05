<template>
  <div class="ProjectFour">
    <h1>Filter Demo</h1>
    <ul class="filterData">
      <li>
        <input type="number" v-model.number="number" placeholder="請輸入數字 ..." max="16"/>
      </li>
      <li>轉換後的結果 => {{ filterNum }}</li>
    </ul>
  </div>
</template>

<script>
import { filter } from "@/utils/filter";
export default {
  name: "ProjectFour",
  data() {
    return {
      number: "",
    };
  },
  computed: {
    filterNum() {
      return filter(this.number);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ProjectFour {
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
}
</style>