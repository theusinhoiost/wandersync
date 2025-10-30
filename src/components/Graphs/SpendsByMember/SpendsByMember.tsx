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

interface BarData {
  name: string;
  value: number;
}

type BarProps = {
  title: string;
  data: BarData[];
};

const COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const barData = [
  { name: "Alice", valor: 500 },
  { name: "João", valor: 700 },
  { name: "Maria", valor: 300 },
];

export default function SpendsByMember() {
  return (
    <CardGraphsStructure title="Gastos por membro">
      <ResponsiveContainer width="100%" height="100%" key={Math.random()}>
        <BarChart
          data={barData}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="valor" fill={"var(--chart-1)"} />
        </BarChart>
      </ResponsiveContainer>
    </CardGraphsStructure>
  );
}
