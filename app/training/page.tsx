import { RadarComponent } from "./components/radar";
import { RadarThreeComponent } from "./components/radarthree";
import { RadarTwoComponent } from "./components/radartwo";
import UpcomingComponent from "./components/upcoming";

export default function TrainingComponent() {
  return (
    <div className="px-4">
      <div className="grid grid-cols-3 gap-4">
        <RadarComponent />
        <RadarTwoComponent />
        <RadarThreeComponent />
      </div>
      <div className="mt-4">
        <UpcomingComponent />
      </div>
    </div>
  );
}
