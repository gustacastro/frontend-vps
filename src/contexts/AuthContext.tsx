import React, { useEffect, useState } from 'react';
import type { User } from '../types/auth';
import { AuthAPI } from '../services/authApi';
import { AuthContext, type AuthContextType } from './AuthContextDefinition';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const login = (token: string) => {
        AuthAPI.saveToken(token);
        const decodedUser = AuthAPI.decodeToken(token);
        setUser(decodedUser);
    };

    const logout = () => {
        AuthAPI.removeToken();
        setUser(null);
    };

    const validateStoredToken = async () => {
        const storedToken = AuthAPI.getToken();

        if (!storedToken) {
            setIsLoading(false);
            return;
        }

        try {
            const validation = await AuthAPI.validateToken(storedToken);

            if (validation.valid) {
                const decodedUser = AuthAPI.decodeToken(storedToken);
                setUser(decodedUser);
            } else {
                AuthAPI.removeToken();
            }
        } catch (error) {
            console.error('Erro ao validar token:', error);
            AuthAPI.removeToken();
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        validateStoredToken();
    }, []);

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
