import React, { forwardRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import toast from 'react-hot-toast';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    isFirst?: boolean;
    isLast?: boolean;
    copyable?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, isFirst = true, isLast = true, className = '', type, copyable = false, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === 'password';
        const inputType = isPassword && showPassword ? 'text' : type;

        const baseClasses = "appearance-none relative block w-full px-3 py-2 border border-app-border placeholder-app-text-placeholder text-app-text-primary bg-app-bg-input focus:outline-none focus:ring-app-focus focus:border-app-focus sm:text-sm";
        const hasMultipleIcons = isPassword && copyable;
        const iconPadding = hasMultipleIcons ? "pr-16" : (isPassword || copyable) ? "pr-10" : "";

        const handleCopy = async () => {
            if (copyable) {
                try {
                    let valueToUse = '';

                    if (props.id) {
                        const element = document.getElementById(props.id) as HTMLInputElement;
                        valueToUse = element ? element.value : '';
                    } else if (props.name) {
                        const element = document.querySelector(`input[name="${props.name}"]`) as HTMLInputElement;
                        valueToUse = element ? element.value : '';
                    } else if (ref && typeof ref === 'object' && ref.current) {
                        valueToUse = ref.current.value;
                    } else if (props.value) {
                        valueToUse = String(props.value);
                    }

                    if (valueToUse && valueToUse.trim() !== '') {
                        await navigator.clipboard.writeText(valueToUse);
                        toast.success('Copiado com sucesso!');
                    } else {
                        toast.error('Nenhum valor para copiar');
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (err) {
                    toast.error('Erro ao copiar');
                }
            }
        };

        let roundedClasses = "";
        if (isFirst && isLast) {
            roundedClasses = "rounded-md";
        } else if (isFirst) {
            roundedClasses = "rounded-t-md rounded-none";
        } else if (isLast) {
            roundedClasses = "rounded-b-md rounded-none";
        } else {
            roundedClasses = "rounded-none";
        }

        const errorClasses = error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "";

        return (
            <div>
                {label && (
                    <label htmlFor={props.id} className="block text-sm font-medium text-app-text-primary mb-1">
                        {label}
                        {props.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        type={inputType}
                        className={`${baseClasses} ${roundedClasses} ${errorClasses} ${iconPadding} ${className}`}
                        {...props}
                    />
                    {copyable && (
                        <button
                            type="button"
                            className={`absolute inset-y-0 ${isPassword ? 'right-8' : 'right-0'} pr-3 flex items-center z-10`}
                            onClick={handleCopy}
                        >
                            <MdContentCopy className="h-4 w-4 text-app-text-muted hover:text-app-text-secondary" />
                        </button>
                    )}
                    {isPassword && (
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible className="h-5 w-5 text-app-text-muted hover:text-app-text-secondary" />
                            ) : (
                                <AiOutlineEye className="h-5 w-5 text-app-text-muted hover:text-app-text-secondary" />
                            )}
                        </button>
                    )}
                </div>
                {error && (
                    <p className="mt-1 text-sm text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
