import { CircleUserRound, CircleX, Home } from "lucide-react"
import { Logo } from "../Logo"
import { SearchInput } from "../SearchInput"
import { NavItem } from "@/components/nav/NavItem"
import { NavLogout } from "@/components/nav/NavLogout"

type Props = {
    closeAction: () => void
}

export const HomeMenu = ({ closeAction } : Props ) => {
    return (
        <div className="lg:hidden fixed inset-0 p-6 bg-[#14171A]">

            <div className="flex justify-between items-center">

                <Logo size={32}/>

                <CircleX 
                    strokeWidth={1} 
                    size={48}
                    className="cursor-pointer hover:opacity-80 duration-500"
                    onClick={closeAction}
                />


            </div>

            <div className="my-6">
                <SearchInput/>
            </div>

            <div className="flex-1 mt-6">

                <nav className="mt-11">

                    <NavItem 
                        label="Início" 
                        icon={<Home/>}
                        href="/home" 
                    />

                    <NavItem 
                        label="Meu Perfil" 
                        icon={<CircleUserRound/>}
                        href="/profile" 
                    />

                    <NavLogout/>

                </nav>

            </div>

        </div>

    )
}