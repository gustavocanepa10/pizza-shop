import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Pie,
  Tooltip,
  Cell,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  { product: "Pepperoni", amount: 15 },
  { product: "Mussarela", amount: 20 },
  { product: "Calabresa", amount: 35 },
  { product: "Queijo", amount: 80 },
  { product: "Frango Catupiry", amount: 45 },
];

const COLORS = [
  colors.amber[500],
  colors.emerald[500],
  colors.violet[500],
  colors.rose[500],
  colors.sky[500],
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="pb-8 ">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base  font-medium">
            Produtos Populares
          </CardTitle>
          <BarChart className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie
              data={data}
              nameKey="product"
              dataKey="amount"
              labelLine={false}
              strokeWidth={0}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-sm"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
