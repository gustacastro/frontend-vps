export interface User {
    id: string;
    email: string;
    name: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    email: string;
    password: string;
    name: string;
}

export interface RegisterFormData extends RegisterData {
    confirmPassword: string;
}

export interface TokenResponse {
    access_token: string;
    token_type: string;
}

export interface TokenValidation {
    valid: boolean;
}
