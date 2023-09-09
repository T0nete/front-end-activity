import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://three-points.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
