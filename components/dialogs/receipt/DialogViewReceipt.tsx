"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Receipt } from "@/components/tables/mock-data/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type DialogViewReceiptProps = {
  isOpen: boolean;
  receipt: Receipt;
  handleOnClose: () => void;
};

export default function DialogViewReceipt({
  isOpen,
  receipt,
  handleOnClose,
}: DialogViewReceiptProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader>
          <DialogTitle>View receipt</DialogTitle>
          <DialogDescription>
            Receipt details are displayed below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input id="id" className="col-span-3" value={receipt.id} readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              User Id
            </Label>
            <Input
              id="userId"
              className="col-span-3"
              value={receipt.userId}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cashAmount" className="text-right">
              Cash Amount
            </Label>
            <Input
              id="cashAmount"
              className="col-span-3"
              value={receipt.cashAmount}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdAt" className="text-right">
              Created At
            </Label>
            <Input
              id="createdAt"
              className="col-span-3"
              value={receipt.createdAt}
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
