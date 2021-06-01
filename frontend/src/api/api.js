import axios from 'axios';

export default class api {
  static getCategories() {
    return axios
      .get(`${process.env.REACT_APP_URL}/categories`)
      .then(response => response)
      .catch(error => error);
  }

  static getCategory(slug) {
    return axios
      .get(`${process.env.REACT_APP_URL}/categories/${slug}`)
      .then(response => response)
      .catch(error => error);
  }

  static getProducts() {
    return axios
      .get(`${process.env.REACT_APP_URL}/products`)
      .then(response => response)
      .catch(error => error);
  }

  static postRegisterForm(user) {
    return axios
      .post(`${process.env.REACT_APP_URL}/register`, user)
      .then(response => response)
      .catch(error => error);
  }

  static postLoginForm(user) {
    return axios
      .post(`${process.env.REACT_APP_URL}/login`, user)
      .then(response => {
        if (response.data) {
          localStorage.token = response.data;
          console.log('Login successful');
          return response;
        } else {
          console.log('Login failed');
          return response;
        }
      })
      .catch(error => error);
  }
}
