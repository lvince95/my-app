"use client";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  SquareTerminal,
  Users2,
  BookCheck,
  ListPlus,
  Users,
  User,
  Zap,
  LayoutList,
  ScrollText,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const isActive = (part: string, path: string) => path.includes(part);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-56 flex-col border-r bg-background sm:flex">
              <div className="mx-auto mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#4099da"
                  viewBox="0 0 302 91"
                  className="h-8 w-auto"
                >
                  <path d="M48.2 15.3C65 17.9 77.5 31.6 77.5 49.2c0 19.4-15.3 34.7-35.3 34.7S7 68.6 7 49.2c0-17.6 12.7-31.3 29.3-33.9V5.1h11.9v10.2zm15.5 33.8c0-10.7-6.2-18.8-15.5-21.2v20.3h-12V27.9C27 30.3 20.8 38.4 20.8 49.1c0 12.3 9.2 21.7 21.4 21.7s21.5-9.3 21.5-21.7zM114.4 36v12.7c-5.6.1-13.3 1.9-16.7 5.4v28.7H85.1V36.2h12.7v4.9c4.8-3.7 11.5-5.3 16.6-5.1zm2.7 39.4 7-9c3.1 3.9 7.9 6.1 12.7 6.1 3 0 4.9-1.3 4.9-3.5 0-3.2-3-3.9-8.9-5.2-9.4-2-13.9-6.7-13.9-14.3 0-8.2 7.5-14.3 17.4-14.3 6.6 0 12.5 2.3 16.8 6.8l-6.2 8.3c-3.2-2.8-6.6-4.2-10.5-4.2-3 0-5 1.2-5 3.1 0 2.6 2.2 3.1 8.8 4.4 9 1.9 13.9 7.2 13.9 15 0 8.6-7.1 14.7-16.9 14.7-8.1.2-15.9-2.8-20.1-7.9zm76.5 5.1c-3.8 1.9-7.8 2.8-11.6 2.8-9.6 0-17.2-6.3-17.2-18V47.5h-7.6V36.2h7.6V21.4h12.5v14.8h12.5l-3.1 11.4h-9.3v16.2c0 5.8 2.9 8.5 6.9 8.5 1.9 0 4.2-.6 6.4-1.8l2.9 10zm25.8-8.2c5.4 0 9-2.4 11.4-5.8l8.1 8c-4.3 5.8-11.5 9.3-19.5 9.3-14.2 0-24.9-10.4-24.9-24.2 0-13.7 10.5-24.2 24.4-24.2 13.2 0 22.5 10.3 22.5 23.5 0 1.7-.1 3.3-.3 4.5h-33.2c1.3 5.4 5.9 8.9 11.5 8.9zm-11.3-17.9h20.7c-1.3-5-5-8.2-9.8-8.2-5.3-.1-9.3 3.1-10.9 8.2zM295 15.6v67.2h-12.7v-2.2c-3.4 2-7.4 3.1-11.7 3.1-13.6 0-23.9-10.4-23.9-24.2s10.3-24.2 23.9-24.2c4.3 0 8.3 1.1 11.7 3.1V15.6H295zm-12.5 52.2V51.2c-2.1-2.5-5.7-4.3-10-4.3-7.3 0-12.5 5.5-12.5 12.7s5.3 12.7 12.5 12.7c4.3-.1 7.8-1.9 10-4.5z" />
                </svg>
              </div>
              <nav className="flex flex-col gap-1 px-3 sm:py-5 mt-2">
                <h3 className="text-xs font-semibold mt-2 mb-1">Admin/GCR</h3>
                <Link
                  href="/categories"
                  className={cn(
                    isActive("categories", pathname)
                      ? "bg-accent text-indigo-600"
                      : isActive("add-category", pathname)
                        ? "bg-accent text-indigo-600"
                        : isActive("add-new-category", pathname)
                          ? "bg-accent text-indigo-600"
                          : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <LayoutList className="ml-2 h-5 w-5" />
                  <span className="ml-3 text-sm">Categories</span>
                </Link>

                <Link
                  href="/roles"
                  className={cn(
                    isActive("roles", pathname)
                      ? "bg-accent text-indigo-600"
                      : isActive("role-view", pathname)
                        ? "bg-accent text-indigo-600"
                        : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <ScrollText className="ml-2 h-5 w-5" />
                  <span className="ml-3 text-sm">Roles</span>
                </Link>
                <Separator />
                <h3 className="text-xs font-semibold mt-2 mb-1">CC Leader</h3>
                <Link
                  href="/stats"
                  className={cn(
                    isActive("stats", pathname)
                      ? "bg-accent text-indigo-600"
                      : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <LineChart className="ml-2 h-5 w-5" />
                  <span className="ml-3 text-sm">Team Analytics</span>
                </Link>
                <Link
                  href="/search"
                  className={cn(
                    isActive("search", pathname)
                      ? "bg-accent text-indigo-600"
                      : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <Search className="h-5 w-5 ml-2" />
                  <span className="ml-3 text-sm">Search</span>
                </Link>

                <Separator />
                <h3 className="text-xs font-semibold mt-2 mb-1">Employee</h3>
                <Link
                  href="/user"
                  className={cn(
                    isActive("user", pathname)
                      ? "bg-accent text-indigo-600"
                      : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <User className="h-5 w-5 ml-2" />
                  <span className="ml-3 text-sm">User Profile</span>
                </Link>

                <Link
                  href="/assessment"
                  className={cn(
                    isActive("assessment", pathname)
                      ? "bg-accent text-indigo-600"
                      : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <BookCheck className="h-5 w-5 ml-2" />
                  <span className="ml-3 text-sm">Self Assessment</span>
                </Link>

                <Separator />

                <h3 className="text-xs font-semibold mt-2 mb-1">Misc</h3>
                <Link
                  href="/training"
                  className={cn(
                    isActive("training", pathname)
                      ? "bg-accent text-indigo-600"
                      : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <Zap className="h-5 w-5 ml-2" />
                  <span className="ml-3 text-sm">Training</span>
                </Link>
              </nav>
              <nav className="mt-auto flex flex-col px-2 gap-1 sm:py-5">
                <Link
                  href="#"
                  className={cn(
                    isActive("settings", pathname)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                    "flex h-9 items-center rounded-lg transition-colors hover:text-indigo-600 hover:bg-accent font-semibold md:h-10 w-auto",
                  )}
                >
                  <Settings className="ml-2 h-5 w-5" />
                  <span className="ml-3 text-sm">Settings</span>
                </Link>
              </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-56">
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
                        className="flex items-center gap-4 px-2.5 text-foreground"
                      >
                        <SquareTerminal className="h-5 w-5" />
                        Orders
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
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
                        <Link href="/stats" className="text-sm">
                          Home
                        </Link>
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
                        src="/images/avatar.webp"
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
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

              {children}
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
