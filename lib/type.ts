import { Receipt, Resolution } from "@/components/tables/mock-data/utils";
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
