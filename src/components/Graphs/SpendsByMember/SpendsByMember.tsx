"use client";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";

// 1. Interface alinhada com o DTO do Backend
export interface MemberData {
  memberName: string;
  total: number;
  percentage: number;
}

interface SpendsByMemberProps {
  data: MemberData[];
}

export default function SpendsByMember({ data }: SpendsByMemberProps) {
  // 2. Validação visual simples
  if (!data || data.length === 0) {
    return (
      <CardGraphsStructure title="Gastos por membro">
        <div className="text-sm text-muted-foreground flex items-center justify-center h-full">
          Nenhum gasto registrado
        </div>
      </CardGraphsStructure>
    );
  }

  return (
    <CardGraphsStructure title="Gastos por membro">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="memberName" />

          <YAxis />

          <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />
          <Legend />

          <Bar
            dataKey="total"
            name="Total Gasto"
            fill="var(--chart-1)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardGraphsStructure>
  );
}
