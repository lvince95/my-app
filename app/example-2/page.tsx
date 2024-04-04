import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
  PlusCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ComparisonChart } from '@/components/ui/ComparisonChart';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Separator } from '@/components/ui/separator';

export default function Example2() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <TooltipProvider>
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2">
            <Button variant="outline" size="icon" aria-label="Home">
              <Triangle className="size-5 fill-foreground" />
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Playground"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Playground
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Models
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="API"
                >
                  <Code2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                API
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentation
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Settings
              </TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Comparison</h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Model</Label>
                    <Select>
                      <SelectTrigger
                        id="model"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genesis">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{' '}
                                <span className="font-medium text-foreground">
                                  Genesis
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Our fastest model for general use cases.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="explorer">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{' '}
                                <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                Performance and speed for efficiency.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="quantum">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                              <p>
                                Neural{' '}
                                <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                              </p>
                              <p className="text-xs" data-description>
                                The most powerful model for complex
                                computations.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input id="temperature" type="number" placeholder="0.4" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Top P</Label>
                    <Input id="top-p" type="number" placeholder="0.7" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Top K</Label>
                    <Input id="top-k" type="number" placeholder="0.0" />
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="assistant">Assistant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative hidden flex-col items-start gap-8 md:flex overflow-auto">
            <form className="grid w-full items-start gap-6">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Settings
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="model">Framework</Label>
                  <Select>
                    <SelectTrigger
                      id="model"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Typescript{' '}
                              <span className="font-medium text-foreground">
                                Angular
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Frontend Javascript Framework
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Python{' '}
                              <span className="font-medium text-foreground">
                                FastAPI
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Backend framework using Python
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              C#{' '}
                              <span className="font-medium text-foreground">
                                .NET
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Stable and Scalable backend framework
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="model2">Programming Language</Label>
                  <Select>
                    <SelectTrigger
                      id="model2"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a programming language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Rabbit className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Typescript{' '}
                              <span className="font-medium text-foreground">
                                Angular
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Frontend Javascript Framework
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Bird className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              Python{' '}
                              <span className="font-medium text-foreground">
                                FastAPI
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Backend framework using Python
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <Turtle className="size-5" />
                          <div className="grid gap-0.5">
                            <p>
                              C#{' '}
                              <span className="font-medium text-foreground">
                                .NET
                              </span>
                            </p>
                            <p className="text-xs" data-description>
                              Stable and Scalable backend framework
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="top-p">Min. Competency</Label>
                    <Input id="top-p" type="number" placeholder="1" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="top-k">Max. Competency</Label>
                    <Input id="top-k" type="number" placeholder="5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="role">Seniority</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">Lead</SelectItem>
                        <SelectItem value="user">Senior</SelectItem>
                        <SelectItem value="assistant">Mid-Level</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">
                          Software Engineer
                        </SelectItem>
                        <SelectItem value="user">Data Engineer</SelectItem>
                        <SelectItem value="assistant">
                          Data Scientist
                        </SelectItem>
                        <SelectItem value="junior">DevOps Engineer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator />
                <Button size="sm" variant="ghost" className="gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  Add Entry
                </Button>
              </fieldset>

              <Card>
                <CardHeader>
                  <CardTitle>Skill</CardTitle>
                  <CardDescription>Add skills to filter by</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Skill</TableHead>
                        <TableHead>Y.O.E</TableHead>
                        <TableHead>Capacity</TableHead>
                        <TableHead className="w-[100px]">Competency</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Angular</TableCell>
                        <TableCell>
                          <Label htmlFor="stock-1" className="sr-only">
                            Stock
                          </Label>
                          <Input
                            id="stock-1"
                            type="number"
                            defaultValue="100"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-1" className="sr-only">
                            Price
                          </Label>
                          <Input
                            id="price-1"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="s"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">1</ToggleGroupItem>
                            <ToggleGroupItem value="m">2</ToggleGroupItem>
                            <ToggleGroupItem value="l">3</ToggleGroupItem>
                            <ToggleGroupItem value="xl">4</ToggleGroupItem>
                            <ToggleGroupItem value="xxl">5</ToggleGroupItem>
                          </ToggleGroup>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">.NET</TableCell>
                        <TableCell>
                          <Label htmlFor="stock-2" className="sr-only">
                            Stock
                          </Label>
                          <Input
                            id="stock-2"
                            type="number"
                            defaultValue="143"
                          />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-2" className="sr-only">
                            Price
                          </Label>
                          <Input
                            id="price-2"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="m"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">1</ToggleGroupItem>
                            <ToggleGroupItem value="m">2</ToggleGroupItem>
                            <ToggleGroupItem value="l">3</ToggleGroupItem>
                            <ToggleGroupItem value="xl">4</ToggleGroupItem>
                            <ToggleGroupItem value="xxl">5</ToggleGroupItem>
                          </ToggleGroup>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Python</TableCell>
                        <TableCell>
                          <Label htmlFor="stock-3" className="sr-only">
                            Stock
                          </Label>
                          <Input id="stock-3" type="number" defaultValue="32" />
                        </TableCell>
                        <TableCell>
                          <Label htmlFor="price-3" className="sr-only">
                            Stock
                          </Label>
                          <Input
                            id="price-3"
                            type="number"
                            defaultValue="99.99"
                          />
                        </TableCell>
                        <TableCell>
                          <ToggleGroup
                            type="single"
                            defaultValue="s"
                            variant="outline"
                          >
                            <ToggleGroupItem value="s">1</ToggleGroupItem>
                            <ToggleGroupItem value="m">2</ToggleGroupItem>
                            <ToggleGroupItem value="l">3</ToggleGroupItem>
                            <ToggleGroupItem value="xl">4</ToggleGroupItem>
                            <ToggleGroupItem value="xxl">5</ToggleGroupItem>
                          </ToggleGroup>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="justify-center border-t p-4">
                  <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Skill
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>
          <div className="relative flex flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1 min-h-full">
              <ComparisonChart />
            </div>
            <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
