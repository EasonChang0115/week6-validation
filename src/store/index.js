import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 在各vue的組件中 用computed來接state裡的屬性值
const state = {
  nowStep: 1,
  steps: [{type: false}, {type: false}, {type: false}, {type: false}],
  account: '',
  password: '',
  confirmPassword: '',
  name: '',
  phone: '',
  birthYear: 1990,
  birthMonth: 1,
  birthDate: 1,
  addressCity: '台北市',
  addressDist: '北投區',
  addressDetail: '',
  imgFile: [],
  cardName: '',
  holdName: '',
  bankName: '',
  CVV: '',
  ExpireDateMM: 'MM',
  ExpireDateDD: 'DD'
};

// store裡面的computed
const getters = {

};

// 不能在actions中指定state 要發出mutations
// 呼叫actions 用 dispatch
// actions的方法 第一個參數 都是 context 包含了mutations的commit 及 actions的 dispatch 和其他store的方法  用在module
// 非同步操作
const actions = {

};

// 呼叫mutations 用 commit
// 唯一可以改變state的方法
// 只能做同步操作
const mutations = {
  completeStep(state, { step }) {
    state.steps[step - 1].type = true;
  },
  changeStep(state, { step }) {
    state.nowStep = step;
  },
  onAccountChange(state, { value }) {
    state.account = value;
  },
  onPasswordChange(state, { value }) {
    state.password = value;
  },
  onConfirmPasswordChange(state, { value }) {
    state.confirmPassword = value;
  },
  onNameChange(state, { value }) {
    state.name = value;
  },
  onPhoneChange(state, { value }) {
    state.phone = value;
  },
  onBirthYearChange(state, { value }) {
    state.birthYear = value;
  },
  onBirthMonthChange(state, { value }) {
    state.birthMonth = value;
  },
  onBirthDateChange(state, { value }) {
    state.birthDate = value;
  },
  onAddressCityChange(state, { value }) {
    state.addressCity = value;
  },
  onAddressDistChange(state, { value }) {
    state.addressDist = value;
  },
  onAddressDetailChange(state, { value }) {
    state.addressDetail = value;
  },
  onCardNameChange(state, { value }) {
    state.cardName = value;
  },
  onHoldNameChange(state, { value }) {
    state.holdName = value;
  },
  onBankNameChange(state, { value }) {
    state.bankName = value;
  },
  onCVVChange(state, { value }) {
    state.CVV = value;
  },
  onExpireDateMMChange(state, { value }) {
    state.ExpireDateMM = value;
  },
  onExpireDateDDChange(state, { value }) {
    state.ExpireDateDD = value;
  },
  addImage(state, { img }) {
    if (state.imgFile.length === 3) return;
    state.imgFile.push(img);
  },
  removeImage(state, {index}) {
    state.imgFile.splice(index, 1);
  },
  initAllData(state) {
    state.nowStep = 1;
    state.steps = [{type: false}, {type: false}, {type: false}, {type: false}];
    state.account = '';
    state.password = '';
    state.confirmPassword = '';
    state.name = '';
    state.phone = '';
    state.birthYear = 1990;
    state.birthMonth = 1;
    state.birthDate = 1;
    state.addressCity = '台北市';
    state.addressDist = '北投區';
    state.addressDetail = '';
    state.imgFile = [];
    state.cardName = '';
    state.holdName = '';
    state.bankName = '';
    state.CVV = '';
    state.ExpireDateMM = 'MM';
    state.ExpireDateDD = 'DD';
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
