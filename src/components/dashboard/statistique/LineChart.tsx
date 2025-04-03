import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { LineChartData } from "../../../typescript/module";

interface LineChartProps {
  data: LineChartData;
  title?: string;
  height?: number;
}

export function LineChart({ data, title, height = 300 }: LineChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg  shadow-sm border border-gray-300">
      {title && <h3 className="text-lg font-medium mb-4">{title}</h3>}
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #f0f0f0",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", bottom: 0 }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
