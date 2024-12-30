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
import { Receipt, Resolution } from "../mock-data/utils";
import { DIALOG_TYPE } from "@/lib/constants";
import { ResolutionDialog } from "@/lib/type";

type ResolutionTableRowActionsProps = {
  row: any;
  handleOpenDialog: (resolutionDialog: ResolutionDialog | undefined) => void;
};

export function ResolutionTableRowActions({
  row,
  handleOpenDialog,
}: ResolutionTableRowActionsProps) {
  const resolution: Resolution = row.original;

  const handleEditResolution = () => {
    console.log("resolution", resolution);

    handleOpenDialog({
      type: DIALOG_TYPE.RESOLUTION_EDIT,
      resolution: resolution,
    });
  };

  const handleViewResolution = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.RESOLUTION_VIEW,
      resolution: resolution,
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
        <DropdownMenuItem onSelect={handleEditResolution}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewResolution}>
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
