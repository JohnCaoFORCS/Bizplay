import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Receipt } from "../tables/mock-data/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

type DialogEditReceiptProps = {
  receipt: Receipt;
};

export default function DialogEditReceipt({ receipt }: DialogEditReceiptProps) {
  const [cashAmount, setCashAmount] = useState(receipt.cashAmount);
  const [createdAt, setCreatedAt] = useState(receipt.createdAt);

  useEffect(() => {
    setCashAmount(receipt.cashAmount);
    setCreatedAt(receipt.createdAt);
  }, [receipt.id]);

  const handleSave = () => {
    console.log(cashAmount, "cashAmount");
  };

  return (
    <Dialog>
      <DialogContent>
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
              value={receipt.id}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              User Id
            </Label>
            <Input
              disabled={true}
              id="userId"
              value={receipt.userId}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cashAmount" className="text-right">
              Cash Amount
            </Label>
            <Input
              id="cashAmount"
              value={cashAmount}
              className="col-span-3"
              type="number"
              onChange={(e) => setCashAmount(Number(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="createdAt" className="text-right">
              Created At
            </Label>
            <Input
              id="createdAt"
              value={receipt.createdAt}
              className="col-span-3"
              type="date"
              onChange={(e) => setCreatedAt(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
