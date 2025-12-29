import axios from "axios";

const HTTP = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather'
})