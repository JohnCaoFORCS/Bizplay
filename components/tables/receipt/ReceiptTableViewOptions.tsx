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
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogAddReceipt from "@/components/dialogs/receipt/DialogAddReceipt";
import { ROLE } from "@/lib/constants";
import { Receipt } from "../mock-data/utils";
import { useToast } from "@/hooks/use-toast";

interface ReceiptTableViewOptionsProps<TData> {
  table: Table<TData>;
  role: ROLE;
  setSelectedMakeResolution: (receipt: Receipt | undefined) => void;
}

export function ReceiptTableViewOptions<TData>({
  table,
  role,
  setSelectedMakeResolution,
}: ReceiptTableViewOptionsProps<TData>) {
  const { toast } = useToast();
  const selectedReceipts = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);

  const handleMakeResolution = () => {
    if (selectedReceipts.length === 0) {
      toast({
        variant: "destructive",
        title: "No receipts selected",
        description: "Please select at least one receipt",
      });
      return;
    }
    setSelectedMakeResolution(selectedReceipts[0] as Receipt);
  };

  return (
    <div className="flex flex-col gap-2">
      <CalendarDateRangePicker />
      <div className="flex items-center gap-2">
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

        {role === ROLE.MANAGER ? (
          <Button className="h-8" variant="outline">
            Multiple Receipts Submission
          </Button>
        ) : (
          <>
            <Dialog>
              <DialogTrigger>
                <Button className="h-8" variant="outline">
                  New receipt
                </Button>
              </DialogTrigger>
              <DialogAddReceipt />
              <Dialog />
            </Dialog>
            <Button
              onClick={handleMakeResolution}
              className="h-8"
              variant="outline"
            >
              Make resolution
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
