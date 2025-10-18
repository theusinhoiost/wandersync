import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CardGraphsStructure from "../CardGraphsStructure/CardGraphsStructure";

const pieData = [
  { name: "Transporte", value: 400 },
  { name: "Hospedagem", value: 300 },
  { name: "Comida", value: 300 },
  { name: "Passeios", value: 200 },
];
const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

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
