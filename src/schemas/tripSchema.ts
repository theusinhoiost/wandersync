import { z } from 'zod'

export const tripSchema = z.object({
    planName: z.string().min(5, "Nome muito curto"),
    peopleCount: z
        .number()
        .int()
        .min(1, "Mínimo 1 pessoa")
        .max(10, "Máximo 10 pessoas"),
    destination: z.string().min(5, "Destino muito curto"),
    departDate: z
        .date()
        .or(z.null())
        .refine((d) => d === null || !Number.isNaN(d.getTime()), {
            message: "Data de ida inválida",
        }),
    returnDate: z
        .date()
        .or(z.null())
        .refine((d) => d === null || !Number.isNaN(d.getTime()), {
            message: "Data de volta inválida",
        }),
    tripStyle: z.string().min(1, "Escolha um estilo").default('Aventura'),
    budget: z.string().optional(),
});


export type TripFormValues = z.infer<typeof tripSchema>;