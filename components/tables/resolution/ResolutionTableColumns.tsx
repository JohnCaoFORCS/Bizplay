"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  getStatusBadge,
  Resolution,
} from "@/components/tables/mock-data/utils";
import { ResolutionDialog } from "@/lib/type";
import { ResolutionTableColumnHeader } from "./ResolutionTableColumnHeader";
import { ResolutionTableRowActions } from "./ResolutionTableRowActions";
import { ROLE } from "@/lib/constants";

export default function getResolutionTableColumns(
  handleOpenDialog: (resolutionDialog: ResolutionDialog | undefined) => void,
  role: ROLE
) {
  const columns: ColumnDef<Resolution>[] = [
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
        <ResolutionTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "receiptId",
      header: ({ column }) => (
        <ResolutionTableColumnHeader column={column} title="Receipt ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("receiptId")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "userId",
      header: ({ column }) => (
        <ResolutionTableColumnHeader column={column} title="User ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("userId")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "approverId",
      header: ({ column }) => (
        <ResolutionTableColumnHeader column={column} title="Approver ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("approverId")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "totalCash",
      header: ({ column }) => (
        <ResolutionTableColumnHeader column={column} title="Total Cash" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("totalCash")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <ResolutionTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => (
        <div className="w-[100px]">
          {getStatusBadge(row.getValue("status"))}
        </div>
      ),
      enableSorting: true,
    },

    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <ResolutionTableColumnHeader column={column} title="Created At" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("createdAt")}</div>
      ),
      enableSorting: true,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <ResolutionTableRowActions
          role={role}
          row={row}
          handleOpenDialog={handleOpenDialog}
        />
      ),
    },
  ];

  return columns;
}
