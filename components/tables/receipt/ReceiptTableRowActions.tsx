"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Receipt } from "../mock-data/utils";
import { ReceiptDialog } from "@/lib/type";
import { DIALOG_TYPE } from "@/lib/constants";

type ReceiptTableRowActionsProps = {
  row: any;
  handleOpenDialog: (receiptDialog: ReceiptDialog | undefined) => void;
  handleSetSelectedMakeResolution: (receipt: Receipt) => void;
};

export function ReceiptTableRowActions({
  row,
  handleOpenDialog,
  handleSetSelectedMakeResolution,
}: ReceiptTableRowActionsProps) {
  const receipt: Receipt = row.original;

  const handleEditReceipt = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.RECEIPT_EDIT,
      receipt: receipt,
    });
  };

  const handleViewReceipt = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.RECEIPT_VIEW,
      receipt: receipt,
    });
  };

  const handleMakeResolution = () => {
    handleSetSelectedMakeResolution(receipt);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onSelect={handleMakeResolution}>
          Make Resolution
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleEditReceipt}>Edit</DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewReceipt}>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
