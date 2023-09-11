import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://three-points.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
