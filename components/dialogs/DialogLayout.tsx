import { DIALOG_TYPE } from "@/lib/constants";
import DialogEditReceipt from "./DialogEditReceipt";
import { Receipt } from "../tables/mock-data/utils";

type DialogLayoutProps = {
  type: DIALOG_TYPE;
  receipt?: Receipt;
};

export default function DialogLayout({ type, receipt }: DialogLayoutProps) {
  switch (type) {
    case DIALOG_TYPE.RECEIPT_EDIT:
      return receipt ? <DialogEditReceipt receipt={receipt} /> : <></>;
    default:
      return <></>;
  }
}
