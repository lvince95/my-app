'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import HeatMap from '@/components/ui/heatmap';
import BarGroupComponent from '@/components/ui/bar-group';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import BrushChart from '@/components/ui/brush';
import BarStackComponent from '@/components/ui/bar-stack';
import TreeChart from '@/components/ui/tree';
import RadialBarChart from '@/components/ui/radial-bar';
import RadarChart from '@/components/ui/radar';
import GeoMercatorMap from '@/components/ui/geo-mercator';
import DendrogramChart from '@/components/ui/dendrogram';

export default function Example3() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TooltipProvider>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Analytics</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">Timeseries</TabsTrigger>
                <TabsTrigger value="tree">Tree</TabsTrigger>
                <TabsTrigger value="dendrogram">Dendrogram</TabsTrigger>
                <TabsTrigger value="radial-bar">Radial Bar</TabsTrigger>
                <TabsTrigger value="bar-stack">Bar Stack</TabsTrigger>
                <TabsTrigger value="bar-group">Bar Group</TabsTrigger>
                <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
                <TabsTrigger value="geo-mercator">Geo Mercator</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Others</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Save Results
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>Bar Group</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <BrushChart width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="heatmap">
              <Card>
                <CardHeader>
                  <CardTitle>Heatmap</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <HeatMap />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="bar-stack">
              <Card>
                <CardHeader>
                  <CardTitle>Bar Stack</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <BarStackComponent width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="dendrogram">
              <Card>
                <CardHeader>
                  <CardTitle>Dendrogram</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <DendrogramChart width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="tree">
              <Card>
                <CardHeader>
                  <CardTitle>Tree</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <TreeChart width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="geo-mercator">
              <Card>
                <CardHeader>
                  <CardTitle>Geo Mercator</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[50vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <GeoMercatorMap width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="radial-bar">
              <Card>
                <CardHeader>
                  <CardTitle>Radial Bar & Radar</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-1/2 h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <RadialBarChart width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                  <div className="w-1/2 h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <RadarChart width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground sr-only">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="bar-group">
              <Card>
                <CardHeader>
                  <CardTitle>Bar Group</CardTitle>
                  <CardDescription>Some Description</CardDescription>
                </CardHeader>
                <CardContent className="w-full h-[35vw] flex items-center justify-center">
                  <div className="w-full h-full">
                    <ParentSize className="relative">
                      {({ width, height }) => {
                        return (
                          width > 0 &&
                          height > 0 && (
                            <BarGroupComponent width={width} height={height} />
                          )
                        );
                      }}
                    </ParentSize>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{' '}
                    employees
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
