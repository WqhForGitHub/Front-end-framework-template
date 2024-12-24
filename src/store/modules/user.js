const state = {
  userDetails: {}
};

const mutations = {
  SET_USER_DETAILS(state, details) {
    state.userDetails = details;
  }
};

const actions = {
  fetchUserDetails({ commit }) {
    commit('SET_USER_DETAILS')
  }
};

const getters = {
  userDetails: state => state.userDetails
};

export default {
  namespaced: true, // 用于命名空间管理
  state,
  mutations,
  actions,
  getters
}