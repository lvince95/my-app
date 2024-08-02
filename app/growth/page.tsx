import { AreaChartComponent } from "@/components/areaChartComponent";
import { BarChartComponent } from "@/components/barChartComponent";
import { LineChartComponent } from "@/components/lineChartComponent";
import { BarChartMultipleComponent } from "./components/BarChartMultiple";
import { BarChartMixedComponent } from "./components/BarChartMixed";
import { BarChartStackedLegendComponent } from "./components/BarChartStackedLegend";
import { RadarChartMultipleComponent } from "./components/RadarChartMultiple";
import { RadarChartLinesComponent } from "./components/RadarChartLines";
import { RadarChartGridCircleComponent } from "./components/RadarChartGridCircle";

export default function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="col-span-3">
        <AreaChartComponent />
      </div>

      <div>
        <BarChartMultipleComponent />
      </div>

      <div>
        <BarChartMixedComponent />
      </div>

      <div>
        <BarChartStackedLegendComponent />
      </div>

      <div className="col-span-3">
        <BarChartComponent />
      </div>

      <div>
        <RadarChartMultipleComponent />
      </div>

      <div>
        <RadarChartLinesComponent />
      </div>

      <div>
        <RadarChartGridCircleComponent />
      </div>

      <div className="col-span-3">
        <LineChartComponent />
      </div>
    </main>
  );
}
