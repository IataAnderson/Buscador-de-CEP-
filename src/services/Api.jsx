import axios from "axios"

//https://viacep.com.br/ws/22451041/json/
const Api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default Api