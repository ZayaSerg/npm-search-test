import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/services/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: []
  },
  mutations: {
    SET_PACKAGES (state, payload) {
      state.packages = payload
    }
  },
  actions: {
    async getSearchResult ({ commit }, payload) {
      const { data } = await api.search(payload)
      commit('SET_PACKAGES', data.objects)
    }
  },
  getters: {
    packages: state => state.packages
  }
})