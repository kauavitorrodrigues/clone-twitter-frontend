"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

export const SignInForm = () => {

    const router = useRouter()
    const [ emailFieldValue, setEmailFieldValue ] = useState("")
    const [ passwordFieldValue, setPasswordFieldValue ] = useState("")

    const handleUserLoginButton = () => {
        router.replace('/home')
    }

    return (

        <>        

            <Input
                value={emailFieldValue}
                onChange={ t => setEmailFieldValue(t) }
                placeholder="Digite seu email" 
            />

            <Input
                password
                value={passwordFieldValue}
                onChange={ t => setPasswordFieldValue(t) }
                placeholder="Digite sua senha" 
            />

            <Button
                size="big" 
                label="Entrar"
                onClick={handleUserLoginButton}
            />

        </>

    )

}