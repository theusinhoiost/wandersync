//EXAMPLE



"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const gastosCategoria = [
  { name: "Transporte", value: 1200 },
  { name: "Hospedagem", value: 2000 },
  { name: "Alimentação", value: 900 },
  { name: "Lazer", value: 600 },
  { name: "Extras", value: 300 },
];

const gastosPessoa = [
  { name: "Matheus", total: 1800 },
  { name: "Ana", total: 1200 },
  { name: "Lucas", total: 1000 },
];

const orcamentoVsReal = [
  { name: "Planejado", value: 5000 },
  { name: "Gasto", value: 4400 },
];

const progresso = [{ name: "Concluído", value: 75 }];

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f97316", "#f43f5e"];

export default function ViagemDashboard() {
  return (
    <main className="min-h-screen bg-background p-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Viagem para Barcelona 🇪🇸</h1>
        <p className="text-muted-foreground">Membros: Matheus, Ana, Lucas</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {/* Gastos por categoria */}
        <Card className="rounded-2xl shadow">
          <CardHeader>
            <CardTitle>Gastos por categoria</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={gastosCategoria}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {gastosCategoria.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gastos por pessoa */}
        <Card className="rounded-2xl shadow">
          <CardHeader>
            <CardTitle>Gastos por pessoa</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={gastosPessoa}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Orçamento planejado vs real */}
        <Card className="rounded-2xl shadow">
          <CardHeader>
            <CardTitle>Orçamento planejado vs real</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={orcamentoVsReal}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progresso do planejamento */}
        <Card className="rounded-2xl shadow">
          <CardHeader>
            <CardTitle>Progresso do planejamento</CardTitle>
          </CardHeader>
          <CardContent className="h-72 flex items-center justify-center">
            <ResponsiveContainer>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                barSize={20}
                data={progresso}
              >
                <RadialBar
                  minAngle={15}
                  clockWise
                  dataKey="value"
                  fill="#3b82f6"
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="center"
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
