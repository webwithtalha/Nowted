import apiClient from "./apiClient";
import { LoginResponse, LogoutResponse } from "./type";

export const userService = {
  createUser: async (userData: { username: string; email: string; password: string }) => {
    return apiClient.post("/users", userData);
  },

  loginUser: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await apiClient.post("/users/login", { email, password });
    return response as unknown as LoginResponse;
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

