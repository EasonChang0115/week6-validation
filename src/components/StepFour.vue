<template>
  <div class="step-Four slideInRight">
    <div class="title">Payment Method</div>
    <div class="sub-title">Add your credit card infomation!</div>
    <form @submit="stepFourSubmit" class="step-four-form">
      <div class="row">
        <div class="col-12">
          <label class="form-title" for="card">Card Number</label>
          <div :class="cardError ? 'input-box error' : 'input-box'">
            <input
              id="card"
              v-model="localCardName"
              type="text"
              placeholder="1234 5678 9012 3456">
            <i class="fas fa-exclamation-triangle"></i>
            <i class="fab fa-cc-visa"></i>
            <div class="alert">INVALID NUMBER</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 m-right">
          <label class="form-title" for="cardholderName">Cardholder Name</label>
          <div :class="holdNameError ? 'input-box error' : 'input-box'">
            <input
              id="cardholderName"
              v-model="localHoldName"
              type="text"
              placeholder="EXAMPLE NAME">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert left">REQUIRED FILED</div>
          </div>
        </div>
        <div class="col-6">
          <label class="form-title" for="bankName">Bank Name</label>
          <div :class="bankNameError ? 'input-box error' : 'input-box'">
            <input
              id="bankName"
              type="text"
              v-model="localBankName"
              placeholder="EXAMPLE BANK"
              autocomplete='tel'>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert two">REQUIRED FILED</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4 m-right m-b-0">
          <label class="form-title" for="cvv">CVV</label>
        </div>
        <div class="col-8 m-b-0">
          <label class="form-title">Expire Date</label>
        </div>
      </div>
      <div class="row">
        <div class="col-4 m-right">
          <div :class="CVVError ? 'input-box error' : 'input-box'">
            <input
              id="cvv"
              v-model="localCVV"
              type="text"
              placeholder="123">
              <i class="fas fa-exclamation-triangle"></i>
              <div class="alert">INVALID VALUE</div>
          </div>
        </div>
        <div class="col-4 m-right">
          <div :class="expireMMError ? 'input-box error' : 'input-box'">
            <select name="expireMonth"
              :style="{color: localExpireDateMM === 'MM' ? 'gray' : 'black'}"
              v-model="localExpireDateMM">
              <option>MM</option>
              <option v-for="i in 12" :key="i">{{ i }}</option>
            </select>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert three">INVALID VALUE</div>
          </div>
        </div>
        <div class="col-4">
          <div :class="expireDDError ? 'input-box error' : 'input-box'">
            <select name="expireDate"
              :style="{color: localExpireDateDD === 'DD' ? 'gray' : 'black'}"
              v-model="localExpireDateDD">
              <option>DD</option>
              <option v-for="i in 100" :key="i">{{ i }}</option>
            </select>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert four">INVALID VALUE</div>
          </div>
        </div>
      </div>
      <button class="btn submit">SUBMIT & NEXT</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Step4',
  data () {
    return {
      msg: 'Step4',
      cardError: false,
      holdNameError: false,
      bankNameError: false,
      CVVError: false,
      expireMMError: false,
      expireDDError: false
    };
  },
  computed: {
    ...mapState(['nowStep', 'cardName', 'holdName', 'bankName',
    'CVV', 'ExpireDateMM', 'ExpireDateDD']),
    localCardName: {
      get() {
        return this.cardName;
      },
      set(value) {
        this.onCardNameChange({value: value});
      }
    },
    localHoldName: {
      get() {
        return this.holdName;
      },
      set(value) {
        this.onHoldNameChange({value: value});
      }
    },
    localBankName: {
      get() {
        return this.bankName;
      },
      set(value) {
        this.onBankNameChange({value: value});
      }
    },
    localCVV: {
      get() {
        return this.CVV;
      },
      set(value) {
        this.onCVVChange({value: value});
      }
    },
    localExpireDateMM: {
      get() {
        return this.ExpireDateMM;
      },
      set(value) {
        this.onExpireDateMMChange({value: value});
      }
    },
    localExpireDateDD: {
      get() {
        return this.ExpireDateDD;
      },
      set(value) {
        this.onExpireDateDDChange({value: value});
      }
    },
    validateVardNumber() {
      let rule = /^[0-9]+$/;
      if (rule.test(this.localCardName)) {
        return true;
      }
      return false;
    },
    validateHolderName() {
      if (this.localHoldName.trim() !== '') {
        return true;
      }
      return false;
    },
    validateBankName() {
      if (this.localBankName.trim() !== '') {
        return true;
      }
      return false;
    },
    validateCVV() {
      if (this.localCVV.trim() !== '') {
        return true;
      }
      return false;
    },
    validateExpireMM() {
      if (this.localExpireDateMM.trim() !== 'MM') {
        return true;
      }
      return false;
    },
    validateExpireDD() {
      if (this.localExpireDateDD.trim() !== 'DD') {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapMutations(['changeStep', 'completeStep', 'onCardNameChange',
    'onHoldNameChange', 'onBankNameChange', 'onCVVChange',
    'onExpireDateMMChange', 'onExpireDateDDChange']),
    setErrorTime(type) {
      this.$data[type] = true;
      setTimeout(() => {
        this.$data[type] = false;
      }, 1500);
    },
    stepFourSubmit(e) {
      e.preventDefault();
      if (!this.validateVardNumber) {
        this.setErrorTime('cardError');
        return;
      } else if (!this.validateHolderName) {
        this.setErrorTime('holdNameError');
        return;
      } else if (!this.validateBankName) {
        this.setErrorTime('bankNameError');
        return;
      } else if (!this.validateCVV) {
        this.setErrorTime('CVVError');
        return;
      } else if (!this.validateExpireMM) {
        this.setErrorTime('expireMMError');
        return;
      } else if (!this.validateExpireDD) {
        this.setErrorTime('expireDDError');
        return;
      }
      this.completeStep({step: this.nowStep});
      this.changeStep({step: this.nowStep + 1});
    }
  }
};
</script>
