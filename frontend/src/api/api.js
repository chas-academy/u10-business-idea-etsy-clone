import axios from 'axios';

export default class api {
  static getCategories() {
    return axios
      .get(`https://u10-backend.herokuapp.com/api/categories`)
      .then(response => response.data)
      .catch(error => error);
  }

  static getCategory(slug) {
    return axios
      .get(`https://u10-backend.herokuapp.com/api/categories/${slug}`)
      .then(response => response.data)
      .catch(error => error);
  }

  static getProducts() {
    return axios
      .get(`https://u10-backend.herokuapp.com/api/products`)
      .then(response => response.data)
      .catch(error => error);
  }

  static postRegisterForm(user) {
    return axios
      .post(`https://u10-backend.herokuapp.com/api/register`, user)      //${process.env.REACT_APP_URL}
      .then(response => response.data)
      .catch(error => error);
  }

  static login(user) {
    let formData = new FormData();
    formData.append('email', 'hej@mail.com');
    formData.append('password', 'hejhej');

    return axios
    .get(`https://u10-backend.herokuapp.com/api/sanctum/csrf-cookie`).then(
      axios
      .post(`${process.env.REACT_APP_URL}/login`, formData, {withCredentials: true})
      .then((response) => {
        console.log(response.headers)
      })
    .catch(error => error))
    .catch(error => error)
  }
}
