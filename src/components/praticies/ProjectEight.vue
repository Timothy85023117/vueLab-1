<template>
  <div class="ProjectEight">
    <h1>Register</h1>
    <form>
      <div class="input_wrap">
        <label for="register_id">身分證字號</label>
        <input
          id="register_id"
          type="text"
          maxlength="10"
          placeholder=""
          v-model="inputValue.id"
          ref="id"
          @blur="checkId"
        />
        <span ref="ruleCode_id"></span>
        <span class="wait" :class="{checked:registerFinally.id}"></span>
      </div>
      <div class="input_wrap">
        <label for="register_name">姓名</label>
        <input
          id="register_name"
          type="text"
          placeholder=""
          v-model="inputValue.name"
          ref="name"
          @blur="checkName"
        />
        <span ref="ruleCode_name"></span>
        <span class="wait" :class="{checked:registerFinally.name}"></span>
      </div>
      <div class="input_wrap">
        <label for="register_phoneNum">手機號碼</label>
        <input
          id="register_phoneNum"
          type="text"
          maxlength="10"
          placeholder=""
          v-model="inputValue.phoneNum"
          ref="phoneNum"
          @blur="checkPhoneNum"
        />
        <span ref="ruleCode_phone"></span>
        <span class="wait" :class="{checked:registerFinally.phoneNum}"></span>
      </div>
      <div class="input_wrap" ref="gender">
        <label for="male">男</label>
        <input
          type="radio"
          id="male"
          value="1"
          v-model="inputValue.gender"
          name="gender"
          @blur="checkGender"
        />
        <label for="female">女</label>
        <input
          type="radio"
          id="female"
          value="2"
          v-model="inputValue.gender"
          name="gender"
          @blur="checkGender"
        />
        <span ref="ruleCode_gender"></span>
        <span class="wait" :class="{checked:registerFinally.gender}"></span>
      </div>
      <div class="input_wrap">
        <div class="btn" @click="registerAccount">送出</div>
        <div class="btn" @click="clearForm">清除</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProjectEight",
  data() {
    return {
      // 表單偵測項目 全為 true 時通過驗證即可註冊
      inputValue: {
        id: "",
        name: "",
        gender: "",
        phoneNum: ""
      },
      // 驗證狀態
      registerFinally: {
        id: false,
        name: false,
        gender: false,
        phoneNum: false
      },
      checkState: {
        phoneNum: {
          failKeyIn: "此欄位為必填欄位",
          failReg: "手機號碼上限為10個字 (包含數字、開頭為 09)"
        },
        id: {
          failKeyIn: "此欄位為必填欄位",
          failReg:
            "身分證必需為10個字 (包含英、數字、開頭英文、第一位數字 1 或 2)"
        },
        name: {
          failKeyIn: "此欄位為必填欄位",
          failReg: "姓名長度上限為30字"
        },
        gender: {
          failKeyIn: "此欄位為必填欄位"
        }
      },
      // 驗證REG
      regRule: {
        mobileReg: { reg0: /^(09+\d{8})$/ },
        IdReg: { reg0: /[A-Za-z]{1}[1-2]{2}[0-9]{7}/ },
        nameReg: { reg0: /\w{30}/ }
      },
      verifyTrigger: false
    };
  },
  methods: {
    // 手機、名字、身分證等 REG 與 空數值相關檢查
    // (數值,錯誤提示,驗證規則)
    checkData(value, text, reg, key) {
      const vm = this;
      let _value = value;
      let _text = text;
      let _reg = [];
      for (const iterator of Object.keys(reg).map(el => reg[el])) {
        _reg.push(iterator);
      }
      return new Promise((resolve, reject) => {
        if (_value === "" || _value === undefined) {
          reject(_text.failKeyIn);
        }
        for (const iterator of _reg) {
          if (!new RegExp(iterator).test(_value)) {
            reject(_text.failReg);
          }
        }
        vm.$refs[key].classList.remove("shake");
        resolve(true);
      });
    },
    //手機驗證
    async checkPhoneNum(el) {
      const vm = this;
      try {
        vm.registerFinally.phoneNum = await vm.checkData(
          vm.inputValue.phoneNum,
          vm.checkState.phoneNum,
          vm.regRule.mobileReg,
          "phoneNum"
        );
        // 清除紅色錯誤提示
        vm.$refs.ruleCode_phone.textContent = "";
        vm.registerFinally.phoneNum = true;
      } catch (error) {
        vm.$refs.ruleCode_phone.textContent = error;
        vm.registerFinally.phoneNum = false;
      }
    },
    // 身分證驗證
    async checkId(el) {
      const vm = this;
      try {
        vm.registerFinally.id = await vm.checkData(
          vm.inputValue.id,
          vm.checkState.id,
          vm.regRule.IdReg,
          "id"
        );
        vm.registerFinally.id = true;
        vm.$refs.ruleCode_id.textContent = "";
      } catch (error) {
        vm.$refs.ruleCode_id.textContent = error;
        vm.registerFinally.id = false;
      }
    },
    // 姓名驗證
    async checkName() {
      const vm = this;
      if (vm.inputValue.name === "" || vm.inputValue.name === undefined) {
        vm.registerFinally.name = false;
        vm.$refs.ruleCode_name.textContent = "请输入您的大名";
        return;
      }
      vm.registerFinally.name = true;
      vm.$refs.ruleCode_name.textContent = "";
    },
    checkGender(el) {
      const vm = this;
      vm.registerFinally.gender = vm.inputValue.gender == 1 || 2 ? true : false;
      if (!vm.registerFinally.gender) {
        vm.$refs.ruleCode_gender.textContent = "請選擇性別";
        return;
      }
    },
    //開戶
    registerAccount() {
      const vm = this;
      for (const key of Object.keys(vm.registerFinally)) {
        if (!vm.registerFinally[key]) {
          vm.$refs[key].classList.add("shake");
          let clearInet = setTimeout(() => {
            vm.$refs[key].classList.remove("shake");
          }, 500);
          return;
        }
      }
      alert(`恭喜註冊成功 ! 身分證: ${vm.inputValue.id} ,姓名 :${vm.inputValue.name},性別 :${vm.inputValue.gender},手機號碼 :${vm.inputValue.phoneNum}`);
    },
    // 清除所有欄位
    clearForm() {
      this.inputValue = { id: "", name: "", gender: "", phoneNum: "" };
      this.registerFinally = {
        id: false,
        name: false,
        gender: false,
        phoneNum: false
      };
      this.$refs.ruleCode_id.textContent = "";
      this.$refs.ruleCode_name.textContent = "";
      this.$refs.ruleCode_phone.textContent = "";
      this.$refs.ruleCode_gender.textContent = "";
    }
  }
};
</script>
<style scoped lang="scss">
.ProjectEight {
  form {
    background: #eee;
    width: 90%;
    padding: 24px;
    margin: 0 auto;
    .input_wrap {
      position: relative;
      display: flex;
      align-items: center;
      label {
        flex: 1;
      }
      input {
        flex: 5;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 100%;
        box-sizing: border-box;
        color: #2c3e50;
        font-size: 13px;
      }
      span {
        display: block;
        height: 12px;
        font-size: 12px;
        color: red;
        &.pass {
          color: green;
        }
      }

      span.wait {
        position: absolute;
      }
      span.checked {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        font-size: 20px;
        line-height: 20px;
        width: 40px;
        &::before {
          content: "√ ";
          color: #018e18;
        }
      }
    }
    .btn{
      background-color: #fff;
      padding: 12px;
      border-radius: 4px;
      &+.btn{
        margin-left: 8px;
      }
    }
  }
  .shake {
    animation: shake 0.5s;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>