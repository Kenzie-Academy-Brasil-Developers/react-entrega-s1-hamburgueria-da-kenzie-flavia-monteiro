import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  timeout: 5000, // 5 seg
});

export default api;
