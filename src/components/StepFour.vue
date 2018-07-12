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
              type="text"
              placeholder="1234 5678 9012 3456">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert">INVALID EMAIL</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 m-right">
          <label class="form-title" for="cardholderName">Cardholder Name</label>
          <div class="input-box">
            <input
              id="cardholderName"
              type="text"
              placeholder="EXAMPLE NAME">
          </div>
        </div>
        <div class="col-6">
          <label class="form-title" for="bankName">Bank Name</label>
          <div :class="bankNameError ? 'input-box error' : 'input-box'">
            <input
              id="bankName"
              type="text"
              placeholder="EXAMPLE BANK"
              autocomplete='tel'>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert two">NUMBERS ONLY</div>
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
          <div class="input-box">
            <input
              id="cvv"
              type="text"
              placeholder="123">
          </div>
        </div>
        <div class="col-4 m-right">
          <select name="expireMonth">
            <option>123</option>
          </select>
        </div>
        <div class="col-4">
          <select name="expireDate" >
            <option>123</option>
          </select>
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
      bankNameError: false
    };
  },
  computed: {
    ...mapState(['nowStep'])
  },
  methods: {
    ...mapMutations(['changeStep', 'completeStep']),
    setErrorTime(type) {
      this.$data[type] = true;
      setTimeout(() => {
        this.$data[type] = false;
      }, 300);
    },
    stepFourSubmit(e) {
      e.preventDefault();
    }
  }
};
</script>
