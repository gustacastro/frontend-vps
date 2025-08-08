import React from 'react';
import { MdGroup } from 'react-icons/md';
import { Button } from '../components/ui/Button';

export const GuestsPage: React.FC = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-app-text-primary">Convidados</h1>
                <p className="text-app-text-muted">Gerencie os convidados do sistema para transações financeiras</p>
            </div>

            <div className="bg-app-bg-card rounded-lg shadow p-6">
                <div className="text-center py-12">
                    <MdGroup className="mx-auto h-12 w-12 text-app-text-muted" />
                    <h3 className="mt-2 text-sm font-medium text-app-text-primary">Nenhum convidado encontrado</h3>
                    <p className="mt-1 text-sm text-app-text-muted">
                        Comece convidando usuários para o sistema.
                    </p>
                    <div className="mt-6">
                        <Button variant="primary" icon={<MdGroup className="h-4 w-4" />} fit >
                            Convidar Usuário
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
