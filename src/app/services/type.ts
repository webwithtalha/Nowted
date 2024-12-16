export interface LoginResponse {
    success: boolean;
    message?: string;
    token?: string;
}

export interface LogoutResponse {
    success: boolean;
    message?: string;
}