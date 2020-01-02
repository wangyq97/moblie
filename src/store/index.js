import Vue from 'vue'
import Vuex from 'vuex'
import { setLocal, getLocal } from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getLocal('user')
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setLocal('user', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
