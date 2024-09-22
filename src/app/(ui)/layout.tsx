import { NavItem } from "@/components/nav/NavItem"
import { NavLogout } from "@/components/nav/NavLogout"
import { NavMyProfile } from "@/components/nav/NavMyProfile"
import { Logo } from "@/components/ui/Logo"
import { CircleUserRound, Home } from "lucide-react"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Layout({ children } : Props ) {

    return (
        <main className="min-h-screen flex justify-center mx-auto max-w-7xl">

            <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-800">
                
                <div className="flex-1 mt-6">
                    <Logo size={24}/>
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
                    </nav>
                </div>

                <div className="mb-6 flex flex-col gap-6">
                    <NavLogout/>
                    <NavMyProfile/>
                </div>
                
            </section>

            <section className="flex-1 max-w-lg">{children}</section>

            <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900"></aside>

        </main>
    )

}