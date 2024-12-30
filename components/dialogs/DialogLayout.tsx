import { DIALOG_TYPE } from "@/lib/constants";
import DialogEditReceipt from "./DialogEditReceipt";
import { Receipt } from "../tables/mock-data/utils";
import { useEffect, useState } from "react";
import DialogViewReceipt from "./DialogViewReceipt";

type DialogLayoutProps = {
  type: DIALOG_TYPE;
  receipt?: Receipt;
  handleOnClose: () => void;
};

export default function DialogLayout({
  type,
  receipt,
  handleOnClose,
}: DialogLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (receipt) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [receipt]);

  switch (type) {
    case DIALOG_TYPE.RECEIPT_EDIT:
      return receipt ? (
        <DialogEditReceipt
          isOpen={isOpen}
          receipt={receipt}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.RECEIPT_VIEW:
      return receipt ? (
        <DialogViewReceipt
          isOpen={isOpen}
          receipt={receipt}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    default:
      return <></>;
  }
}
