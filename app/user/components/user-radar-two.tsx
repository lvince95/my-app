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
  { month: "Virtual Environments", desktop: 2, mobile: 3.5 },
  { month: "Library Installation", desktop: 1, mobile: 2.2 },
  { month: "Environment Setup", desktop: 3, mobile: 1.7 },
  { month: "Docker", desktop: 3, mobile: 1.5 },
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

export function UserRadarTwoComponent() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Python Dev Environments</CardTitle>
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
