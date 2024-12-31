"use client";

import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { CompanyTableViewOptions } from "./CompanyTableViewOptions";

interface CompanyTableToolbarProps<TData> {
  table: Table<TData>;
}

export function CompanyTableToolbar<TData>({
  table,
}: CompanyTableToolbarProps<TData>) {
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
      <CompanyTableViewOptions table={table} />

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter companies..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-8 w-[400px]"
        />
      </div>
    </div>
  );
}
