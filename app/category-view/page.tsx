import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CategoryViewComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <h2 className="text-3xl font-bold mx-auto w-full max-w-3xl">
          Python Developer
        </h2>
        <Card className="w-full max-w-3xl mx-auto mt-6">
          <CardHeader>
            <CardTitle>Core Categories</CardTitle>
            <CardDescription>
              Categories that are expected from every Python Developer are shown
              here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="multiple">
              <AccordionItem value="communication">
                <AccordionTrigger>Python Programming</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span>Object Oriented Programming</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dynamic Typing</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Exception Handling</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Logging Libraries</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Asynchronous Programming</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Design Patterns</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="teamwork">
                <AccordionTrigger>Python Dev Environment</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span>Virtual environments (conda)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Installing libraries</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Setting up IDEs, Github and other packages</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Setting up Docker</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="problem-solving">
                <AccordionTrigger>Fundamental Libraries</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span>Pydantic</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>PyTest, unittest</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fastavro</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fastparquet</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>pyarrow</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>pip</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>requests</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>setuptools</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>itertools</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>configparser</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card className="w-full max-w-3xl mx-auto my-4">
          <CardHeader>
            <CardTitle>Additional Categories</CardTitle>
            <CardDescription>
              Categories added based on custom requests are shown here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="cloud">
                <AccordionTrigger>Cloud Providers</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span>AWS</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Azure</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="containers">
                <AccordionTrigger>Containerization</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span>Docker</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Kubernetes</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Terraform</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </main>
    </div>
  );
}
