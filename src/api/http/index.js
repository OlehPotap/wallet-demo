import axios from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api",
});

$api.interceptors.request.use((config) => {
  config.headers.Authotization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
