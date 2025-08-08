import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
        .string()
        .email('Email inválido')
        .required('Email é obrigatório'),
    password: yup
        .string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
});

export const registerSchema = yup.object({
    name: yup
        .string()
        .min(2, 'Nome deve ter pelo menos 2 caracteres')
        .required('Nome é obrigatório'),
    email: yup
        .string()
        .email('Email inválido')
        .required('Email é obrigatório'),
    password: yup
        .string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Senhas devem ser iguais')
        .required('Confirmação de senha é obrigatória'),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type RegisterFormData = yup.InferType<typeof registerSchema>;
