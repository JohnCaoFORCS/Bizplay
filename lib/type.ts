import { Receipt } from "@/components/tables/mock-data/utils";
import type { DIALOG_TYPE } from "./constants";

export type ReceiptDialog = {
  type: DIALOG_TYPE;
  receipt: Receipt;
};