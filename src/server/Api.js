import axios from 'axios'
import store from '../store/index'

export default () => {
  return axios.create({
    baseURL: store.state.baseURL,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${store.state.auth.token}`
    }
  })
}
