"use client"

import { Menu } from "lucide-react"
import { Logo } from "../Logo"
import { useState } from "react"
import { HomeMenu } from "./HomeMenu"

export const HomeHeader = () => {

    const [ showMenu, setShowMenu ] = useState(false)

    return (
        <header className="flex justify-between p-6 border-b-2 border-gray-800">

            <div className="lg:hidden">
                <Logo size={24}/>
            </div>    

            <div className="hidden lg:block text-xl">Página Inicial</div>  

            <div 
                className="cursor-pointer hover:opacity-90 duration-500 lg:hidden"
                onClick={() => setShowMenu(true)}
                ><Menu/>
            </div>

            { showMenu && 
                <HomeMenu
                    closeAction={() => setShowMenu(false)}
                /> 
            }

        </header>
    )

}