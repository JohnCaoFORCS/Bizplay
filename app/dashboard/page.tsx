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
import { ROLE, VIEW } from "@/lib/constants";
import { getViewName } from "@/lib/utils";
import { useState } from "react";
import ResolutionTable from "@/components/tables/resolution/ResolutionTable";
import DepartmentTable from "@/components/tables/department/DepartmentTable";
import UserTable from "@/components/tables/user/UserTable";
import CardTable from "@/components/tables/card/CardTable";
import CompanyTable from "@/components/tables/company/CompanyTable";

export default function Page() {
    const [selectedView, setSelectedView] = useState(VIEW.RECEIPT_TABLE);

    const renderContent = () => {
        switch (selectedView) {
            case VIEW.RECEIPT_TABLE:
                return <ReceiptTable role={ROLE.USER} />;
            case VIEW.RESOLUTION_TABLE:
                return <ResolutionTable />;
            case VIEW.MANAGE_DEPARTMENTS:
                return <DepartmentTable />;
            case VIEW.MANAGE_USERS:
                return <UserTable />;
            case VIEW.MANAGE_CARDS:
                return <CardTable />;
            case VIEW.MANAGE_RECEIPTS:
                return <ReceiptTable role={ROLE.MANAGER} />;
            case VIEW.APPROVER_RESOLUTION_TABLE:
                return <ResolutionTable />;
            case VIEW.MANAGE_COMPANIES:
                return <CompanyTable />;
            default:
                return <DefaultContent />;
        }
    };

    return (
        <SidebarProvider>
            <AppSidebar
                selectedView={selectedView}
                setSelectedView={setSelectedView}
            />
            <SidebarInset className="w-full h-full overflow-x-hidden">
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink>Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        {getViewName(selectedView)}
                                    </BreadcrumbPage>
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

function DefaultContent() {
    return <div>Default Content</div>;
}
