"use client";

import * as React from "react";
import {
    AudioWaveform,
    Command,
    GalleryVerticalEnd,
    Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { CompanySwitcher } from "./company-switcher";
import { VIEW } from "@/lib/constants";

const data = {
    user: {
        name: "Admin",
        email: "admin@forcs.com",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWSafVgPfN2XYnhgAk3o0TrOHlwhqxMeXLndBwqjzi6yw697evW=s32-w32-h32-c-k-no",
    },
    companies: [
        {
            name: "FORCS",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "FORCS",
            logo: AudioWaveform,
            plan: "Enterprise",
        },
        {
            name: "FORCS",
            logo: Command,
            plan: "Enterprise",
        },
    ],
    navMain: [
        {
            title: "User",
            view: VIEW.RECEIPT_TABLE,
            icon: Settings2,
            isActive: true,
            items: [
                {
                    title: "Receipt Table",
                    view: VIEW.RECEIPT_TABLE,
                },
                {
                    title: "Resolution Table",
                    view: VIEW.RESOLUTION_TABLE,
                },
            ],
        },
        {
            title: "Manager",
            view: VIEW.MANAGE_DEPARTMENTS,
            icon: Settings2,
            items: [
                {
                    title: "Manage Departments",
                    view: VIEW.MANAGE_DEPARTMENTS,
                },
                {
                    title: "Manage Users",
                    view: VIEW.MANAGE_USERS,
                },
                {
                    title: "Manage Cards",
                    view: VIEW.MANAGE_CARDS,
                },
                {
                    title: "Manage Receipts",
                    view: VIEW.MANAGE_RECEIPTS,
                },
                {
                    title: "Manage Companies",
                    view: VIEW.MANAGE_COMPANIES,
                },
            ],
        },
        {
            title: "Approver",
            view: VIEW.APPROVER_RESOLUTION_TABLE,
            icon: Settings2,
            items: [
                {
                    title: "Resolution Table",
                    view: VIEW.RESOLUTION_TABLE,
                },
                {
                    title: "Report View",
                    view: VIEW.APPROVER_REPORT_VIEW,
                },
            ],
        },
    ],
};

export function AppSidebar({
    selectedView,
    setSelectedView,
    ...props
}: React.ComponentProps<typeof Sidebar> & {
    selectedView: VIEW;
    setSelectedView: (view: VIEW) => void;
}) {
    const handleViewChange = (view: VIEW) => {
        setSelectedView(view);
    };

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <CompanySwitcher companies={data.companies} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain
                    selectedView={selectedView}
                    items={data.navMain}
                    handleViewChange={handleViewChange}
                />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
