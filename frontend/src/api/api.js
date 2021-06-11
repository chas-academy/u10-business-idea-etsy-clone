import axios from 'axios';
import callsetuser from '../App';

axios.defaults.withCredentials = true;

export default class api {
  static axios = axios.create();
  static getCategories() {
    return this.axios
      .get(`${process.env.REACT_APP_URL}/categories`)
      .then(response => response)
      .catch(error => error);
  }

  static getCategory(slug) {
    return this.axios
      .get(`${process.env.REACT_APP_URL}/categories/${slug}`)
      .then(response => response)
      .catch(error => error);
  }

  static getProduct(id) {
    return axios
      .get(`${process.env.REACT_APP_URL}/product/${id}`)
      .then(response => response)
      .catch(error => error);
  }

  static getProducts(category = null) {
    let query = category ? `/products/${category}` : '/products';
    return axios
      .get(`${process.env.REACT_APP_URL}${query}`)
      .then(response => response)
      .catch(error => error);
  }

  static getUserProducts(userid) {
    return axios
      .get(`${process.env.REACT_APP_URL}/store/${userid}`)
      .then(response => {
        return response;
      })
      .catch(error => error);
  }

  static postRegisterForm(user) {
    return axios
      .post(`${process.env.REACT_APP_URL}/register`, user)
      .then(response => {
        //axios.post(`${process.env.REACT_APP_URL}/orders/`, response.data.user.id);
        return response;
      })
      .catch(error => error);
  }

  static async addToCart(productId) {
    const { data: orderProduct } = await this.axios.post(
      `${process.env.REACT_APP_URL}/order/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem.token}`
        }
      }
    );

    return orderProduct;
  }

  static async getOrderProducts(userId) {
    return await this.axios
      .get(`${process.env.REACT_APP_URL}/orders/${userId}/products`)
      .then(response => {
        return response;
      })
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
      return { token: response.data.token, user: response.data.user };
    } else {
      return false;
    }
  }

  static logout() {
    return axios
      .post(`${process.env.REACT_APP_URL}/logout`)
      .then(response => response)
      .catch(error => error);
  }
}
