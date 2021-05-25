import axios from 'axios';

export default class api {
  static getCategories() {
    console.log('this is the url', process.env.REACT_APP_BACKEND_URL);
    return axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/categories`)
      .then(response => response.json());
  }
}
