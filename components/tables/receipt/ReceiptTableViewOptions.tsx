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

interface ReceiptTableViewOptionsProps<TData> {
    table: Table<TData>;
    role: ROLE;
}

export function ReceiptTableViewOptions<TData>({
    table,
    role,
}: ReceiptTableViewOptionsProps<TData>) {
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
                        .filter(
                            (column) => typeof column.accessorFn !== "undefined"
                        )
                        .map((column) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onSelect={() => {
                                        column.toggleVisibility(
                                            !column.getIsVisible()
                                        );
                                    }}
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            );
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
            <Dialog>
                <DialogTrigger>
                    {role === ROLE.MANAGER ? (
                        <Button className="h-8" variant="outline">
                            Make resolution
                        </Button>
                    ) : (
                        <Button className="h-8" variant="outline">
                            New receipt
                        </Button>
                    )}
                </DialogTrigger>
                <DialogAddReceipt />
                <Dialog />
            </Dialog>
        </div>
    );
}
