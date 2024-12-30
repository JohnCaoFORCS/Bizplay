import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { VIEW } from "./constants";
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

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getViewName(view: VIEW) {
  switch (view) {
    case VIEW.RECEIPT_TABLE:
      return "Receipt Table";
    case VIEW.RESOLUTION_TABLE:
      return "Resolution Table";
    case VIEW.MANAGE_DEPARTMENTS:
      return "Manage Departments";
    case VIEW.MANAGE_USERS:
      return "Manage Users";
    case VIEW.MANAGE_CARDS:
      return "Manage Cards";
    case VIEW.MANAGE_RECEIPTS:
      return "Manage Receipts";
  }
}
