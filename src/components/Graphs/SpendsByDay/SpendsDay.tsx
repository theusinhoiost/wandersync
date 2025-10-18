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

const lineData = [
  { day: "Dia 1", gastos: 200 },
  { day: "Dia 2", gastos: 300 },
  { day: "Dia 3", gastos: 250 },
  { day: "Dia 4", gastos: 400 },
  { day: "Dia 5", gastos: 400 },
  { day: "Dia 6", gastos: 700 },
];

export default function SpendsByDay() {
  return (

      <CardGraphsStructure title="Gastos por dia">
        <ResponsiveContainer width="100%" height="100%" key={Math.random()}>
          <LineChart
            data={lineData}
            margin={{ top: 20, right: 20, bottom: 30, left: 10 }}
          >
            <CartesianGrid strokeDasharray="6 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="gastos" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </CardGraphsStructure>
  );
}
