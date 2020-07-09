import API from '../../server/Api'
// import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    recordsList: []
  },
  actions: {
    fetchRecords ({ commit }) {
      return API().get('/records')
        .then(({ data }) => {
          commit('setFetchRecords', data)
        })
    },
    deleteRecord ({ commit }, record) {
      return API().delete(`/records/${record.id}`)
        .then(() => {
          commit('setDeleteRecord', record)
        })
    }
  },
  getters: {},
  mutations: {
    setFetchRecords (state, recordsList) {
      state.recordsList = recordsList
    },
    setDeleteRecord (state, record) {
      state.recordsList.splice(state.recordsList.indexOf(record), 1)
    }
  }
}
