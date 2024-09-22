"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export const NavLogout = () => {

    const router = useRouter()

    const handleLogoutUser = () => {
        router.replace("/signin")
    }

    return (
        <div 
            className="
                flex items-center gap-6 py-3 
                opacity-50
                hover:opacity-100 cursor-pointer" 
                onClick={handleLogoutUser}
            > <LogOut/> <p className="text-lg">Sair</p>
        </div>
    )
}