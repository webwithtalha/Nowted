import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:5000/api";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log(`Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`Response: ${response.status} ${response.config.url}`);
    return response.data;
  },
  (error) => {
    console.error("Response Error:", error.response || error.message);
    return Promise.reject(
      error.response?.data || { message: "Something went wrong!" }
    );
  }
);

export default apiClient;