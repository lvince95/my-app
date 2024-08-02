import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import nextSaturday from "date-fns/nextSaturday";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  StarIcon,
  Trash2,
} from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail } from "../data";
import Link from "next/link";
import { UserRadarAverageComponent } from "./user-radar-average";
import { UserBarAverageComponent } from "./user-bar-average";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserRadialAverageComponent } from "./user-radial-average";
import UserLineAverageComponent from "./user-line-average";

interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps) {
  const today = new Date();
  const router = useRouter();

  return (
    <div className="flex h-full flex-col">
      {mail ? (
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-start p-4">
              <div className="flex items-start gap-4 text-sm">
                <Avatar>
                  <AvatarImage alt={mail.name} />
                  <AvatarFallback>
                    {mail.name
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">{mail.name}</div>
                  <div className="line-clamp-1 text-xs">{mail.subject}</div>
                  <div className="line-clamp-1 text-xs">{mail.email}</div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="mr-4 shadow"
              onClick={() => router.push("/user")}
            >
              View Profile
            </Button>
          </div>
          <Separator />

          <ScrollArea className="h-[calc(100vh_-_14rem)] w-full ">
            <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
              <div>
                <div className="px-4 sm:px-0">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Employee Information
                  </h3>

                  <p className="max-w-2xl text-sm leading-6 text-gray-500">
                    Some personal statistics summarized.
                  </p>
                </div>
                <div className="mt-4">
                  <UserRadarAverageComponent data={mail.chart} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <UserLineAverageComponent data={mail} />
                  <UserRadialAverageComponent data={mail} />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
