import axios from "axios";

export default class api {
    
    static getCategories() {
       return axios.get(`${process.env.REACT_APP_URL}categories`)
       .then(response => response.data)
       .catch(error => error)
    }
}