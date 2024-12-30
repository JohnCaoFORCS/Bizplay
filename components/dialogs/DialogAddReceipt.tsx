import {
  Dialog,
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

type DialogAddReceiptProps = {};

export default function DialogAddReceipt({}: DialogAddReceiptProps) {
  const [cashAmount, setCashAmount] = useState(0);
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add receipt</DialogTitle>
        <DialogDescription>
          Please add the receipt details below.
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
          <Label htmlFor="userId" className="text-right">
            User Id
          </Label>
          <Input
            id="userId"
            value={userId}
            className="col-span-3"
            onChange={(e) => setUserId(e.target.value)}
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
            value={createdAt}
            className="col-span-3"
            type="date"
            onChange={(e) => setCreatedAt(e.target.value)}
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
