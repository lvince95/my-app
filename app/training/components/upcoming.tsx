"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UpcomingComponent() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Training History</CardTitle>
        <CardDescription>Recent trainings scheduled</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Training</TableHead>
              <TableHead className="hidden sm:table-cell">Location</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="md:table-cell">Attendees</TableHead>
              <TableHead className="text-right">Average Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Python Fundamentals</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  External Provider A
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Online</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Upcoming
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-10-23</TableCell>
              <TableCell className="md:table-cell">20</TableCell>
              <TableCell className="text-right">-</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-medium">Advanced Async Programming</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  External Provider B
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Off Site</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-06-24</TableCell>
              <TableCell className="hidden md:table-cell">12</TableCell>
              <TableCell className="text-right">4.2</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="font-medium">Basic Design Patterns</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  External Provider B
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">KUL Office</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2024-03-15</TableCell>
              <TableCell className="hidden md:table-cell">15</TableCell>
              <TableCell className="text-right">2.5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
