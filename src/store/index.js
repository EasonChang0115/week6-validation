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
  imgFile: []
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
  addImage(state, { img }) {
    if (state.imgFile.length === 3) return;
    state.imgFile.push(img);
  },
  removeImage(state, {index}) {
    state.imgFile.splice(index, 1);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
