import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

// 24 June Task  npm install axios

// interceptors  will run with ll the request
//  you can modify cofiguration using interceptors
// we will add token with each and every request which we have store in
// localStorage

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) 
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);
