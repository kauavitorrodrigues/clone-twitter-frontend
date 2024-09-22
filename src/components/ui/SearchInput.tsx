"use client"

import { Search } from "lucide-react"
import { Input } from "./Input"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

type Props = {
    defaultValue?: string
    hideOnSearch?: boolean
}

export const SearchInput = ({ defaultValue, hideOnSearch } : Props ) => {

    const router = useRouter()
    const pathName = usePathname()
    const [ searchInputValue, setSearchInputValue ] = useState(defaultValue || "")

    const handleSearchEnter = () => {
        if (searchInputValue) {
            router.push(`/search?q=${encodeURIComponent(searchInputValue)}`)
        }
    }

    if (hideOnSearch && pathName === "/search") return null 

    return (
        <Input
            filled
            placeholder="Buscar"
            value={searchInputValue}
            onChange={t => setSearchInputValue(t)}
            onEnter={handleSearchEnter}
            icon={<Search/>}
        />
    )

}