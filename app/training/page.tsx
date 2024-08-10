import UpcomingComponent from "./components/upcoming";
import Image from "next/image";

export default function TrainingComponent() {
  return (
    <div className="px-4">
      <div className="mt-4">
        <div className="bg-card mb-4">
          <Image
            src="/images/training_module.webp"
            alt="Training Module"
            width={1920}
            height={1080}
          />
        </div>
        <UpcomingComponent />
      </div>
    </div>
  );
}
