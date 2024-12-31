"use client";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DialogAddDepartment() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [companyId, setCompanyId] = useState("");

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add department</DialogTitle>
        <DialogDescription>
          Please add the department details below.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="id" className="text-right">
            Id
          </Label>
          <Input
            id="id"
            value={id}
            className="col-span-3"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="companyId" className="text-right">
            Company Id
          </Label>
          <Input
            id="companyId"
            value={companyId}
            className="col-span-3"
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Department Name
          </Label>
          <Input
            id="name"
            value={name}
            className="col-span-3"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </DialogClose>

        <DialogClose asChild>
          <Button type="submit">Add</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
