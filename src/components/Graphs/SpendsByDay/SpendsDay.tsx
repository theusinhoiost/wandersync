"use client";

import { useEffect, useState } from "react";
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
import { Spinner } from "@/components/ui/spinner";

interface LineData {
  day: string;
  gastos: number;
}

export default function SpendsByDay({ tripId }: { tripId: string }) {
  const [data, setData] = useState<LineData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const req = await fetch(`/api/trips/${tripId}/spends/day`, {
          cache: "no-store",
        });

        const json = await req.json();
        setData(json);
      } catch (err) {
        console.error("Erro ao buscar dados diários:", err);
      } finally {
        setLoading(true);
      }
    }

    load();
  }, [tripId]);

  if (loading) {
    return (
      <CardGraphsStructure title="Gastos por dia">
        <div className="w-full h-full flex items-center justify-center text-sm">
          <Spinner className="size-10" />
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
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="natural" dataKey="gastos" stroke="var(--chart-1)" />
        </LineChart>
      </ResponsiveContainer>
    </CardGraphsStructure>
  );
}
