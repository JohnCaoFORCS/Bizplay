"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { useEffect, useState } from "react";

type DialogEditResolutionProps = {
  isOpen: boolean;
  resolution: Resolution;
  handleOnClose: () => void;
};

export default function DialogEditResolution({
  isOpen,
  resolution,
  handleOnClose,
}: DialogEditResolutionProps) {
  const [id, setId] = useState(resolution.id);
  const [status, setStatus] = useState(resolution.status);
  const [totalCash, setTotalCash] = useState(resolution.totalCash);
  const [userId, setUserId] = useState(resolution.userId);
  const [approverId, setApproverId] = useState(resolution.approverId);
  const [receiptId, setReceiptId] = useState(resolution.receiptId);
  const [createdAt, setCreatedAt] = useState(resolution.createdAt);

  useEffect(() => {
    setId(resolution.id);
    setStatus(resolution.status);
    setTotalCash(resolution.totalCash);
    setUserId(resolution.userId);
    setApproverId(resolution.approverId);
    setReceiptId(resolution.receiptId);
    setCreatedAt(resolution.createdAt);
  }, [resolution.id]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOnClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Resolution</DialogTitle>
          <DialogDescription>
            Please add the resolution details below.
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
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select onValueChange={(value) => setStatus(value)} value={status}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="totalCash" className="text-right">
              Total Cash
            </Label>
            <Input
              id="totalCash"
              value={totalCash}
              className="col-span-3"
              type="number"
              onChange={(e) => setTotalCash(Number(e.target.value))}
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
            <Label htmlFor="approverId" className="text-right">
              Approver Id
            </Label>
            <Input
              id="approverId"
              value={approverId}
              className="col-span-3"
              onChange={(e) => setApproverId(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="receiptId" className="text-right">
              Receipt Id
            </Label>
            <Input
              id="receiptId"
              value={receiptId}
              className="col-span-3"
              onChange={(e) => setReceiptId(e.target.value)}
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
    </Dialog>
  );
}
