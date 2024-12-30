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
  }
}
