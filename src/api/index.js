import http from "./http";


const getJsonData = () => http.get('http://localhost:3000/data')

const deleteJsonData = (id) => http.delete(`http://localhost:3000/data/${id}`)

const searchJsonData = (keyWord) => http.get(`http://localhost:3000/data/?q=${keyWord}`)


export {
  getJsonData,
  deleteJsonData,
  searchJsonData,
}