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

export default function DialogAddCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [validationDate, setValidationDate] = useState("");

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add card</DialogTitle>
        <DialogDescription>
          Please add the card details below.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="cardNumber" className="text-right">
            Card Number
          </Label>
          <Input
            id="cardNumber"
            value={cardNumber}
            className="col-span-3"
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="validationDate" className="text-right">
            Validation Date
          </Label>
          <Input
            id="validationDate"
            value={validationDate}
            className="col-span-3"
            type="date"
            onChange={(e) => setValidationDate(e.target.value)}
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
