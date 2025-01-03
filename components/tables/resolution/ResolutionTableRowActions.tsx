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
import { Resolution } from "../mock-data/utils";
import { DIALOG_TYPE, ROLE } from "@/lib/constants";
import { ResolutionDialog } from "@/lib/type";
import { Table } from "@tanstack/react-table";

type ResolutionTableRowActionsProps = {
  table: Table<Resolution>;
  role: ROLE;
  handleOpenDialog: (resolutionDialog: ResolutionDialog | undefined) => void;
};

export function ResolutionTableRowActions({
  table,
  role,
  handleOpenDialog,
}: ResolutionTableRowActionsProps) {
  const resolutions = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => row.original);

  const handleApproveResolution = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.APPROVE_RESOLUTION,
      resolutions: resolutions,
    });
  };

  const handleEditResolution = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.RESOLUTION_EDIT,
      resolutions: resolutions,
    });
  };

  const handleViewResolution = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.RESOLUTION_VIEW,
      resolutions: resolutions,
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
        <DropdownMenuItem
          onSelect={() => {
            if (role === ROLE.APPROVER) {
              handleApproveResolution();
            } else {
              handleEditResolution();
            }
          }}
        >
          {role === ROLE.APPROVER ? "Approve" : "Edit"}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewResolution}>
          {role === ROLE.APPROVER ? "Reject" : "View"}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {role === ROLE.APPROVER && <DropdownMenuItem>Restart</DropdownMenuItem>}
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
