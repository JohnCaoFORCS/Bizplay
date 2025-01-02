"use client";

import { Table } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { ReceiptTableViewOptions } from "./ReceiptTableViewOptions";
import { useEffect, useState } from "react";
import { ROLE } from "@/lib/constants";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    role: ROLE;
}

export function ReceiptTableToolbar<TData>({
    table,
    role,
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
            <ReceiptTableViewOptions role={role} table={table} />

            <div className="flex items-center space-x-2">
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
