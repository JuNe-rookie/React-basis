import axios from "axios";

const http = axios.create({
  timeout: 5000
})

http.interceptors.request.use(config => {
  return config

}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(config => {
	return config.data
}, err => {
	return Promise.reject(err)
})

export default http
