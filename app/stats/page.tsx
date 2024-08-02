/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MGBqrh8A5VJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AreaChartComponent } from "@/components/areaChartComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChartComponent } from "@/components/lineChartComponent";
import { BarChartComponent } from "@/components/barChartComponent";
import { BarChartMultipleComponent } from "../growth/components/BarChartMultiple";
import { BarChartMixedComponent } from "../growth/components/BarChartMixed";
import { LineChartMultipleComponent } from "@/components/lineChartMultipleComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DataTableDemo } from "@/components/ui/data-table";

export default function LevelsComponent() {
  return (
    <div className="container mx-auto pb-12 pt-4 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-4">MY CC Software Engineering VI</h1>

      <Tabs defaultValue="area">
        <TabsList>
          <TabsTrigger value="area">Area Chart</TabsTrigger>
          <TabsTrigger value="bar">Bar Chart</TabsTrigger>
          <TabsTrigger value="line">Line Chart</TabsTrigger>
        </TabsList>
        <TabsContent value="area">
          <div className="grid flex-1 items-start gap-4  md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="col-span-3">
              <AreaChartComponent />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bar">
          <div className="grid flex-1 items-start gap-4  md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="col-span-3">
              <BarChartComponent />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="line">
          <div className="grid flex-1 items-start gap-4  md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="col-span-3">
              <LineChartComponent />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Employee Proficiency Levels
          </h2>
          <p className="text-muted-foreground">
            The average proficiency levels of the team members in the selected
            category.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Select defaultValue="python">
              <SelectTrigger id="category" aria-label="Select category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python Programming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Label className="-mb-6">Sub Categories</Label>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Object Oriented Programming</CardDescription>
              <CardTitle className="text-4xl">3.2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Dynamic Typing</CardDescription>
              <CardTitle className="text-4xl">2.5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +0% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={0} aria-label="0% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Exception Handling</CardDescription>
              <CardTitle className="text-4xl">2.8</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +15% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={15} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Logging Libraries</CardDescription>
              <CardTitle className="text-4xl">2.9</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +35% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Asynchronous Programming</CardDescription>
              <CardTitle className="text-4xl">2.1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +0% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={0} aria-label="0% increase" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Design Patterns</CardDescription>
              <CardTitle className="text-4xl">1.7</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +50% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={50} aria-label="50% increase" />
            </CardFooter>
          </Card>
        </div>
        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Employee Proficiency Table
          </h2>
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
}
