"use client";

import { useEffect, useState } from "react";
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
import { Spinner } from "@/components/ui/spinner";

interface BarData {
  name: string;
  valor: number; // gasto total
}

export default function SpendsByMember({ tripId }: { tripId: string }) {
  const [data, setData] = useState<BarData[]>([]);
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
        const req = await fetch(`/api/trips/${tripId}/spends/member`, {
          cache: "no-store",
        });

        const json = await req.json();
        setData(json);
      } catch (err) {
        console.error("Erro ao buscar gastos por membro:", err);
      } finally {
        setLoading(true);
      }
    }

    load();
  }, [tripId]);

  if (loading) {
    return (
      <CardGraphsStructure title="Gastos por membro">
        <div className="w-full h-full flex items-center justify-center text-sm">
          <Spinner className="size-10" />
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="valor" fill={"var(--chart-1)"} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardGraphsStructure>
  );
}
