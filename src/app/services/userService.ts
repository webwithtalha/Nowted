import axios, { AxiosError } from "axios";
import apiClient from "./apiClient";
import { LoginResponse, LogoutResponse } from "./type";

export const userService = {
  createUser: async (userData: {
    username: string;
    email: string;
    password: string;
  }) => {
    return apiClient.post("/users", userData);
  },

  loginUser: async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const response = await apiClient.post<LoginResponse>("/users/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        if (
          axiosError.response &&
          axiosError.response.data &&
          axiosError.response.data.message
        ) {
          return { success: false, message: axiosError.response.data.message };
        }
      }
      return { success: false, message: "An unexpected error occurred" };
    }
  },

  logoutUser: async (): Promise<LogoutResponse> => {
    try {
      const response = await apiClient.post("/users/logout");
      return response as unknown as LogoutResponse;
    } catch (error) {
      console.error("Logout API error:", error);
      throw error;
    }
  },
};
