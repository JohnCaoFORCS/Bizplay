"use client";

import { AppSidebar } from "@/components/app-sidebar";
import ReceiptTable from "@/components/tables/receipt/ReceiptTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { VIEW } from "@/lib/constants";
import { getViewName } from "@/lib/utils";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Page() {
  const [selectedView, setSelectedView] = useState(VIEW.RECEIPT_TABLE);

  const renderContent = () => {
    switch (selectedView) {
      case VIEW.RECEIPT_TABLE:
        return <ReceiptTable />;
      case VIEW.RESOLUTION_TABLE:
        return <ResolutionTable />;
      default:
        return <DefaultContent />;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar setSelectedView={setSelectedView} />
      <SidebarInset className="w-full h-full overflow-x-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getViewName(selectedView)}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex w-full h-full flex-col gap-4 p-4 pt-0">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

function ResolutionTable() {
  return <div>Resolution Table Content</div>;
}

function DefaultContent() {
  return <div>Default Content</div>;
}
