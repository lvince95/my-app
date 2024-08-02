import { PythonDevEnvironmentsRadarComponent } from "./components/python-dev-environments";
import { PythonProgrammingRadarComponent } from "./components/python-programming-radar";
import UserBanner from "./components/user-banner";
import UserDetails from "./components/user-details";
import { UserRadarOneComponent } from "./components/user-radar-one";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function UserComponent() {
  return (
    <div className="px-4">
      <div className="rounded-lg bg-white p-8 shadow sm:rounded-lg">
        <UserBanner />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Accordion type="multiple" defaultValue={["item-1"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Python Programming</AccordionTrigger>
              <AccordionContent>
                <UserRadarOneComponent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Python Dev Environments</AccordionTrigger>
              <AccordionContent>
                <UserRadarOneComponent />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Fundamental Libraries</AccordionTrigger>
              <AccordionContent>
                <UserRadarOneComponent />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
