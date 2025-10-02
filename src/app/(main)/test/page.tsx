"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { ToastContainer, toast } from "react-toastify";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ResponsiveGridLayout = WidthProvider(Responsive);

const pieData = [
  { name: "Transporte", value: 400 },
  { name: "Hospedagem", value: 300 },
  { name: "Comida", value: 300 },
  { name: "Passeios", value: 200 },
];

const lineData = [
  { day: "Dia 1", gastos: 200 },
  { day: "Dia 2", gastos: 300 },
  { day: "Dia 3", gastos: 250 },
  { day: "Dia 4", gastos: 400 },
];

const barData = [
  { name: "Alice", valor: 500 },
  { name: "João", valor: 700 },
  { name: "Maria", valor: 300 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

export default function Dashboard() {
  const notify = () => toast.error('🦄 Wow so easy!', {
position: "top-center",
autoClose: 700,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
theme: "colored",

});;
  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        isResizable
        isDraggable
      >
        {/* Pizza - gastos por categoria */}
        <div key="1" data-grid={{ x: 0, y: 0, w: 4, h: 6 }}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Gastos por categoria</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <PieChart width={250} height={250}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </div>

        {/* Linha - gastos por dia */}
        <div key="2" data-grid={{ x: 4, y: 0, w: 4, h: 6 }}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Gastos por dia</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <LineChart width={300} height={200} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="gastos" stroke="#3b82f6" />
              </LineChart>
            </CardContent>
          </Card>
        </div>

        {/* Barras - contribuição por membro */}
        <div key="3" data-grid={{ x: 8, y: 0, w: 4, h: 6 }}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Contribuição por membro</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <BarChart width={300} height={200} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="valor" fill="#8b5cf6" />
              </BarChart>
            </CardContent>
          </Card>
        </div>
      </ResponsiveGridLayout>
      <div>
        <Button onClick={notify}>CLIKAR EM MIM </Button>
        <ToastContainer
        />
      </div>
    </>
  );
}
