import Cookies from 'js-cookie';
import type { LoginData, RegisterData, TokenResponse, TokenValidation, User } from '../types/auth';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export class AuthAPI {
    static async login(data: LoginData): Promise<TokenResponse> {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.erro || error.detail || 'Erro no login');
        }

        return response.json();
    }

    static async register(data: RegisterData): Promise<TokenResponse> {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.erro || error.detail || 'Erro no cadastro');
        }

        return response.json();
    }

    static async validateToken(token: string): Promise<TokenValidation> {
        const response = await fetch(`${API_BASE}/auth/validate-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            return { valid: false };
        }

        return response.json();
    }

    static saveToken(token: string): void {
        Cookies.set('auth_token', token, { expires: 7 });
    }

    static getToken(): string | undefined {
        return Cookies.get('auth_token');
    }

    static removeToken(): void {
        Cookies.remove('auth_token');
    }

    static decodeToken(token: string): User | null {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return {
                id: payload.id,
                email: payload.email,
                name: payload.name,
            };
        } catch {
            return null;
        }
    }
}
