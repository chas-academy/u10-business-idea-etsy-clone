import axios from 'axios';
import callsetuser from '../App';

axios.defaults.withCredentials = true;

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
      .then(response => {
        console.log('api.getproducts', response);
        return response;
      })
      .catch(error => error);
  }

  static getUserProducts(userid) {
    return axios
      .get(`${process.env.REACT_APP_URL}/store/${userid}`)
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => error);
  }

  static postRegisterForm(user) {
    return axios
      .post(`${process.env.REACT_APP_URL}/register`, user)
      .then(response => response)
      .catch(error => error);
  }

  static login(user) {
    return axios
      .get(`${process.env.REACT_APP_URL}/sanctum/csrf-cookie`)
      .then(
        axios
          .post(`${process.env.REACT_APP_URL}/login`, user)
          .then(response => {
            if (response.data) {
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('user', JSON.stringify(response.data.user));
              console.log('Login successful');
              return response;
            } else {
              console.log('Login failed');
              return response;
            }
          })
          .catch(error => error)
      )
      .catch(error => error);
  }
}
