"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Resolution } from "../../tables/mock-data/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type DialogViewResolutionProps = {
  isOpen: boolean;
  resolution: Resolution;
  handleOnClose: () => void;
};

export default function DialogViewResolution({
  isOpen,
  resolution,
  handleOnClose,
}: DialogViewResolutionProps) {
  return (
    <Dialog open={isOpen} onOpenChange={handleOnClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View Resolution</DialogTitle>
          <DialogDescription>
            Please view the resolution details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input id="id" value={resolution.id} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              id="status"
              value={resolution.status}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="totalCash" className="text-right">
              Total Cash
            </Label>
            <Input
              id="totalCash"
              value={resolution.totalCash}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              User Id
            </Label>
            <Input
              id="userId"
              value={resolution.userId}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="approverId" className="text-right">
              Approver Id
            </Label>
            <Input
              id="approverId"
              value={resolution.approverId}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="receiptId" className="text-right">
              Receipt Id
            </Label>
            <Input
              id="receiptId"
              value={resolution.receiptId}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdAt" className="text-right">
              Created At
            </Label>
            <Input
              id="createdAt"
              value={resolution.createdAt}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
