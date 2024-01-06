import axios from "axios";

const Api = axios.create({
    baseURL: 'https://e1maktab-lsfz.onrender.com/'
})


// const Api = axios.create({
//     baseURL: 'http://localhost:5000/'
// })

export default Api