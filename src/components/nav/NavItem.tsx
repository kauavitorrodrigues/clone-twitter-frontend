"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
    label: string;
    icon: ReactNode
    href: string
    active?: boolean
}

export const NavItem = ({ href, label, icon, active } : Props ) => {

    const pathName = usePathname()
    const verifyActivePage = pathName === href

    return (
        <Link 
            href={href}
            className={`
                flex items-center gap-6 py-3
                hover:opacity-100
                ${ verifyActivePage || active 
                    ? "opacity-100"
                    : "opacity-50" 
                }
            `}
        > {icon} <div className="text-lg">{label}</div>
        </Link>
    )
}