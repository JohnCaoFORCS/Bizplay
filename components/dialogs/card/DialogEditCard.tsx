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
import { Card } from "@/components/tables/mock-data/utils";

type DialogEditCardProps = {
  isOpen: boolean;
  card: Card;
  handleOnClose: () => void;
};

export default function DialogEditCard({
  isOpen,
  card,
  handleOnClose,
}: DialogEditCardProps) {
  const [cardNumber, setCardNumber] = useState(card.cardNumber);
  const [validationDate, setValidationDate] = useState(card.validationDate);

  useEffect(() => {
    setCardNumber(card.cardNumber);
    setValidationDate(card.validationDate);
  }, [card.id]);

  return (
    <Dialog open={isOpen}>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader>
          <DialogTitle>Edit card</DialogTitle>
          <DialogDescription>
            Please edit the card details below.
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
              value={card.id}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyId" className="text-right">
              Company Id
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
