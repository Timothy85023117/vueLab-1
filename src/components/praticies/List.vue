<template>
<div>
    <ul class="List">
        <li v-for="(item,index) of List" :key="item" @click="print(item,index)">{{item}}</li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
    data: {
      type: [String, Array],
    },
  },
  computed:{
      List(){
          return this.data
      }
  },
  methods:{
      print(el,index){
          alert(`{"index":${index},"value":${el}}`)
      }
  }
};
</script>

<style lang="scss" scoped>
.List{
    padding: 0;
    margin: 0;
    li{
        text-align: center;
        list-style: none;
        line-height: 3;
        font-size: 16px;
        border-bottom: 1px solid rgb(209, 209, 209);
        &:hover{
            cursor: pointer;
            background: rgb(240, 240, 240);
        }
    }
    li:nth-child(1){
        border-top: 1px solid rgb(209, 209, 209);;
    }
}
</style>