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
import { Company } from "@/components/tables/mock-data/utils";

type DialogEditCompanyProps = {
    isOpen: boolean;
    company: Company;
    handleOnClose: () => void;
};

export default function DialogEditCompany({
    isOpen,
    company,
    handleOnClose,
}: DialogEditCompanyProps) {
    const [name, setName] = useState(company.name);
    const [address, setAddress] = useState(company.address);
    const [phoneNumber, setPhoneNumber] = useState(company.phoneNumber);

    useEffect(() => {
        setName(company.name);
        setAddress(company.address);
        setPhoneNumber(company.phoneNumber);
    }, [company.id]);

    return (
        <Dialog open={isOpen}>
            <DialogContent className="[&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>Edit company</DialogTitle>
                    <DialogDescription>
                        Please edit the company details below.
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
                            value={company.id}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="companyId" className="text-right">
                            Company Id
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            className="col-span-3"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                            Address
                        </Label>
                        <Input
                            id="address"
                            value={address}
                            className="col-span-3"
                            onChange={(e) => setAddress(e.target.value)}
                        />
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
                </div>
                <DialogFooter>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleOnClose}
                    >
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
