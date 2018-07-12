<template>
  <div class="step-two slideInRight">
    <div class="title">General Infomation</div>
    <div class="sub-title">Tell us who you are!</div>
    <form @submit="stepTwoSubmit" class="step-two-form">
      <div class="row">
        <div class="col-6 m-right">
          <label class="form-title" for="name">Name<span class="notice">(optional)</span></label>
          <div class="input-box">
            <input
              id="name"
              v-model="localName"
              type="text"
              placeholder="Example Name">
          </div>
        </div>
        <div class="col-6">
          <label class="form-title" for="phone">Phone*</label>
          <div :class="phoneError ? 'input-box error' : 'input-box'">
            <input
              id="phone"
              v-model="localPhone"
              type="text"
              placeholder="0912 345 678"
              autocomplete='tel'>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert two">NUMBERS ONLY</div>
          </div>
        </div>
      </div>
      <label class="form-title">Birth Date<span class="notice">(optional)</span></label>
      <div class="row">
        <div class="col-4 m-right">
          <select name="birthYear" v-model="localBirthYear">
            <option
              v-for="(year, index) in optionYear"
              :key="index"
              :value="year">{{ year }}</option>
          </select>
        </div>
        <div class="col-4 m-right">
          <select name="birthMonth" v-model="localBirthMonth">
            <option
              v-for="(month, index) in optionMonths"
              :key="index"
              :value="month">{{ month }}</option>
          </select>
        </div>
        <div class="col-4">
          <select name="birthDate" v-model="localBirthDate">
            <option
              v-for="(month, index) in optionDate"
              :key="index"
              :value="month">{{ month }}</option>
          </select>
        </div>
      </div>
      <label class="form-title">Address</label>
      <div class="row">
        <div class="col-6 m-right">
          <select name="addressCity" v-model="localAddressCity">
            <option
              v-for="(city, index) in optionCities"
              :key="index"
              :value="city">{{ city }}</option>
          </select>
        </div>
        <div class="col-6">
          <select name="addressDist" v-model="localAddressDist">
            <option
              v-for="(dist, index) in optionDist"
              :key="index"
              :value="dist">{{ dist }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div :class="AddressError ? 'input-box error' : 'input-box'">
            <input
              id="confirm-password"
              v-model="localAddressDetail"
              type="text"
              placeholder="detail address"
              autocomplete='tel'>
            <i class="fas fa-exclamation-triangle"></i>
            <div class="alert">REQUIRED FILED</div>
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
  name: 'Step2',
  data () {
    return {
      msg: 'Step2',
      phoneError: false,
      AddressError: false,
      optionYear: [],
      optionMonths: [],
      optionDate: [],
      optionCities: [
        '台北市',
        '基隆市',
        '新北市',
        '連江縣',
        '宜蘭縣',
        '新竹市',
        '新竹縣',
        '桃園市',
        '苗栗縣',
        '台中市',
        '彰化縣',
        '南投縣',
        '嘉義市',
        '嘉義縣',
        '雲林縣',
        '台南市',
        '高雄市',
        '澎湖縣',
        '金門縣',
        '屏東縣',
        '台東縣',
        '花蓮縣'
      ],
      optionDist: ['北投區', '士林區', '中山區', '內湖區', '大同區', '松山區', '萬華區',
      '中正區', '大安區', '信義區', '南港區', '文山區']
    };
  },
  watch: {
    localBirthYear() {
      for (let i = 1; i <= this.getDays; i++) {
        this.optionDate.push(i);
      }
    },
    localBirthMonth() {
      for (let i = 1; i <= this.getDays; i++) {
        this.optionDate.push(i);
      }
    }
  },
  mounted() {
    this.getInitDate();
  },
  computed: {
    ...mapState(['nowStep', 'name', 'phone', 'birthYear', 'birthMonth', 'birthDate',
    'addressCity', 'addressDist', 'addressDetail']),
    localName: {
      get() {
        return this.name;
      },
      set(value) {
        this.onNameChange({value});
      }
    },
    localPhone: {
      get() {
        return this.phone;
      },
      set(value) {
        this.onPhoneChange({value});
      }
    },
    localBirthYear: {
      get() {
        return this.birthYear;
      },
      set(value) {
        this.onBirthYearChange({value});
      }
    },
    localBirthMonth: {
      get() {
        return this.birthMonth;
      },
      set(value) {
        this.onBirthMonthChange({value});
      }
    },
    localBirthDate: {
      get() {
        return this.birthDate;
      },
      set(value) {
        this.onBirthDateChange({value});
      }
    },
    localAddressCity: {
      get() {
        return this.addressCity;
      },
      set(value) {
        this.onAddressCityChange({value});
      }
    },
    localAddressDist: {
      get() {
        return this.addressDist;
      },
      set(value) {
        this.onAddressDistChange({value});
      }
    },
    localAddressDetail: {
      get() {
        return this.addressDetail;
      },
      set(value) {
        this.onAddressDetailChange({value});
      }
    },
    getDays() {
      return new Date(this.localBirthYear, this.localBirthMonth, 0).getDate();
    },
    validatePhone() {
      let rule = /^[0-9]+$/;
      if (rule.test(this.localPhone)) {
        return true;
      }
      return false;
    },
    validateAddressDetail() {
      if (!this.localAddressDetail.trim() !== '') {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapMutations([
    'changeStep', 'completeStep', 'onNameChange', 'onPhoneChange',
    'onBirthYearChange', 'onBirthMonthChange', 'onBirthDateChange',
    'onAddressCityChange', 'onAddressDistChange', 'onAddressDetailChange']),
    setErrorTime(type) {
      this.$data[type] = true;
      setTimeout(() => {
        this.$data[type] = false;
      }, 3000);
    },
    stepTwoSubmit(e) {
      e.preventDefault();
       if (!this.validatePhone) {
        this.setErrorTime('phoneError');
        return;
      } else if (!this.validateAddressDetail) {
        this.setErrorTime('AddressError');
        return;
      }
      this.completeStep({step: this.nowStep});
      this.changeStep({step: this.nowStep + 1});
    },
    getInitDate() {
      let today = new Date();
      for (let i = today.getFullYear(); i >= 1990; i--) {
        this.optionYear.push(i);
      }
      this.optionYear.reverse();
      for (let i = 1; i <= 12; i++) {
        this.optionMonths.push(i);
      }
      for (let i = 1; i <= this.getDays; i++) {
        this.optionDate.push(i);
      }
    }
  }
};
</script>
