import axios from 'axios'

class ApiService {
  constructor() {
    this.http = axios.create({
      // baseURL: import.meta.env.VITE_API_URL,
      baseURL: "https://registry.npmjs.org/-/v1",
      headers: {
        Accept: "application/json",
      }
    })
  }
  search = (value) => this.http.get(`/search?text=${value}&size=100`)
}

export default new ApiService();