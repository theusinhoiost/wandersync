import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";

const barData = [
  { name: "Alice", valor: 500 },
  { name: "João", valor: 700 },
  { name: "Maria", valor: 300 },
];

export default function SpendsByMember() {
  return (
    <CardGraphsStructure title="Gastos por membro">
      <BarChart width={300} height={200} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" fill="#8b5cf6" />
      </BarChart>
    </CardGraphsStructure>
  );
}
