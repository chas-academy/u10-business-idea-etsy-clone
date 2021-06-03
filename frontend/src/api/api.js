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

  static async login(user) {
    await axios.get(`${process.env.REACT_APP_URL}/sanctum/csrf-cookie`);
    const response = await axios.post(`${process.env.REACT_APP_URL}/login`, user);

    if (
      response.data &&
      response.data !== 'Invalid username or password' &&
      (response.status === 204 || response.status === 200)
    ) {
      console.log('Login successful', response);
      return { token: response.data.token, user: response.data.user };
    } else {
      return false;
    }
  }
}
