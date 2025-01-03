import { getStatusBadge } from "../tables/mock-data/utils";

export default function MenuApprovers() {
  return (
    <div className="flex flex-col items-center w-full h-full border-t-2 border-gray-200">
      <div className="flex items-center justify-between w-full h-10">
        <div className="flex items-center justify-center w-1/6 h-full border-gray-200 border-l-2">
          <span>Approver</span>
        </div>
        <div className="flex items-center justify-center w-1/6 h-full border-gray-200 border-l-2">
          <span>Status</span>
        </div>
        <div className="flex items-center justify-center w-3/6 h-full border-gray-200 border-l-2">
          <span>Opinion</span>
        </div>
        <div className="flex items-center justify-center w-1/6 h-full border-gray-200 border-l-2 border-r-2">
          <span>Date</span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <MenuApproverItem />
        <MenuApproverItem />
        <MenuApproverItem />
        <MenuApproverItem />
      </div>
    </div>
  );
}

type MenuApproverItemProps = {};

function MenuApproverItem({}: MenuApproverItemProps) {
  return (
    <div className="flex items-center justify-between w-full h-20 border-2 border-gray-200">
      <div className="flex items-center justify-center w-1/6 h-full border-gray-200">
        <span>John Kim</span>
      </div>
      <div className="flex items-center justify-center w-1/6 h-full border-gray-200 border-l-2">
        {getStatusBadge("Rejected", "")}
      </div>
      <div className="flex w-3/6 h-full border-gray-200 border-l-2 p-2">
        <span>You should add Mr.Clition as a approver before me.</span>
      </div>
      <div className="flex items-center justify-center w-1/6 h-full border-gray-200 border-l-2">
        <span>01/01/2025</span>
      </div>
    </div>
  );
}
