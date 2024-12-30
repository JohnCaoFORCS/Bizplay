"use client";

import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { ResolutionTableViewOptions } from "./ResolutionTableViewOptions";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function ResolutionTableToolbar<TData>({
  table,
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
    <div className="flex items-center justify-between">
      <ResolutionTableViewOptions table={table} />

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter resolutions..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-8 w-[400px]"
        />
      </div>
    </div>
  );
}
