import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const DashboardPage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-app-text-primary">Dashboard</h1>
                <p className="text-app-text-muted">Bem-vindo ao seu dashboard, {user?.name}!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-app-bg-card p-6 rounded-lg shadow-sm border border-app-border">
                    <h3 className="text-lg font-semibold text-app-text-primary mb-2">
                        Informações do usuário
                    </h3>
                    <div className="space-y-2 text-sm text-app-text-muted">
                        <p><strong className="text-app-text-primary">ID:</strong> {user?.id}</p>
                        <p><strong className="text-app-text-primary">Email:</strong> {user?.email}</p>
                        <p><strong className="text-app-text-primary">Nome:</strong> {user?.name}</p>
                    </div>
                </div>

                <div className="bg-app-bg-card p-6 rounded-lg shadow-sm border border-app-border">
                    <h3 className="text-lg font-semibold text-app-text-primary mb-2">
                        Estatísticas
                    </h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-app-text-muted">Total de bancos</span>
                            <span className="font-semibold text-app-text-primary">0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-app-text-muted">Convidados ativos</span>
                            <span className="font-semibold text-app-text-primary">0</span>
                        </div>
                    </div>
                </div>

                <div className="bg-app-bg-card p-6 rounded-lg shadow-sm border border-app-border">
                    <h3 className="text-lg font-semibold text-app-text-primary mb-2">
                        Atividade recente
                    </h3>
                    <p className="text-app-text-muted text-sm">
                        Nenhuma atividade recente
                    </p>
                </div>
            </div>
        </div>
    );
};
