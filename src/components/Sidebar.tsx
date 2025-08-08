import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MdDashboard,
    MdAccountBalance,
    MdPeople,
    MdMenu
} from 'react-icons/md';

export const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: <MdDashboard className="w-5 h-5" />
        },
        {
            name: 'Bancos',
            path: '/banks',
            icon: <MdAccountBalance className="w-5 h-5" />
        },
        {
            name: 'Convidados',
            path: '/guests',
            icon: <MdPeople className="w-5 h-5" />
        }
    ];

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-app-bg-card text-app-text-primary"
            >
                <MdMenu className="w-6 h-6" />
            </button>

            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`fixed left-0 top-0 w-64 h-full bg-app-bg-card border-r border-app-border text-app-text-primary z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}>
                <div className="p-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-app-text-primary font-bold text-lg">D</span>
                        </div>
                        <h2 className="text-xl font-bold text-app-text-primary">Dash</h2>
                    </div>
                </div>

                <nav className="mt-8">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-3 px-6 py-3 text-app-text-secondary hover:text-app-text-primary hover:bg-app-bg-hover transition-colors ${isActive ? 'text-app-text-primary bg-primary hover:bg-primary-hover' : ''
                                        }`
                                    }
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};
