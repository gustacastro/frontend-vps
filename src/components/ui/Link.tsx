import React from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends RouterLinkProps {
    variant?: 'primary' | 'secondary' | 'muted';
    children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
    variant = 'primary',
    className = '',
    children,
    ...props
}) => {
    const variantClasses = {
        primary: "font-medium text-primary-light hover:text-primary",
        secondary: "font-medium text-app-text-secondary hover:text-app-text-primary",
        muted: "font-medium text-app-text-muted hover:text-app-text-secondary"
    };

    return (
        <RouterLink
            className={`${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </RouterLink>
    );
};
