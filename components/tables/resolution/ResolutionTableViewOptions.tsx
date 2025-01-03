"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CalendarDateRangePicker } from "@/components/CalendarDateRangePicker";
import { useEffect, useState } from "react";
import DropDownMenuStatusResolution from "@/components/menus/DropDownMenuStatusResolution";
import { Resolution } from "../mock-data/utils";

interface ResolutionTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function ResolutionTableViewOptions<TData>({
  table,
}: ResolutionTableViewOptionsProps<TData>) {
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    if (selectedStatus === "All") {
      table.resetGlobalFilter();
    } else {
      table.setGlobalFilter(selectedStatus);
    }
  }, [selectedStatus]);

  return (
    <div className="flex items-center justify-end gap-2">
      <CalendarDateRangePicker />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto hidden h-8 lg:flex"
          >
            <Settings2 />
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllFlatColumns()
            .filter((column) => typeof column.accessorFn !== "undefined")
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onSelect={() => {
                    column.toggleVisibility(!column.getIsVisible());
                  }}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropDownMenuStatusResolution
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
    </div>
  );
}
