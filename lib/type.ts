import {
  Card,
  Company,
  Department,
  Receipt,
  Resolution,
  User,
} from "@/components/tables/mock-data/utils";
import type { DIALOG_TYPE } from "./constants";

export type ReceiptDialog = {
  type: DIALOG_TYPE;
  receipt: Receipt;
};

export type ResolutionDialog = {
  type: DIALOG_TYPE;
  resolution: Resolution;
};

export type DepartmentDialog = {
  type: DIALOG_TYPE;
  department: Department;
};

export type UserDialog = {
  type: DIALOG_TYPE;
  user: User;
};

export type CardDialog = {
  type: DIALOG_TYPE;
  card: Card;
};

export type CompanyDialog = {
  type: DIALOG_TYPE;
  company: Company;
};
