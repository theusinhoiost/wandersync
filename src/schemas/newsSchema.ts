import { z } from 'zod'

export const newsSchema = z.object({
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
    tripType: z.enum(
        ["Luxo", "Econômica", "Família", "Aventura", "Negócios"],
        {
            message: "Selecione o estilo da viagem",
        }
    ),
    budget: z.string().transform((value) =>
        value && value.trim() !== "" ? Number(value) : null
    ).refine(
        (value) => value === null || (!isNaN(value) && value >= 0),
        { message: "Orçamento inválido" }
    ),
});


export type TripFormValues = z.infer<typeof newsSchema>;