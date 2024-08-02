/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K85jC79C03d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Card className="w-full max-w-3xl mx-auto my-12">
          <CardHeader>
            <CardTitle>Self-Assessment</CardTitle>
            <CardDescription>
              Rate yourself across the following categories.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="communication">
                <AccordionTrigger>Python Programming</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <span>Object Oriented Programming</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="communication-1" />
                          <Label htmlFor="communication-1">1</Label>
                          <RadioGroupItem value="2" id="communication-2" />
                          <Label htmlFor="communication-2">2</Label>
                          <RadioGroupItem value="3" id="communication-3" />
                          <Label htmlFor="communication-3">3</Label>
                          <RadioGroupItem value="4" id="communication-4" />
                          <Label htmlFor="communication-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dynamic Typing</span>
                      <RadioGroup defaultValue="4">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="listening-1" />
                          <Label htmlFor="listening-1">1</Label>
                          <RadioGroupItem value="2" id="listening-2" />
                          <Label htmlFor="listening-2">2</Label>
                          <RadioGroupItem value="3" id="listening-3" />
                          <Label htmlFor="listening-3">3</Label>
                          <RadioGroupItem value="4" id="listening-4" />
                          <Label htmlFor="listening-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Exception Handling</span>
                      <RadioGroup defaultValue="2">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="presentation-1" />
                          <Label htmlFor="presentation-1">1</Label>
                          <RadioGroupItem value="2" id="presentation-2" />
                          <Label htmlFor="presentation-2">2</Label>
                          <RadioGroupItem value="3" id="presentation-3" />
                          <Label htmlFor="presentation-3">3</Label>
                          <RadioGroupItem value="4" id="presentation-4" />
                          <Label htmlFor="presentation-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Logging Libraries</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="presentation-1" />
                          <Label htmlFor="presentation-1">1</Label>
                          <RadioGroupItem value="2" id="presentation-2" />
                          <Label htmlFor="presentation-2">2</Label>
                          <RadioGroupItem value="3" id="presentation-3" />
                          <Label htmlFor="presentation-3">3</Label>
                          <RadioGroupItem value="4" id="presentation-4" />
                          <Label htmlFor="presentation-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Asynchronous Programming</span>
                      <RadioGroup defaultValue="1">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="presentation-1" />
                          <Label htmlFor="presentation-1">1</Label>
                          <RadioGroupItem value="2" id="presentation-2" />
                          <Label htmlFor="presentation-2">2</Label>
                          <RadioGroupItem value="3" id="presentation-3" />
                          <Label htmlFor="presentation-3">3</Label>
                          <RadioGroupItem value="4" id="presentation-4" />
                          <Label htmlFor="presentation-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Design Patterns</span>
                      <RadioGroup defaultValue="1">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="presentation-1" />
                          <Label htmlFor="presentation-1">1</Label>
                          <RadioGroupItem value="2" id="presentation-2" />
                          <Label htmlFor="presentation-2">2</Label>
                          <RadioGroupItem value="3" id="presentation-3" />
                          <Label htmlFor="presentation-3">3</Label>
                          <RadioGroupItem value="4" id="presentation-4" />
                          <Label htmlFor="presentation-4">4</Label>
                        </div>
                      </RadioGroup>
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
                      <RadioGroup defaultValue="4">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="collaboration-1" />
                          <Label htmlFor="collaboration-1">1</Label>
                          <RadioGroupItem value="2" id="collaboration-2" />
                          <Label htmlFor="collaboration-2">2</Label>
                          <RadioGroupItem value="3" id="collaboration-3" />
                          <Label htmlFor="collaboration-3">3</Label>
                          <RadioGroupItem value="4" id="collaboration-4" />
                          <Label htmlFor="collaboration-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Installing libraries</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="adaptability-1" />
                          <Label htmlFor="adaptability-1">1</Label>
                          <RadioGroupItem value="2" id="adaptability-2" />
                          <Label htmlFor="adaptability-2">2</Label>
                          <RadioGroupItem value="3" id="adaptability-3" />
                          <Label htmlFor="adaptability-3">3</Label>
                          <RadioGroupItem value="4" id="adaptability-4" />
                          <Label htmlFor="adaptability-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Setting up IDEs, Github and other packages</span>
                      <RadioGroup defaultValue="1">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="conflict-1" />
                          <Label htmlFor="conflict-1">1</Label>
                          <RadioGroupItem value="2" id="conflict-2" />
                          <Label htmlFor="conflict-2">2</Label>
                          <RadioGroupItem value="3" id="conflict-3" />
                          <Label htmlFor="conflict-3">3</Label>
                          <RadioGroupItem value="4" id="conflict-4" />
                          <Label htmlFor="conflict-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Setting up Docker</span>
                      <RadioGroup defaultValue="2">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="conflict-1" />
                          <Label htmlFor="conflict-1">1</Label>
                          <RadioGroupItem value="2" id="conflict-2" />
                          <Label htmlFor="conflict-2">2</Label>
                          <RadioGroupItem value="3" id="conflict-3" />
                          <Label htmlFor="conflict-3">3</Label>
                          <RadioGroupItem value="4" id="conflict-4" />
                          <Label htmlFor="conflict-4">4</Label>
                        </div>
                      </RadioGroup>
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
                      <RadioGroup defaultValue="4">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="analytical-1" />
                          <Label htmlFor="analytical-1">1</Label>
                          <RadioGroupItem value="2" id="analytical-2" />
                          <Label htmlFor="analytical-2">2</Label>
                          <RadioGroupItem value="3" id="analytical-3" />
                          <Label htmlFor="analytical-3">3</Label>
                          <RadioGroupItem value="4" id="analytical-4" />
                          <Label htmlFor="analytical-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>PyTest, unittest</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="creativity-1" />
                          <Label htmlFor="creativity-1">1</Label>
                          <RadioGroupItem value="2" id="creativity-2" />
                          <Label htmlFor="creativity-2">2</Label>
                          <RadioGroupItem value="3" id="creativity-3" />
                          <Label htmlFor="creativity-3">3</Label>
                          <RadioGroupItem value="4" id="creativity-4" />
                          <Label htmlFor="creativity-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fastavro</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fastparquet</span>
                      <RadioGroup defaultValue="2">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>pyarrow</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>pip</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>requests</span>
                      <RadioGroup defaultValue="4">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>setuptools</span>
                      <RadioGroup defaultValue="2">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>itertools</span>
                      <RadioGroup defaultValue="3">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>configparser</span>
                      <RadioGroup defaultValue="1">
                        <div className="flex gap-2">
                          <RadioGroupItem value="1" id="decision-1" />
                          <Label htmlFor="decision-1">1</Label>
                          <RadioGroupItem value="2" id="decision-2" />
                          <Label htmlFor="decision-2">2</Label>
                          <RadioGroupItem value="3" id="decision-3" />
                          <Label htmlFor="decision-3">3</Label>
                          <RadioGroupItem value="4" id="decision-4" />
                          <Label htmlFor="decision-4">4</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
