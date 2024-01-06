import axios from "axios";

const Api = axios.create({
    baseURL: 'https://e1maktab-lsfz.onrender.com/'
})

export default Api