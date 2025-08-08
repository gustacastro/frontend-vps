import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/Button';
import { FiLogOut } from 'react-icons/fi';

export const Header: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-app-bg-card border-b border-app-border shadow-sm z-10">
            <div className="h-full px-4 lg:px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-xl font-semibold text-app-text-primary">
                        Dashboard
                    </h1>
                </div>

                <div className="flex items-center space-x-2 lg:space-x-4">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                        <span className="hidden sm:block text-sm text-app-text-secondary">
                            Olá, {user?.name || user?.email}
                        </span>
                        <Button
                            variant="danger"
                            icon={<FiLogOut />}
                            onClick={logout}
                        >
                            Sair
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
