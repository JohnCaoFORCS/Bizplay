"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Department } from "@/components/tables/mock-data/utils";
import { DepartmentTableColumnHeader } from "./DepartmentTableColumnHeader";
import { DepartmentDialog } from "@/lib/type";
import { DepartmentTableRowActions } from "./DepartmentTableRowActions";

export default function getDepartmentTableColumns(
  handleOpenDialog: (departmentDialog: DepartmentDialog | undefined) => void
) {
  const columns: ColumnDef<Department>[] = [
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
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
      enableSorting: true,
    },
    {
      accessorKey: "companyId",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Company ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("companyId")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Department Name" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">{row.getValue("name")}</div>
      ),
      enableSorting: true,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DepartmentTableRowActions
          row={row}
          handleOpenDialog={handleOpenDialog}
        />
      ),
    },
  ];

  return columns;
}
