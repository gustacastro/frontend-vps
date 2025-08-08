import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { MdPersonAdd } from 'react-icons/md';
import { useAuth } from '../hooks/useAuth';
import { AuthAPI } from '../services/authApi';
import { registerSchema, type RegisterFormData } from '../schemas/auth';
import { Input, Button, Link } from '../components/ui';

export const RegisterPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema)
    });

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);

        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, ...registerData } = data;
            const response = await AuthAPI.register(registerData);
            login(response.access_token);
            navigate('/dashboard');
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'Erro no cadastro');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-app-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-app-text-primary">
                        Crie sua conta
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <Input
                            {...register('name')}
                            id="name"
                            type="text"
                            placeholder="Digite seu nome completo"
                            label="Nome completo"
                            error={errors.name?.message}
                            required
                        />
                        <Input
                            {...register('email')}
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            label="Email"
                            error={errors.email?.message}
                            required
                        />
                        <Input
                            {...register('password')}
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            label="Senha"
                            error={errors.password?.message}
                            required
                        />
                        <Input
                            {...register('confirmPassword')}
                            id="confirmPassword"
                            type="password"
                            placeholder="Digite novamente sua senha"
                            label="Confirmar senha"
                            error={errors.confirmPassword?.message}
                            required
                        />
                    </div>

                    <div>
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            icon={<MdPersonAdd className="w-5 h-5" />}
                        >
                            Cadastrar
                        </Button>
                    </div>

                    <div className="text-center">
                        <Link to="/login">
                            Já tem uma conta? Faça login
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link to="/" variant="muted">
                            Voltar à página inicial
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
