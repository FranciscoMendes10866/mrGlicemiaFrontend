import createPersistedState from 'vuex-persistedstate'

import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import records from './modules/records'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'http://localhost:3333/api/v1'
  },
  modules: {
    auth,
    records,
    profile
  },
  plugins: [
    createPersistedState()
  ]
})
