import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { VIEW } from "./constants";

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
    case VIEW.MANAGE_COMPANIES:
      return "Manage Companies";
    case VIEW.APPROVER_RESOLUTION_TABLE:
      return "Approver Resolution Table";
    case VIEW.APPROVER_REPORT_VIEW:
      return "Approver Report View";
  }
}

export function getRoleName(role: number) {
  switch (role) {
    case 1:
      return "Admin";
    case 2:
      return "Manager";
    case 3:
      return "Approver";
    case 4:
      return "User";
  }
}
