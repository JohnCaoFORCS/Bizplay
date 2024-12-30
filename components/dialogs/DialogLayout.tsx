"use client";

import { DIALOG_TYPE } from "@/lib/constants";
import DialogEditReceipt from "./DialogEditReceipt";
import { Receipt, Resolution } from "../tables/mock-data/utils";
import { useEffect, useState } from "react";
import DialogViewReceipt from "./DialogViewReceipt";
import DialogEditResolution from "./resolution/DialogEditResolution";
import DialogViewResolution from "./resolution/DialogViewResolution";

type DialogLayoutProps = {
  type: DIALOG_TYPE;
  receipt?: Receipt;
  resolution?: Resolution;
  handleOnClose: () => void;
};

export default function DialogLayout({
  type,
  receipt,
  resolution,
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

  useEffect(() => {
    if (resolution) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [resolution]);

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
    case DIALOG_TYPE.RESOLUTION_EDIT:
      return resolution ? (
        <DialogEditResolution
          isOpen={isOpen}
          resolution={resolution}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.RESOLUTION_VIEW:
      return resolution ? (
        <DialogViewResolution
          isOpen={isOpen}
          resolution={resolution}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    default:
      return <></>;
  }
}
