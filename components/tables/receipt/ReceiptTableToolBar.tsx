"use client";

import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { ReceiptTableViewOptions } from "./ReceiptTableViewOptions";
import { useEffect, useState } from "react";
import { ROLE } from "@/lib/constants";
import { Receipt } from "../mock-data/utils";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  role: ROLE;
  setSelectedMakeResolution: (receipt: Receipt | undefined) => void;
}

export function ReceiptTableToolbar<TData>({
  table,
  role,
  setSelectedMakeResolution,
}: DataTableToolbarProps<TData>) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      table.setGlobalFilter(search);
    } else {
      table.resetGlobalFilter();
    }
  }, [search]);

  return (
    <div className="flex justify-between">
      <ReceiptTableViewOptions
        role={role}
        table={table}
        setSelectedMakeResolution={setSelectedMakeResolution}
      />

      <div className="flex space-x-2 mt-10">
        <Input
          placeholder="Filter receipts..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-8 w-[400px]"
        />
      </div>
    </div>
  );
}
