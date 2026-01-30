"use client";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";

// 1. Interface alinhada com o DTO do Backend
export interface DayData {
  date: string; // Formato YYYY-MM-DD vindo do SQL
  total: number;
}

interface SpendsByDayProps {
  data: DayData[];
}

export default function SpendsByDay({ data }: SpendsByDayProps) {
  // 2. Validação visual simples
  if (!data || data.length === 0) {
    return (
      <CardGraphsStructure title="Gastos por dia">
        <div className="text-sm text-muted-foreground flex items-center justify-center h-full">
          Nenhum gasto registrado
        </div>
      </CardGraphsStructure>
    );
  }

  return (
    <CardGraphsStructure title="Gastos por dia">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 30, left: 10 }}
        >
          <CartesianGrid strokeDasharray="6 3" />

          {/* 3. Ajuste: dataKey é 'date'. O tickFormatter formata para PT-BR */}
          <XAxis
            dataKey="date"
            tickFormatter={(dateString) => {
              // Converte string ISO (2025-01-20) para visual (20/01)
              // Dica: Adicione "T00:00:00" para evitar timezone shifts se necessário,
              // ou use split('-') para ser mais seguro contra fuso horário.
              const [year, month, day] = dateString.split("-");
              return `${day}/${month}`;
            }}
          />

          <YAxis />

          <Tooltip
            formatter={(value: number) => `R$ ${value.toFixed(2)}`}
            labelFormatter={(label) => {
              // Formata também o título do tooltip
              const [year, month, day] = label.split("-");
              return `${day}/${month}/${year}`;
            }}
          />

          <Line
            type="natural"
            dataKey="total"
            name="Gasto Diário"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CardGraphsStructure>
  );
}
