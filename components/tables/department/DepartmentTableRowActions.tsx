"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Department } from "../mock-data/utils";
import { DIALOG_TYPE } from "@/lib/constants";
import { DepartmentDialog } from "@/lib/type";
import { Row } from "@tanstack/react-table";

type DepartmentTableRowActionsProps = {
  row: Row<Department>;
  handleOpenDialog: (departmentDialog: DepartmentDialog | undefined) => void;
};

export function DepartmentTableRowActions({
  row,
  handleOpenDialog,
}: DepartmentTableRowActionsProps) {
  const department: Department = row.original;

  const handleEditDepartment = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.DEPARTMENT_EDIT,
      department: department,
    });
  };

  const handleViewDepartment = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.DEPARTMENT_VIEW,
      department: department,
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
        <DropdownMenuItem onSelect={handleEditDepartment}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewDepartment}>
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
