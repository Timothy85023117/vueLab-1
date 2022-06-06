<template>
  <div class="ProjectSeven">
    <h1>Modal Demo</h1>
    <PopupModal>
      <!-- 主要內容區塊注入 -->
      <p>Woohoo,you're reading this text in a modal!</p>
      <button class="button" @click="lightBoxClose">Close PopupModal</button>
      <!--  -->
    </PopupModal>
  </div>
</template>

<script>
import PopupModal from "@/components/praticies/PopupModal.vue";
export default {
  name: "ProjectSeven",
  components: {
    PopupModal
  },
  methods: {
    lightBoxClose() {
      this.$store.commit("projectSeverButtonControler", { isOpen: false });
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
// componet 內吃不到父層的 css
.button {
  cursor: pointer;
  padding: 8px;
  background: #057bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>