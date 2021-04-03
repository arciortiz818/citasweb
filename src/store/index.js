import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: "LoginLayout",
  },
  mutations: {
    setLayout: (state, payload) => {
      state.layout = payload;
    },
  },
  actions: {
    setLayout: (context, payload) => {
      context.commit('setLayout', payload)
    },
  },
  modules: {},
});
