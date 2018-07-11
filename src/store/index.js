import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 在各vue的組件中 用computed來接state裡的屬性值
const state = {
  night: false
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

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
