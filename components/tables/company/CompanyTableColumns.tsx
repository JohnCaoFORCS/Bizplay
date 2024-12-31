"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Company } from "@/components/tables/mock-data/utils";
import { CompanyDialog } from "@/lib/type";
import { CompanyTableColumnHeader } from "./CompanyTableColumnHeader";
import { CompanyTableRowActions } from "./CompanyTableRowActions";

export default function getCompanyTableColumns(
  handleOpenDialog: (companyDialog: CompanyDialog | undefined) => void
) {
  const columns: ColumnDef<Company>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex items-center justify-center h-full w-full">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center justify-center h-full w-full">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        </div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <CompanyTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => <div className="w-[120px]">{row.getValue("id")}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <CompanyTableColumnHeader column={column} title="Name" />
      ),
      cell: ({ row }) => (
        <div className="w-[100px]">{row.getValue("name")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <CompanyTableColumnHeader column={column} title="Address" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">{row.getValue("address")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "phoneNumber",
      header: ({ column }) => (
        <CompanyTableColumnHeader column={column} title="Phone Number" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">{row.getValue("phoneNumber")}</div>
      ),
      enableSorting: true,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <CompanyTableRowActions row={row} handleOpenDialog={handleOpenDialog} />
      ),
    },
  ];

  return columns;
}
