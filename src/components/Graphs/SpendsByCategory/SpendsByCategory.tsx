"use client";

import { useEffect, useState } from "react";
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";
import { Spinner } from "@/components/ui/spinner";

interface PieData {
  name: string;
  value: number;
}

export default function SpendsByCategory({ tripId }: { tripId: string }) {
  const [data, setData] = useState<PieData[]>([]);
  const [loading, setLoading] = useState(true);

  const COLORS = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
  ];

  useEffect(() => {
    async function load() {
      try {
        const req = await fetch(`/api/trips/${tripId}/spends/category`, {
          cache: "no-store",
        });

        const json = await req.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      } finally {
        setLoading(true);
      }
    }

    load();
  }, [tripId]);

  if (loading) {
    return (
      <CardGraphsStructure title="Gastos por categoria">
        <div className="w-full h-full flex items-center justify-center text-sm">
          <Spinner className="size-10" />
        </div>
      </CardGraphsStructure>
    );
  }

  return (
    <CardGraphsStructure title="Gastos por categoria">
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 20, bottom: 30, left: 10 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              dataKey="value"
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardGraphsStructure>
  );
}
