import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-app-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-secondary">404</h1>
                    <h2 className="text-3xl font-bold text-app-text-primary mb-4">Página não encontrada</h2>
                    <p className="text-app-text-muted mb-8">
                        A página que você está procurando não existe ou foi removida.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        to="/"
                        className="inline-block bg-primary text-app-text-primary px-6 py-3 rounded-md hover:bg-primary-hover transition duration-200 font-medium"
                    >
                        Voltar à página inicial
                    </Link>
                </div>
            </div>
        </div>
    );
};
