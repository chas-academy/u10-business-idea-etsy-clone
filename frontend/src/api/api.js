import axios from 'axios';

axios.defaults.withCredentials = true;

export default class api {
  static getCategories() {
    return axios
      .get(`${process.env.REACT_APP_URL}/categories`)
      .then(response => response.data)
      .catch(error => error);
  }

  static getCategory(slug) {
    return axios
      .get(`${process.env.REACT_APP_URL}/categories/${slug}`)
      .then(response => response.data)
      .catch(error => error);
  }

  static getProducts() {
    return axios
      .get(`${process.env.REACT_APP_URL}/products`)
      .then(response => response.data)
      .catch(error => error);
  }

  static postRegisterForm(user) {
    return axios
      .post(`${process.env.REACT_APP_URL}/register`, user)
      .then(response => response.data)
      .catch(error => error);
  }

  static login(user) {
   return axios
    .get(`${process.env.REACT_APP_URL}/sanctum/csrf-cookie`).then(
      axios
      .post(`${process.env.REACT_APP_URL}/login`, user)
      .then((response) => {
        console.log(response)
      })
    .catch(error => error))
    .catch(error => error)
  }
}
