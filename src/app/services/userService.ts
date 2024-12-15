import apiClient from "./apiClient";
import { LoginResponse } from "./type";

export const userService = {
  createUser: async (userData: { username: string; email: string; password: string }) => {
    return apiClient.post("/users", userData);
  },

  loginUser: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await apiClient.post("/users/login", { email, password });
    return response as unknown as LoginResponse;
  }
};

