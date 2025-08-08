import React from 'react';

export const BanksPage: React.FC = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-app-text-primary">Bancos</h1>
                <p className="text-app-text-muted">Gerencie seus bancos de questões</p>
            </div>

            <div className="bg-app-bg-card rounded-lg shadow p-6">
                <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-app-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-app-text-primary">Nenhum banco encontrado</h3>
                    <p className="mt-1 text-sm text-app-text-muted">
                        Comece criando um novo banco de questões.
                    </p>
                    <div className="mt-6">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-app-text-primary bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-focus"
                        >
                            Criar Banco
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
