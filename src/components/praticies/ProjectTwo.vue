<template>
  <div>
    <div class="ProjectTwo">
      <h1>Count</h1>
      <div class="row-1">
        <p>Count : {{ count }}</p>
      </div>
      <div class="row-2">
        <button @click="clickImp(-1)">減 1</button>
        <button @click="clickImp(1)">加 1</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTwo",
  methods: {
    clickImp(num) {
      console.log(num);
      this.$store.commit({ type: "countChange", amount: num });
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  created() {
    this.$store.state.count = 0;
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ProjectTwo {
  display: grid;
  grid-template-rows: 50px;
  justify-items: center;
  .row-2 {
    display: flex;
    width: 300px;
    justify-content: space-between;
  }
}
</style>