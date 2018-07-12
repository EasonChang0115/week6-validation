<template>
  <div class="step-one slideInRight">
    <div class="title">Create Account</div>
    <div class="sub-title">Glad to see you here!</div>
    <form @submit="stepOneSubmit" class="step-one-form">
      <div class="row">
        <div class="col-12">
          <label class="form-title" for="email">Account</label>
          <div :class="emailError ? 'input-box error' : 'input-box'">
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="example@email.com">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert">INVALID EMAIL</div>
          </div>
        </div>
        <div class="col-12">
          <label class="form-title" for="password">Password</label>
          <div :class="passwordError ? 'input-box error' : 'input-box'">
            <input
              id="password"
              v-model="localPassword"
              type="password"
              placeholder="●●●●●●●●"
              autocomplete='tel'>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert">MINIMUM 8 CHARACTERS</div>
          </div>
        </div>
        <div class="col-12">
          <label class="form-title" for="confirm-password">Confirm Password</label>
          <div :class="confirmPasswordError ? 'input-box error' : 'input-box'">
            <input
              id="confirm-password"
              v-model="localConfirmPassword"
              type="password"
              placeholder="●●●●●●●●"
              autocomplete='tel'>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert">NOT MATCH</div>
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
  name: 'Step1',
  data () {
    return {
      msg: 'Step1',
      emailError: false,
      passwordError: false,
      confirmPasswordError: false
    };
  },
  computed: {
    ...mapState(['nowStep', 'account', 'password', 'confirmPassword']),
    email: {
      get() {
        return this.account;
      },
      set(value) {
        this.onAccountChange({value});
      }
    },
    localPassword: {
      get() {
        return this.password;
      },
      set(value) {
        this.onPasswordChange({value});
      }
    },
    localConfirmPassword: {
      get() {
        return this.confirmPassword;
      },
      set(value) {
        this.onConfirmPasswordChange({value});
      }
    },
    validateAccount() {
      let rule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (this.email.search(rule) !== -1) {
        return true;
      }
      return false;
    },
    validatePassword() {
     if (this.localPassword.length >= 8) {
       return true;
     }
     return false;
    },
    validateConfirmPassword() {
      if (this.localPassword === this.localConfirmPassword) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapMutations(['changeStep', 'completeStep', 'onAccountChange', 'onPasswordChange', 'onConfirmPasswordChange']),
    setErrorTime(type) {
      this.$data[type] = true;
      setTimeout(() => {
        this.$data[type] = false;
      }, 300);
    },
    stepOneSubmit(e) {
      e.preventDefault();
      if (!this.validateAccount) {
        this.setErrorTime('emailError');
        return;
      } else if (!this.validatePassword) {
        this.setErrorTime('passwordError');
        return;
      } else if (!this.validateConfirmPassword) {
        this.setErrorTime('confirmPasswordError');
        return;
      }
      this.completeStep({step: this.nowStep});
      this.changeStep({step: this.nowStep + 1});
    }
  }
};
</script>
