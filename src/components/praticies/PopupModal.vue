<template>
  <div>
    <ul class="Modal">
      <li>
        <button @click="lightBoxOpen">Open PopupModal</button>
      </li>
    </ul>
    <!-- 定錨到主畫面 -->
    <teleport to="#app" v-if="isOpenState">
      <div class="black">
        <div class="container">
          <H4>Demo Modal</H4>
          <hr />
          <!-- 父層級傳入 slot -->
          <div class="inner">
            <slot></slot>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "title"
    };
  },
  methods: {
    lightBoxOpen() {
      this.$store.commit("projectSeverButtonControler", { isOpen: true });
    }
  },
  computed: {
    isOpenState() {
      return this.$store.state.projectSeven.lightBoxShow;
    }
  }
};
</script>

<style lang="scss" scoped>
.Modal {
  background: #eee;
  padding: 0;
  li {
    padding: 16px;
    list-style: none;
    text-align: center;
  }
  button {
    cursor: pointer;
    background: #057bff;
    border: none;
    color: #fff;
    border-radius: 4px;
    padding: 12px;
  }
}
h4 {
  text-align: center;
}
.black {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.541);
  .container {
    background: #fff;
    width: 50%;
    padding: 8px;
    border-radius: 8px;
    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>