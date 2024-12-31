"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Department } from "@/components/tables/mock-data/utils";

type DialogEditDepartmentProps = {
  isOpen: boolean;
  department: Department;
  handleOnClose: () => void;
};

export default function DialogEditDepartment({
  isOpen,
  department,
  handleOnClose,
}: DialogEditDepartmentProps) {
  const [name, setName] = useState(department.name);

  useEffect(() => {
    setName(department.name);
  }, [department.id]);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader>
          <DialogTitle>Edit receipt</DialogTitle>
          <DialogDescription>
            Please edit the receipt details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input
              disabled={true}
              id="id"
              value={department.id}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyId" className="text-right">
              Company Id
            </Label>
            <Input
              disabled={true}
              id="companyId"
              value={department.companyId}
              className="col-span-3"
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
          <Button type="button" variant="outline" onClick={handleOnClose}>
            Cancel
          </Button>
          <Button onClick={handleOnClose} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
