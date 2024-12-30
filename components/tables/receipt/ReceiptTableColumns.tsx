"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ReceiptTableColumnHeader } from "./ReceiptTableColumnHeader";
import { ReceiptTableRowActions } from "./ReceiptTableRowActions";
import { Task } from "@/components/tables/mock-data/utils";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="flex items-center justify-center"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="flex items-center justify-center"
      />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <ReceiptTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <ReceiptTableColumnHeader column={column} title="User ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("userId")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "cashAmount",
    header: ({ column }) => (
      <ReceiptTableColumnHeader column={column} title="Cash Amount" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("cashAmount")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <ReceiptTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("createdAt")}</div>
    ),
    enableSorting: true,
  },

  {
    id: "actions",
    cell: () => <ReceiptTableRowActions />,
  },
];
