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
import { useEffect, useState } from "react";
import { User } from "@/components/tables/mock-data/utils";

type DialogEditUserProps = {
  isOpen: boolean;
  user: User;
  handleOnClose: () => void;
};

export default function DialogEditUser({
  isOpen,
  user,
  handleOnClose,
}: DialogEditUserProps) {
  const [account, setAccount] = useState(user.account);
  const [password, setPassword] = useState(user.password);
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  useEffect(() => {
    setAccount(user.account);
    setPassword(user.password);
    setName(user.name);
    setPhoneNumber(user.phoneNumber);
    setEmail(user.email);
    setRole(user.role);
  }, [user]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOnClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user</DialogTitle>
          <DialogDescription>
            Please edit the user details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id" className="text-right">
              Id
            </Label>
            <Input
              id="id"
              value={user.id}
              className="col-span-3"
              disabled={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyId" className="text-right">
              Company Id
            </Label>
            <Input
              id="companyId"
              value={user.companyId}
              className="col-span-3"
              disabled={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cardId" className="text-right">
              Card Id
            </Label>
            <Input
              id="cardId"
              value={user.cardId}
              className="col-span-3"
              disabled={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="departmentId" className="text-right">
              Department Id
            </Label>
            <Input
              id="departmentId"
              value={user.departmentId}
              className="col-span-3"
              disabled={true}
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
              onValueChange={(value) => setRole(Number(value))}
              value={role.toString()}
              defaultValue={role.toString()}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Admin</SelectItem>
                <SelectItem value="2">User</SelectItem>
                <SelectItem value="3">Manager</SelectItem>
                <SelectItem value="4">Approver</SelectItem>
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
            <Button type="submit">Edit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
