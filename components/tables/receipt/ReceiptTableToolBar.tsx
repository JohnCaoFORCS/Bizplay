"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReceiptTableViewOptions } from "./ReceiptTableViewOptions";
import { useEffect, useState } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function ReceiptTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      table.setGlobalFilter(search);
    } else {
      table.resetGlobalFilter();
    }
  }, [search]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter receipts..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <ReceiptTableViewOptions table={table} />
    </div>
  );
}
