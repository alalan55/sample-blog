import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default api
// export default {
//   get(path) {
//     console.log(axios.get)
//    return Axios.get(`${import.meta.env.VITE_BASE_URL}${path}`);
//   },
//   update(path, item) {
//     return axios.put(`${import.meta.env.VITE_BASE_URL}${path}`, item);
//   },
//   delete(path, item) {
//     return axios.delete(`${import.meta.env.VITE_BASE_URL}${path}`, item);
//   },
//   create(path, item) {
//     return axios.post(`${import.meta.env.VITE_BASE_URL}${path}`, item);
//   },
// };
