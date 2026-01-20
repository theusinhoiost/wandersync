import { z } from "zod";

export const createAccountSchema = z
    .object({
        fullName: z.string().min(2, "Nome muito curto"),
        email: z.string().email("Email inválido"),
        phone: z.string().min(10, "Telefone inválido"),
        password: z.string().min(6, "Senha mínima de 6 caracteres"),
        confirmPassword: z.string().min(6, "Senha mínima de 6 caracteres"),
        avatarUrl: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas não coincidem",
    });

export type CreateAccountFormData = z.infer<
    typeof createAccountSchema
>;
