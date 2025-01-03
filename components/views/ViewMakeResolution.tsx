"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Receipt } from "../tables/mock-data/utils";
import { CircleX } from "lucide-react";
import MenuSelectApprover from "../menus/MenuSelectApprover";

const receiptFormSchema = z.object({
    id: z.string(),
    userId: z.string(),
    createdAt: z.string(),
    cashAmount: z.number(),
    submitter: z.string(),
    submitDate: z.string(),
    title: z.string(),
    content: z.string(),
    note: z.string(),
    category: z.string(),
    description: z.string(),
    applicationAmount: z.number(),
    attachFile: z.string().optional(),
    selectApprover: z.string(),
});

type ReceiptFormValues = z.infer<typeof receiptFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ReceiptFormValues> = {
    id: "",
    userId: "",
    createdAt: "",
    cashAmount: 0,
    submitter: "",
    submitDate: new Date().toISOString().split("T")[0],
    title: "",
    content: "",
    note: "",
    category: "",
    description: "",
    applicationAmount: 0,
    attachFile: "",
    selectApprover: "",
};

type ViewMakeResolutionProps = {
    receipt: Receipt;
    setSelectedMakeResolution: (receipt: Receipt | undefined) => void;
};

export function ViewMakeResolution({
    receipt,
    setSelectedMakeResolution,
}: ViewMakeResolutionProps) {
    const form = useForm<ReceiptFormValues>({
        resolver: zodResolver(receiptFormSchema),
        defaultValues,
        mode: "onChange",
    });

    function onSubmit(data: ReceiptFormValues) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <div className="flex flex-col items-center w-full h-full gap-4 px-10 py-4">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => {
                            setSelectedMakeResolution(undefined);
                        }}
                        variant={"outline"}
                        size={"default"}
                    >
                        Cancel
                    </Button>
                    <Button variant={"outline"} size={"default"}>
                        Make as a Draft
                    </Button>
                </div>

                <Button variant={"default"} size={"default"}>
                    Submit
                </Button>
            </div>
            <div className="flex flex-col w-full gap-2">
                <span className="text-lg text-center font-semibold">
                    Expense Resolution
                </span>
                <div className="flex flex-col w-full">
                    <FieldResolution label="Submitter" rightChild={<Input />} />
                    <FieldResolution
                        label="Submit Date"
                        rightChild={
                            <Input
                                type="datetime"
                                value={new Date().toISOString().split("T")[0]}
                                readOnly
                            />
                        }
                    />
                    <FieldResolution label="Title" rightChild={<Input />} />
                    <FieldResolution
                        label="Content"
                        rightChild={<Textarea />}
                    />
                    <FieldResolution
                        label="Note"
                        rightChild={<Textarea />}
                        isLast={true}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full">
                <span className="text-base font-semibold mt-12">
                    Total ￦325,500 of 2 Expenses (Application Amount ￦325,500){" "}
                </span>
                <div className="w-full h-[2px] bg-primary mb-4" />
                <div className="flex justify-between">
                    <div className="flex items-center justify-between h-fit p-4 gap-8 border-2 border-primary">
                        <div className="flex flex-col gap-1">
                            <span>2024-11-30 20:30</span>
                            <span className="font-semibold">Randy's Pub</span>
                            <span>Visa 1234-1234</span>
                        </div>
                        <span className="font-semibold text-primary">
                            ￦325,500
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <div className="flex items-center gap-1">
                            <span className="w-1/4 flex justify-end pr-2">
                                Category
                            </span>
                            <Select>
                                <SelectTrigger className="w-3/4">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">
                                        Category 1
                                    </SelectItem>
                                    <SelectItem value="2">
                                        Category 2
                                    </SelectItem>
                                    <SelectItem value="3">
                                        Category 3
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-1">
                            <span className="w-1/4 flex justify-end pr-2">
                                Description
                            </span>
                            <Textarea className="w-3/4" />
                        </div>
                        <div className="flex gap-1">
                            <span className="w-1/4 flex justify-end pr-2">
                                Amount
                            </span>
                            <Input className="w-3/4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[2px] bg-primary mt-12" />
            <div className="flex flex-col gap-1 items-start w-full">
                <Button className="w-1/4" variant={"outline"} size={"lg"}>
                    Attach File
                </Button>
                <div className="flex items-center gap-2">
                    <span>Subcontract_agreement_Microsoft.pdf</span>
                    <CircleX className="text-gray-400 w-5 h-5 hover:text-primary cursor-pointer" />
                </div>
            </div>
            <span className="flex items-center justify-start w-full text-base font-semibold -mb-4 mt-12">
                Select Approver
            </span>
            <div className="w-full h-[2px] bg-primary mb-2" />
            <div className="w-full -mt-2">
                <MenuSelectApprover />
            </div>
        </div>
    );
}

type FieldResolutionProps = {
    label: string;
    rightChild: React.ReactNode;
    isLast?: boolean;
};

function FieldResolution({ label, rightChild, isLast }: FieldResolutionProps) {
    return (
        <div
            className={`flex w-full border-2 ${
                isLast ? "border-b-2" : "border-b-0"
            } border-gray-200`}
        >
            <div className="w-1/5 pl-8 flex items-center border-r-2 border-gray-200">
                {label}
            </div>
            <div className="w-4/5 p-2 flex items-center">{rightChild}</div>
        </div>
    );
}
