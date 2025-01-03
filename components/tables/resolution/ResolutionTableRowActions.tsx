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
import { Row, Table } from "@tanstack/react-table";

type ResolutionTableRowActionsProps = {
  table: Table<Resolution>;
  role: ROLE;
  row: Row<Resolution>;
  handleOpenDialog: (resolutionDialog: ResolutionDialog | undefined) => void;
  setSelectedReSubmitResolution: (resolution: Resolution | undefined) => void;
};

export function ResolutionTableRowActions({
  table,
  role,
  row,
  handleOpenDialog,
  setSelectedReSubmitResolution,
}: ResolutionTableRowActionsProps) {
  const resolutions = table
    .getFilteredSelectedRowModel()
    .rows.map((row) => row.original);
  const currentResolution = row.original;

  const handleApproveResolution = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.APPROVE_RESOLUTION,
      resolutions: resolutions.length > 1 ? resolutions : [currentResolution],
    });
  };

  const handleRejectResolution = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.REJECT_RESOLUTION,
      resolutions: resolutions.length > 1 ? resolutions : [currentResolution],
    });
  };

  const handleEditResolution = () => {
    setSelectedReSubmitResolution(currentResolution);
  };

  const handleViewResolution = () => {
    setSelectedReSubmitResolution(currentResolution);
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
        {role === ROLE.APPROVER && (
          <DropdownMenuItem onSelect={handleRejectResolution}>
            Reject
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onSelect={handleViewResolution}>
          View
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {role === ROLE.APPROVER ? (
          <DropdownMenuItem>Restart</DropdownMenuItem>
        ) : (
          <DropdownMenuItem>Delete</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
