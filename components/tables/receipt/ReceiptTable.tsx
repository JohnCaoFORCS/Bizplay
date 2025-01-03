"use client";

import { useState } from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ReceiptTablePagination } from "./ReceiptTablePagination";
import { ReceiptTableToolbar } from "./ReceiptTableToolBar";
import { receiptTableData } from "../mock-data/receipt-table-data";
import getReceiptTableColumns from "./ReceiptTableColumns";
import { Receipt } from "../mock-data/utils";
import type { ReceiptDialog } from "@/lib/type";
import DialogLayout from "@/components/dialogs/DialogLayout";
import { ROLE } from "@/lib/constants";
import { ViewMakeResolution } from "@/components/views/ViewMakeResolution";

type Props = {
  role: ROLE;
};

export default function ReceiptTable({ role }: Props) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const [receiptDialog, setReceiptDialog] = useState<ReceiptDialog | undefined>(
    undefined
  );

  const [selectedMakeResolution, setSelectedMakeResolution] = useState<
    Receipt | undefined
  >(undefined);

  const table = useReactTable<Receipt>({
    data: receiptTableData,
    columns: getReceiptTableColumns(
      setReceiptDialog,
      setSelectedMakeResolution
    ),
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  if (role === ROLE.USER && selectedMakeResolution) {
    return (
      <ViewMakeResolution
        setSelectedMakeResolution={setSelectedMakeResolution}
        receipt={selectedMakeResolution}
      />
    );
  }

  return (
    <div className="space-y-4">
      <ReceiptTableToolbar
        role={role}
        table={table}
        setSelectedMakeResolution={setSelectedMakeResolution}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <ReceiptTablePagination table={table} />
      {receiptDialog && (
        <DialogLayout
          type={receiptDialog.type}
          receipt={receiptDialog.receipt}
          handleOnClose={() => setReceiptDialog(undefined)}
        />
      )}
    </div>
  );
}
