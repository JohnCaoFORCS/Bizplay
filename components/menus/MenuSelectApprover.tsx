import { useState } from "react";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowUpDown, CirclePlus, Trash } from "lucide-react";
import { Button } from "../ui/button";

export default function MenuSelectApprover() {
  const [approvers, setApprovers] = useState<number>(1);

  return (
    <div className="flex flex-col items-center w-1/2 border-2 border-b-0 border-gray-200">
      <span className="flex w-full items-start border-b-2 p-2 border-gray-200">
        Order of Approval
      </span>
      {Array.from({ length: approvers }).map((_, index) => (
        <MenuSelectApproverItem
          isFirst={index === 0}
          onRemove={() => {
            setApprovers(approvers - 1);
          }}
          key={`approver-${index}`}
        />
      ))}
      <MenuAddSelectApproverItem
        onAdd={() => {
          setApprovers(approvers + 1);
        }}
      />
    </div>
  );
}

type MenuSelectApproverItemProps = {
  isFirst: boolean;
  onRemove: () => void;
};

function MenuSelectApproverItem({
  isFirst,
  onRemove,
}: MenuSelectApproverItemProps) {
  return (
    <div className="flex items-center w-full h-full border-b-2 border-gray-200">
      <div className="flex items-center justify-center h-full w-1/6 border-gray-200">
        <ArrowUpDown className="text-gray-400 w-5 h-5" />
      </div>
      <div className="flex items-center gap-2 h-full w-5/6 p-2 border-l-2 border-gray-200">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Approver" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="John Doe">John Doe</SelectItem>
            <SelectItem value="Jane Doe">Jane Doe</SelectItem>
            <SelectItem value="John Smith">John Smith</SelectItem>
          </SelectContent>
        </Select>
        {!isFirst && (
          <Button variant="ghost" onClick={onRemove}>
            <Trash className="text-gray-400 w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}

type MenuAddSelectApproverItemProps = {
  onAdd: () => void;
};

function MenuAddSelectApproverItem({ onAdd }: MenuAddSelectApproverItemProps) {
  return (
    <div className="flex items-center w-full h-full border-b-2 border-gray-200">
      <div className="flex items-center justify-center h-full w-1/6 border-gray-200">
        <ArrowUpDown className="text-gray-400 w-5 h-5" />
      </div>
      <div
        onClick={onAdd}
        className="flex items-center justify-center h-full w-5/6 p-2 border-l-2 border-gray-200 hover:bg-accent cursor-pointer"
      >
        <CirclePlus className="text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
}
