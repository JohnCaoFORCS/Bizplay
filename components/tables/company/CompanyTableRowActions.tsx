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
import { DIALOG_TYPE } from "@/lib/constants";
import { Row } from "@tanstack/react-table";
import { Company } from "../mock-data/utils";
import { CompanyDialog } from "@/lib/type";

type CompanyTableRowActionsProps = {
  row: Row<Company>;
  handleOpenDialog: (companyDialog: CompanyDialog | undefined) => void;
};

export function CompanyTableRowActions({
  row,
  handleOpenDialog,
}: CompanyTableRowActionsProps) {
  const company: Company = row.original;

  const handleEditCompany = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.COMPANY_EDIT,
      company: company,
    });
  };

  const handleViewCompany = () => {
    handleOpenDialog({
      type: DIALOG_TYPE.COMPANY_VIEW,
      company: company,
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
        <DropdownMenuItem onSelect={handleEditCompany}>Edit</DropdownMenuItem>
        <DropdownMenuItem onSelect={handleViewCompany}>View</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
