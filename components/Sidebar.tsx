"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";
import {
    IconSettings,
    IconMaximize,
    IconMinimize,
    IconHome,
    IconBlockquote,
    IconPencil,
    IconPencilSearch,
    IconMoon,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UserButton } from '@clerk/nextjs';

export function SidebarDemo() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: (
                <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Blogs",
            href: "#",
            icon: (
                <IconBlockquote className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Add Blog",
            href: "#",
            icon: (
                <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Pending",
            href: "#",
            icon: (
                <IconPencilSearch className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "#",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    
    return (
        <div
            className={cn(
                " flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 w-full mx-auto ",
                "h-screen" // Ajusta el margen superior para el espacio del Header
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-4 bg-gray-100">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        
                        <div className="mt-2 flex flex-col gap-6">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    
                </SidebarBody>
            </Sidebar>
            <Dashboard />
        </div>
    );
}




const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                <div className="flex gap-2">
                    {[...new Array(4)].map((_, index) => (
                        <div
                            key={"first-array-" + index}
                            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((_, index) => (
                        <div
                            key={"second-array-" + index}
                            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};
