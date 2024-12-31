"use client";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DialogAddUser() {
  const [id, setId] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [cardId, setCardId] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add user</DialogTitle>
        <DialogDescription>
          Please add the user details below.
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
          <Label htmlFor="companyId" className="text-right">
            Company Id
          </Label>
          <Input
            id="companyId"
            value={companyId}
            className="col-span-3"
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="departmentId" className="text-right">
            Department Id
          </Label>
          <Input
            id="departmentId"
            value={departmentId}
            className="col-span-3"
            onChange={(e) => setDepartmentId(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="cardId" className="text-right">
            Card Id
          </Label>
          <Input
            id="cardId"
            value={cardId}
            className="col-span-3"
            onChange={(e) => setCardId(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="account" className="text-right">
            Account
          </Label>
          <Input
            id="account"
            value={account}
            className="col-span-3"
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            value={password}
            className="col-span-3"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            value={name}
            className="col-span-3"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="role" className="text-right">
            Role
          </Label>
          <Select
            onValueChange={(value) => setRole(value)}
            value={role}
            defaultValue={role}
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="approver">Approver</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phoneNumber" className="text-right">
            Phone Number
          </Label>
          <Input
            id="phoneNumber"
            value={phoneNumber}
            className="col-span-3"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            value={email}
            className="col-span-3"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
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
