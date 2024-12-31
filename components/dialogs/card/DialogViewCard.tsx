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
import { Card } from "@/components/tables/mock-data/utils";

type DialogViewCardProps = {
  isOpen: boolean;
  card: Card;
  handleOnClose: () => void;
};

export default function DialogViewCard({
  isOpen,
  card,
  handleOnClose,
}: DialogViewCardProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader>
          <DialogTitle>View card</DialogTitle>
          <DialogDescription>
            Card details are displayed below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input id="id" className="col-span-3" value={card.id} readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userId" className="text-right">
              Card Number
            </Label>
            <Input
              id="userId"
              className="col-span-3"
              value={card.cardNumber}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="validationDate" className="text-right">
              Validation Date
            </Label>
            <Input
              id="validationDate"
              className="col-span-3"
              value={card.validationDate}
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
