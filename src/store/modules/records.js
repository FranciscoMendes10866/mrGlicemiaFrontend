import API from '../../server/Api'
// import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    recordsList: [],
    insulin: null,
    glucose: null,
    dateTime: null,
    medication: null
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
    },
    createRecord ({ commit, state }) {
      let bool = state.medication
      if (bool === 'true') {
        bool = true
      } else {
        bool = false
      }
      return API().post('/records', {
        insulin: state.insulin,
        glucose: state.glucose,
        dateTime: state.dateTime,
        medication: bool
      })
        .then(({ data }) => {
          commit('appendRecords', data)
          commit('setInsulin', null)
          commit('setGlucose', null)
          commit('setDateTime', null)
          commit('setMedication', null)
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
    },
    setInsulin (state, insulin) {
      state.insulin = insulin
    },
    setGlucose (state, glucose) {
      state.glucose = glucose
    },
    setDateTime (state, dateTime) {
      state.dateTime = dateTime
    },
    setMedication (state, medication) {
      state.medication = medication
    },
    appendRecords (state, record) {
      state.recordsList.push(record)
    }
  }
}
