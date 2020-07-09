import API from '../../server/Api'

export default {
  namespaced: true,
  state: {
    profileData: null
  },
  actions: {
    fetchProfileData ({ commit }) {
      return API().get('/profile')
        .then(({ data }) => {
          commit('setFetchData', data)
        })
    }
  },
  getters: {},
  mutations: {
    setFetchData (state, profileData) {
      state.profileData = profileData
    }
  }
}
