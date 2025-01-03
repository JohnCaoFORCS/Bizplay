"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import the Select component
import { Input } from "@/components/ui/input"; // Import the Input component
import { Label } from "@/components/ui/label"; // Import the Label component
import { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DialogAddResolution() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("pending");
  const [totalCash, setTotalCash] = useState(0);
  const [userId, setUserId] = useState("");
  const [approverId, setApproverId] = useState("");
  const [receiptId, setReceiptId] = useState("");
  const [createdAt, setCreatedAt] = useState(
    new Date().toISOString().split("T")[0]
  );

  return (
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
          <Select
            onValueChange={(value) => setStatus(value)}
            value={status}
            defaultValue={status}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
              <SelectItem value="In process">In process</SelectItem>
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
  );
}
