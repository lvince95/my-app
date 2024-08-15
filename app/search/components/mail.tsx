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
import { useState } from "react";

const OPTIONS: Option[] = [
  { label: "OOP", value: "oop" },
  { label: "Dynamic Typing", value: "typing" },
  { label: "Logging Library", value: "logging" },
  { label: "Async", value: "async" },
  { label: "Design Patterns", value: "designPatterns" },
  { label: "Exception Handling", value: "exceptionHandling" },
];

export function Mail({ mails }: MailProps) {
  const [mail] = useMail();

  const [deliveryOrganization, setDeliveryOrganization] = useState("all");
  const [role, setRole] = useState("all");
  const [filter, setFilter] = useState("");

  return (
    <div className="grid grid-cols-5 max-h-[calc(100vh_-_6rem)]">
      <div className="border-r">
        <div className={cn("flex h-[52px] items-center px-4")}>
          <h2 className="text-xl font-bold">Filters</h2>
        </div>
        <Separator />
        <div className="group flex flex-col gap-4 py-2 px-4">
          <Label htmlFor="category" className="mt-2">
            Delivery Organization
          </Label>
          <Select defaultValue="all" onValueChange={setDeliveryOrganization}>
            <SelectTrigger id="category" aria-label="Select category">
              <SelectValue placeholder="Select a DO" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="EC_ST">EC_ST</SelectItem>
              <SelectItem value="DnD">DnD</SelectItem>
              <SelectItem value="Trace">Trace</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="group flex flex-col gap-4 py-2 px-4">
          <Label htmlFor="category" className="mt-2">
            Role
          </Label>
          <Select defaultValue="all" onValueChange={setRole}>
            <SelectTrigger id="category" aria-label="Select category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Senior Frontend Developer">
                Senior Frontend Developer
              </SelectItem>
              <SelectItem value="Fullstack Developer">
                Fullstack Developer
              </SelectItem>
              <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
              <SelectItem value="Data Scientist">Data Scientist</SelectItem>
              <SelectItem value="Database Administrator">
                Database Administrator
              </SelectItem>
              <SelectItem value="Machine Learning Engineer">
                Machine Learning Engineer
              </SelectItem>
              <SelectItem value="Software Architect">
                Software Architect
              </SelectItem>

              <SelectItem value="System Administrator">
                System Administrator
              </SelectItem>
              <SelectItem value="Network Engineer">Network Engineer</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
      </div>
      <div className="col-span-2 border-r">
        <div className="flex items-center px-4 py-2 h-[52px]">
          <h1 className="text-xl font-bold">Employees found</h1>
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
        <MailList
          items={mails}
          deliveryOrganization={deliveryOrganization}
          role={role}
          filter={filter}
        />
      </div>

      <div className="col-span-2">
        <MailDisplay
          mail={mails.find((item) => item.id === mail.selected) || null}
        />
      </div>
    </div>
  );
}
