import axios from "axios";

const instance = axios.create({
  baseURL: "forum-8ikieug3k-leon2021new.vercel.app/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
