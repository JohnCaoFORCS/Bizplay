"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/tables/mock-data/utils";
import { DepartmentTableColumnHeader } from "./CardTableColumnHeader";
import { CardDialog } from "@/lib/type";
import { CardTableRowActions } from "./CardTableRowActions";

export default function getCardTableColumns(
  handleOpenDialog: (cardDialog: CardDialog | undefined) => void
) {
  const columns: ColumnDef<Card>[] = [
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
        <DepartmentTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => <div className="w-[120px]">{row.getValue("id")}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "cardNumber",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Card Number" />
      ),
      cell: ({ row }) => (
        <div className="w-[100px]">{row.getValue("cardNumber")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "validationDate",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Validation Date" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">{row.getValue("validationDate")}</div>
      ),
      enableSorting: true,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <CardTableRowActions row={row} handleOpenDialog={handleOpenDialog} />
      ),
    },
  ];

  return columns;
}
