"use client";

import { DIALOG_TYPE } from "@/lib/constants";
import DialogEditReceipt from "./receipt/DialogEditReceipt";
import {
  Department,
  Receipt,
  Resolution,
  User,
} from "../tables/mock-data/utils";
import { useEffect, useState } from "react";
import DialogViewReceipt from "./receipt/DialogViewReceipt";
import DialogEditResolution from "./resolution/DialogEditResolution";
import DialogViewResolution from "./resolution/DialogViewResolution";
import DialogEditDepartment from "./department/DialogEditDepartment";
import DialogViewDepartment from "./department/DialogViewDepartment";
import DialogEditUser from "./user/DialogEditUser";
import DialogViewUser from "./user/DialogViewUser";

type DialogLayoutProps = {
  type: DIALOG_TYPE;
  receipt?: Receipt;
  resolution?: Resolution;
  department?: Department;
  user?: User;
  handleOnClose: () => void;
};

export default function DialogLayout({
  type,
  receipt,
  resolution,
  department,
  user,
  handleOnClose,
}: DialogLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (receipt || department || resolution || user) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [receipt, department, resolution, user]);

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
    case DIALOG_TYPE.DEPARTMENT_EDIT:
      return department ? (
        <DialogEditDepartment
          isOpen={isOpen}
          department={department}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.DEPARTMENT_VIEW:
      return department ? (
        <DialogViewDepartment
          isOpen={isOpen}
          department={department}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.USER_EDIT:
      return user ? (
        <DialogEditUser
          isOpen={isOpen}
          user={user}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.USER_VIEW:
      return user ? (
        <DialogViewUser
          isOpen={isOpen}
          user={user}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    default:
      return <></>;
  }
}
