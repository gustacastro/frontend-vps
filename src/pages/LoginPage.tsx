import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { MdLogin } from 'react-icons/md';
import { useAuth } from '../hooks/useAuth';
import { AuthAPI } from '../services/authApi';
import { loginSchema, type LoginFormData } from '../schemas/auth';
import { Input, Button, Link } from '../components/ui';

export const LoginPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);

        try {
            const response = await AuthAPI.login(data);
            login(response.access_token);
            navigate('/dashboard');
        } catch (err) {
            toast.error(err instanceof Error ? err.message : 'Erro no login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-app-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-app-text-primary">
                        Faça login na sua conta
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
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
                    </div>

                    <div>
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            icon={<MdLogin className="w-5 h-5" />}
                        >
                            Entrar
                        </Button>
                    </div>

                    <div className="text-center">
                        <Link to="/register">
                            Não tem uma conta? Cadastre-se
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
