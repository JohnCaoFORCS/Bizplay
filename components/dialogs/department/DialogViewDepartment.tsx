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
import { Department } from "@/components/tables/mock-data/utils";

type DialogViewDepartmentProps = {
  isOpen: boolean;
  department: Department;
  handleOnClose: () => void;
};

export default function DialogViewDepartment({
  isOpen,
  department,
  handleOnClose,
}: DialogViewDepartmentProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader>
          <DialogTitle>View receipt</DialogTitle>
          <DialogDescription>
            Department details are displayed below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input
              id="id"
              className="col-span-3"
              value={department.id}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              Company Id
            </Label>
            <Input
              id="userId"
              className="col-span-3"
              value={department.companyId}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cashAmount" className="text-right">
              Department Name
            </Label>
            <Input
              id="cashAmount"
              className="col-span-3"
              value={department.name}
              readOnly
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleOnClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
