"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "Object Orieted Programming", desktop: 3.2, mobile: 3 },
  { month: "Dynamic Typing", desktop: 2, mobile: 3.6 },
  { month: "Exception Handling", desktop: 4, mobile: 2.5 },
  { month: "Logging Libraries", desktop: 2, mobile: 1.9 },
  { month: "Async Programming", desktop: 1, mobile: 3 },
  { month: "Design Patterns", desktop: 3, mobile: 1.9 },
];

const chartConfig = {
  desktop: {
    label: "John Doe",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Community",
    color: "hsla(173,58%,39%,0.75)",
  },
} satisfies ChartConfig;

export function UserRadarOneComponent() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Python Programming</CardTitle>
        <CardDescription>Showing ratings for each subcategory</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto">
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid gridType="circle" />

            <PolarRadiusAxis angle={90} domain={[1, 4]} />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
