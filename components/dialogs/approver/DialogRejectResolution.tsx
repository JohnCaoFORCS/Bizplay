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
import { Button } from "@/components/ui/button";
import { Resolution } from "@/components/tables/mock-data/utils";

type Props = {
  isOpen: boolean;
  resolutions: Resolution[];
  handleOnClose: () => void;
};

export default function DialogRejectResolution({
  isOpen,
  resolutions,
  handleOnClose,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={handleOnClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reject Resolutions</DialogTitle>
          <DialogDescription>
            Are you sure you want to reject the resolutions below?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          {resolutions.map((resolution) => (
            <span key={resolution.id}>
              {`Resolution ID: ${resolution.id} - Total Cash: ${resolution.totalCash}`}
            </span>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button type="submit">Reject</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
