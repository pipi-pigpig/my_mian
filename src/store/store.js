import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      // 初始化状态
      preDateList: Object
    };
  },
  mutations: {
    // 更改状态的逻辑
    updateMyObject(state, payload) {
      // console.log('我改变了')
      state.preDateList = payload;
    }
  },
  actions: {
    // 处理异步操作或复杂逻辑
    sendPreDateList({ commit }, preDateList) {
    //  console.log('我收到了')
      commit('updateMyObject', preDateList);
    }
  },
  getters: {
    
  }
});