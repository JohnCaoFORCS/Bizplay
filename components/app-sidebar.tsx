"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
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

const data = {
  user: {
    name: "Admin",
    email: "admin@forcs.com",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWSafVgPfN2XYnhgAk3o0TrOHlwhqxMeXLndBwqjzi6yw697evW=s32-w32-h32-c-k-no",
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
      title: "Tables",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Receipt Table",
          url: "#",
        },
        {
          title: "Resolution Table",
          url: "#",
        },
      ],
    },
    {
      title: "Management",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Manage Departments",
          url: "#",
        },
        {
          title: "Manage Userss",
          url: "#",
        },
        {
          title: "Manage Cards",
          url: "#",
        },
        {
          title: "Manage Receipts",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <CompanySwitcher companies={data.companies} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
