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
import { User } from "../mock-data/utils";
import { DIALOG_TYPE } from "@/lib/constants";
import { UserDialog } from "@/lib/type";
import { Row } from "@tanstack/react-table";

type UserTableRowActionsProps = {
  row: Row<User>;
  handleOpenDialog: (userDialog: UserDialog | undefined) => void;
};

export function DepartmentTableRowActions({
  row,
  handleOpenDialog,
}: UserTableRowActionsProps) {
  const user: User = row.original;

  const handleEditUser = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.USER_EDIT,
      user: user,
    });
  };

  const handleViewUser = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.USER_VIEW,
      user: user,
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
        <DropdownMenuItem onSelect={handleEditUser}>Edit</DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewUser}>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
