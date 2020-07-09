import API from '../../server/Api'
import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    // to get the profile data
    profileData: null,
    // to create the profile
    firstName: null,
    lastName: null,
    country: null,
    city: null,
    age: null,
    picture: null
  },
  actions: {
    fetchProfileData ({ commit }) {
      return API().get('/profile')
        .then(({ data }) => {
          commit('setFetchData', data)
        })
    },
    createProfile ({ commit, state }) {
      // multipart data structure - form
      const formData = new FormData()
      formData.append('firstName', state.firstName)
      formData.append('lastName', state.lastName)
      formData.append('country', state.country)
      formData.append('city', state.city)
      formData.append('age', state.age)
      formData.append('picture', state.picture)
      // sends the multipart data to the API
      return API().post('/profile', formData,
        { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(() => {
          commit('setFirstName', null)
          commit('setLastName', null)
          commit('setCountry', null)
          commit('setPicture', null)
          commit('setCity', null)
          commit('setAge', null)
          router.push('/dashboard')
        })
    }
  },
  getters: {},
  mutations: {
    setFetchData (state, profileData) {
      state.profileData = profileData
    },
    setFirstName (state, firstName) {
      state.firstName = firstName
    },
    setLastName (state, lastName) {
      state.lastName = lastName
    },
    setCountry (state, country) {
      state.country = country
    },
    setCity (state, city) {
      state.city = city
    },
    setAge (state, age) {
      state.age = age
    },
    setPicture (state, picture) {
      state.picture = picture
    }
  }
}
