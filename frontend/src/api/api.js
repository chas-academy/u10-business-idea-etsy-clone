import axios from 'axios';

export default class api {
    
    static getCategories() {
       return axios.get(`${process.env.REACT_APP_URL}categories`)
       .then(response => response.data)
       .catch(error => error)
    }

    static getCategory(slug) {
        return axios.get(`${process.env.REACT_APP_URL}categories/${slug}`)
       .then(response => response.data)
       .catch(error => error)
    }

    static getProducts() {
       return axios.get(`${process.env.REACT_APP_URL}products`)
       .then(response => response.data)
       .catch(error => error)
    }
}
