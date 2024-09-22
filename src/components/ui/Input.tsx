"use client"

import { Eye, EyeOff } from "lucide-react"
import { KeyboardEvent, ReactNode, useState } from "react"

type Props = {
    value?: string
    filled?: boolean
    icon?: ReactNode
    password?: boolean
    placeholder: string
    onChange?: (newValue: string) => void
    onEnter?: () => void
}

export const Input = ({ placeholder, password, filled, value, icon, onChange, onEnter } : Props ) => {

    const [ showPassword, setShowPassword ] = useState(false)
    
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === "enter" && onEnter ) { onEnter()}
    }

    return (
        <div 
            className={`
                flex items-center h-12 w-full 
                rounded-3xl border-gray-600
                border-2 has-[:focus]:border-white
                ${ filled && "bg-gray-600" }
            `}
            >
            
            { !password && icon && <span className="ml-6">{icon}</span> }

            <input 
                className="flex-1 outline-none h-full px-4 bg-transparent"
                type={password && !showPassword ? "password" : "text" }
                placeholder={placeholder}
                onChange={ e => onChange && onChange(e.target.value) }
                value={value}
                onKeyUp={handleKeyUp}
            />

            { password && showPassword && 
                <Eye 
                    className="cursor-pointer mr-4" 
                    onClick={() => setShowPassword(!showPassword)} size={20}
                /> 
            }

            { password && !showPassword && 
                <EyeOff 
                    className="cursor-pointer mr-4" 
                    onClick={() => setShowPassword(!showPassword)} size={20}
                /> 
            }
            
        </div>
    )

}