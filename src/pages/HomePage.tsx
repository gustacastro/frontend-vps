import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const HomePage: React.FC = () => {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-app-bg flex flex-col">
            <nav className="bg-app-bg-card shadow-sm border-b border-app-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-app-text-primary">Portfolio</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            {isAuthenticated ? (
                                <>
                                    <span className="text-app-text-secondary">Olá, {user?.name}!</span>
                                    <Link
                                        to="/dashboard"
                                        className="bg-primary text-app-text-primary px-4 py-2 rounded-md hover:bg-primary-hover transition duration-200"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="bg-danger text-app-text-primary px-4 py-2 rounded-md hover:bg-danger-hover transition duration-200"
                                    >
                                        Sair
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-app-text-secondary hover:text-app-text-primary px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-primary text-app-text-primary px-4 py-2 rounded-md hover:bg-primary-hover transition duration-200"
                                    >
                                        Cadastrar
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-app-text-primary mb-4">Portfolio</h1>
                    <p className="text-xl text-app-text-muted">Bem-vindo ao meu portfolio</p>
                </div>
            </main>
        </div>
    );
};
