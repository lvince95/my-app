"use client";

import * as React from "react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AccountSwitcher } from "./account-switcher";
import { MailDisplay } from "./mail-display";
import { MailList } from "./mail-list";
import { Nav } from "./nav";
import { type Mail } from "../data";
import { useMail } from "../use-mail";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OPTIONS: Option[] = [
  { label: "OOP", value: "oop" },
  { label: "Dynamic Typing", value: "typing" },
  { label: "Logging Library", value: "logging" },
  { label: "Async", value: "async" },
  { label: "Design Patterns", value: "designPatterns" },
  { label: "Exception Handling", value: "exceptionHandling" },
];

export function Mail({ mails, defaultCollapsed = false }: MailProps) {
  const [mail] = useMail();

  return (
    <div className="grid grid-cols-5 max-h-[calc(100vh_-_6rem)]">
      <div className="border-r">
        <div className={cn("flex h-[52px] items-center px-4")}>
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        <Separator />
        <div className="group flex flex-col gap-4 py-2 px-4">
          <Label htmlFor="category" className="mt-2">
            Category
          </Label>
          <Select defaultValue="python">
            <SelectTrigger id="category" aria-label="Select category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="python">Python Programming</SelectItem>
              <SelectItem value="dev">Dev Environments</SelectItem>
              <SelectItem value="fundamental">Fundamental Libraries</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="group flex flex-col gap-4 py-2 px-4">
          <Label className="-mb-2 mt-2">Sub Categories</Label>
          <MultipleSelector
            defaultOptions={OPTIONS}
            placeholder="Select options..."
            emptyIndicator={
              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                no results found.
              </p>
            }
          />
        </div>

        <div className="group flex flex-col gap-4 py-2 px-4">
          <Label htmlFor="category" className="mt-2">
            Delivery Organization
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="category" aria-label="Select category">
              <SelectValue placeholder="Select a DO" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="ecst">EC_ST</SelectItem>
              <SelectItem value="dnd">DnD</SelectItem>
              <SelectItem value="trace">Trace</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="col-span-2 border-r">
        <div className="flex items-center px-4 py-2 h-[52px]">
          <h1 className="text-xl font-bold">Employees found (11)</h1>
        </div>
        <Separator />
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>
        <MailList items={mails} />
      </div>

      <div className="col-span-2">
        <MailDisplay
          mail={mails.find((item) => item.id === mail.selected) || null}
        />
      </div>
    </div>
  );
}
