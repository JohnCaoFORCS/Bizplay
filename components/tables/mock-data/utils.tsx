import { z } from "zod";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const receiptSchema = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.string(),
  cashAmount: z.number(),
});

export const resolutionSchema = z.object({
  id: z.string(),
  status: z.string(),
  totalCash: z.number(),
  userId: z.string(),
  approverId: z.string(),
  receiptId: z.string(),
  createdAt: z.string(),
});

export const departmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  companyId: z.string(),
});

export type Receipt = z.infer<typeof receiptSchema>;
export type Resolution = z.infer<typeof resolutionSchema>;
export type Department = z.infer<typeof departmentSchema>;

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Circle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOff,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];

export const getStatusBadge = (status: string) => {
  switch (status) {
    case "Completed":
      return (
        <Badge variant="outline" className="bg-green-500 text-white">
          Completed
        </Badge>
      );
    case "In Progress":
      return (
        <Badge variant="outline" className="bg-yellow-500 text-white">
          In Progress
        </Badge>
      );
    case "Rejected":
      return (
        <Badge variant="outline" className="bg-red-500 text-white">
          Rejected
        </Badge>
      );
    case "Draft":
      return (
        <Badge variant="outline" className="bg-gray-500 text-white">
          Draft
        </Badge>
      );
  }
};
