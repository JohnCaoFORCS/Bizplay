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
import { Card, User } from "../mock-data/utils";
import { DIALOG_TYPE } from "@/lib/constants";
import { CardDialog, UserDialog } from "@/lib/type";
import { Row } from "@tanstack/react-table";

type CardTableRowActionsProps = {
  row: Row<Card>;
  handleOpenDialog: (cardDialog: CardDialog | undefined) => void;
};

export function CardTableRowActions({
  row,
  handleOpenDialog,
}: CardTableRowActionsProps) {
  const card: Card = row.original;

  const handleEditCard = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.CARD_EDIT,
      card: card,
    });
  };

  const handleViewCard = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.CARD_VIEW,
      card: card,
    });
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
        <DropdownMenuItem onSelect={handleEditCard}>Edit</DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewCard}>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
