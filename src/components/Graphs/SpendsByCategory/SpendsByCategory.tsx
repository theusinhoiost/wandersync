"use client";

import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";

// 1. Defina a interface igual ao que vem do Backend DTO
export interface CategoryData {
  categoryName: string;
  total: number;
  color?: string;
}

interface SpendsByCategoryProps {
  data: CategoryData[];
}

export default function SpendsByCategory({ data }: SpendsByCategoryProps) {
  // Cores de fallback
  const COLORS = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
  ];

  // 3. Validação simples: se não tiver dados, mostra mensagem vazia

  if (!data || data.length === 0) {
    return (
      <CardGraphsStructure title="Gastos por categoria">
        <div className="text-sm text-muted-foreground flex items-center justify-center h-full">
          Nenhum gasto registrado
        </div>
      </CardGraphsStructure>
    );
  }

  return (
    <CardGraphsStructure title="Gastos por categoria">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 20, right: 20, bottom: 30, left: 10 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            // 4. Ajuste as chaves para bater com o seu DTO
            dataKey="total" // Antes era 'value'
            nameKey="categoryName" // Antes era 'name'
            isAnimationActive
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                // Prioriza a cor do banco, se não tiver, usa a lista local
                fill={entry.color || COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* O Tooltip precisa saber quais nomes exibir agora */}
          <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />
        </PieChart>
      </ResponsiveContainer>
    </CardGraphsStructure>
  );
}
