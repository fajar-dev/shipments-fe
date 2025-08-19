import axios from 'axios'
import ENV from '../environtment'

const api = axios.create({
  baseURL: ENV.apiUrl,
  timeout: 5000,
})
export default api