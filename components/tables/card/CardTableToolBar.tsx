"use client";

import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { CardTableViewOptions } from "./CardTableViewOptions";

interface CardTableToolbarProps<TData> {
  table: Table<TData>;
}

export function CardTableToolbar<TData>({
  table,
}: CardTableToolbarProps<TData>) {
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
      <CardTableViewOptions table={table} />

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter cards..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="h-8 w-[400px]"
        />
      </div>
    </div>
  );
}
