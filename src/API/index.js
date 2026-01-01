import axios from "axios";

const forProduction = import.meta.env.PROD;

const baseURL = forProduction? 'https://api.hgbrasil.com' : '/api'

export const HTTP = axios.create({
    baseURL: baseURL
})