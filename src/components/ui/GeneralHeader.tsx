import { CircleArrowLeft } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    backHref: string
}

export const GeneralHeader = ({ children, backHref } : Props ) => {

    return (

        <header className="flex gap-4 items-center p-6">.

            <Link href={backHref} >

                <CircleArrowLeft 
                    strokeWidth={1} 
                    size={48}
                    className="cursor-pointer hover:opacity-80 duration-500"
                />

            </Link>

            <div className="flex-1">
                { children }
            </div>

        </header>

    )

}