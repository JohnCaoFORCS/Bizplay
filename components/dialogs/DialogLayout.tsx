"use client";

import { DIALOG_TYPE } from "@/lib/constants";
import DialogEditReceipt from "./receipt/DialogEditReceipt";
import {
  Card,
  Company,
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
import DialogEditCard from "./card/DialogEditCard";
import DialogViewCard from "./card/DialogViewCard";
import DialogEditCompany from "./company/DialogEditCompany";
import DialogViewCompany from "./company/DialogViewCompany";
import DialogApproveResolutions from "./approver/DialogApproveResolution";

type DialogLayoutProps = {
  type: DIALOG_TYPE;
  receipt?: Receipt;
  resolutions?: Resolution[];
  department?: Department;
  user?: User;
  card?: Card;
  company?: Company;
  handleOnClose: () => void;
};

export default function DialogLayout({
  type,
  receipt,
  resolutions,
  department,
  user,
  card,
  company,
  handleOnClose,
}: DialogLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (receipt || department || resolutions || user || card || company) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [receipt, department, resolutions, user, card, company]);

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
      return resolutions && resolutions.length > 0 ? (
        <DialogEditResolution
          isOpen={isOpen}
          resolution={resolutions[0]}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.RESOLUTION_VIEW:
      return resolutions && resolutions.length > 0 ? (
        <DialogViewResolution
          isOpen={isOpen}
          resolution={resolutions[0]}
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
    case DIALOG_TYPE.CARD_EDIT:
      return card ? (
        <DialogEditCard
          isOpen={isOpen}
          card={card}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.CARD_VIEW:
      return card ? (
        <DialogViewCard
          isOpen={isOpen}
          card={card}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.COMPANY_EDIT:
      return company ? (
        <DialogEditCompany
          isOpen={isOpen}
          company={company}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.COMPANY_VIEW:
      return company ? (
        <DialogViewCompany
          isOpen={isOpen}
          company={company}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    case DIALOG_TYPE.APPROVE_RESOLUTION:
      return resolutions ? (
        <DialogApproveResolutions
          isOpen={isOpen}
          resolutions={resolutions}
          handleOnClose={handleOnClose}
        />
      ) : (
        <></>
      );
    default:
      return <></>;
  }
}
