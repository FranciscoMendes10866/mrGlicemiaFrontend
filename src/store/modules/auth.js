import API from '../../server/Api'
import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    // Register
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    // Login
    loginEmail: null,
    loginPassword: null,
    loginError: null,
    token: null
  },
  actions: {
    createAccount ({ commit, state }) {
      return API().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword
      })
        .then(() => {
          router.push('/login')
        })
        .catch(() => {
          commit('setRegisterError')
        })
    },
    loginAccount ({ commit, state }) {
      return API().post('/auth/login', {
        email: state.loginEmail,
        password: state.loginPassword
      })
        .then(({ data }) => {
          commit('setToken', data.token)
          router.push('/dashboard')
        })
        .catch(() => {
          commit('setLoginError')
        })
    },
    logoutAccount ({ commit }) {
      commit('setToken', null)
      router.push('/')
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
  },
  mutations: {
    setRegisterEmail (state, registerEmail) {
      state.registerEmail = registerEmail
    },
    setRegisterPassword (state, registerPassword) {
      state.registerPassword = registerPassword
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setLoginEmail (state, loginEmail) {
      state.loginEmail = loginEmail
    },
    setLoginPassword (state, loginPassword) {
      state.loginPassword = loginPassword
    },
    setLoginError (state, error) {
      state.loginError = error
    },
    setToken (state, token) {
      state.token = token
    }
  }
}
