import axios, { AxiosResponse } from "axios";
import { IMedium } from "../models/medium";

axios.defaults.baseURL = "http://localhost:4000/api";

// axios.interceptors.request.use(
//   config => {
//     const token = window.localStorage.getItem("jwt");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(undefined, error => {
//   if (error.message === "Network Error" && !error.response) {
//     toast.error("Network error - make sure API is running!");
//   }
//   const { status, data, config } = error.response;
//   if (status === 404) {
//     history.push("/notfound");
//   }
//   if (status === 401) {
//     window.localStorage.removeItem("jwt");
//     history.push("/");
//     toast.info("Your session has expired. Please log in again!");
//   }
//   if (
//     status === 400 &&
//     config.method === "get" &&
//     data.errors.hasOwnProperty("id")
//   ) {
//     history.push("/notfound");
//   }
//   if (status === 500) {
//     toast.error("Server error - check the terminal for more info!");
//   }
//   throw error.response;
// });

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody)
};

const Media = {
  list: (): Promise<IMedium[]> => requests.get("/media"),
  details: (id: string) => requests.get(`/media/${id}`),
  create: (medium: IMedium) => requests.post("/media", medium),
  update: (medium: IMedium) => requests.put(`/media/${medium.id}`, medium),
  delete: (id: string) => requests.delete(`/media/${id}`)
};

export default { Media };
