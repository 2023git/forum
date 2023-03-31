import axios from "axios";

const instance = axios.create({
  baseURL: "https://forum-alpha.vercel.app/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
