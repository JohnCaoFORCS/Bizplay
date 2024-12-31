"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/components/tables/mock-data/utils";
import { DepartmentTableColumnHeader } from "./UserTableColumnHeader";
import { UserDialog } from "@/lib/type";
import { DepartmentTableRowActions } from "./UserTableRowActions";
import { getRoleName } from "@/lib/utils";

export default function getUserTableColumns(
  handleOpenDialog: (userDialog: UserDialog | undefined) => void
) {
  const columns: ColumnDef<User>[] = [
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
      accessorKey: "account",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Account" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("account")}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "password",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Password" />
      ),
      cell: ({ row }) => (
        <div className="w-[80px]">{row.getValue("password")}</div>
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
      accessorKey: "role",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Role" />
      ),
      cell: ({ row }) => (
        <div className="w-[120px]">{getRoleName(row.getValue("role"))}</div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "companyId",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Company ID" />
      ),
      cell: ({ row }) => {
        return <div className="w-[100px]">{row.getValue("companyId")}</div>;
      },
      enableSorting: true,
    },
    {
      accessorKey: "departmentId",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Department ID" />
      ),
      cell: ({ row }) => {
        return <div className="w-[100px]">{row.getValue("departmentId")}</div>;
      },
      enableSorting: true,
    },
    {
      accessorKey: "cardId",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Card ID" />
      ),
      cell: ({ row }) => {
        return <div className="w-[100px]">{row.getValue("cardId")}</div>;
      },
      enableSorting: true,
    },
    {
      accessorKey: "phoneNumber",
      header: ({ column }) => (
        <DepartmentTableColumnHeader column={column} title="Phone Number" />
      ),
      cell: ({ row }) => {
        return <div className="w-[100px]">{row.getValue("phoneNumber")}</div>;
      },
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
