import React from 'react';
import { Puff } from 'react-loader-spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    isLoading?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    fit?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    isLoading = false,
    children,
    icon,
    iconPosition = 'left',
    fit = false,
    className = '',
    disabled,
    ...props
}) => {
    const baseClasses = `group relative flex justify-center items-center py-2 px-4 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-focus gap-2 ${fit ? 'w-fit m-auto' : 'w-full'}`;

    const variantClasses = {
        primary: "border-transparent text-app-text-primary bg-primary hover:bg-primary-hover",
        secondary: "border-app-border text-app-text-secondary bg-transparent hover:bg-app-bg-secondary",
        danger: "border-transparent text-app-text-primary bg-danger hover:bg-danger-hover"
    };

    const disabledClasses = (disabled || isLoading) ? "opacity-50 cursor-not-allowed" : "";

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    <Puff
                        visible={true}
                        height="20"
                        width="20"
                        color="currentColor"
                        ariaLabel="puff-loading"
                    />
                    <span>Carregando...</span>
                </>
            );
        }

        if (icon && iconPosition === 'left') {
            return (
                <>
                    {icon}
                    <span style={{ position: 'relative', top: '1px' }}>{children}</span>
                </>
            );
        }

        if (icon && iconPosition === 'right') {
            return (
                <>
                    <span style={{ position: 'relative', top: '2px' }}>{children}</span>
                    {icon}
                </>
            );
        }

        return children;
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {renderContent()}
        </button>
    );
};
