import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";

interface PieData {
  name: string;
  value: number;
}

type PieProps = {
  title: string;
  data: PieData[];
};

const pieData = [
  { name: "Transporte", value: 400 },
  { name: "Hospedagem", value: 300 },
  { name: "Comida", value: 300 },
  { name: "Teste", value: 500 },
  { name: "Terno", value: 1000 },
];
const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export default function SpendsByCategory() {
  return (
    <CardGraphsStructure title={"Gastos por categoria"}>
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%" key={Math.random()}>
          <PieChart margin={{ top: 20, right: 20, bottom: 30, left: 10 }}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              dataKey="value"
              isAnimationActive
            >
              {pieData.map((entry, index) => (
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
