import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings2 } from "lucide-react";
import { Button } from "../ui/button";

type DropDownMenuStatusResolutionProps = {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
};

export default function DropDownMenuStatusResolution({
  selectedStatus,
  setSelectedStatus,
}: DropDownMenuStatusResolutionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <Settings2 />
          Status
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "All"}
          onSelect={() => setSelectedStatus("All")}
        >
          All (8)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "Draft"}
          onSelect={() => setSelectedStatus("Draft")}
        >
          Draft (2)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "In process"}
          onSelect={() => setSelectedStatus("In process")}
        >
          In process (1)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "Rejected"}
          onSelect={() => setSelectedStatus("Rejected")}
        >
          Rejected (2)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedStatus === "Completed"}
          onSelect={() => setSelectedStatus("Completed")}
        >
          Completed (3)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
