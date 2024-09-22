import { SignInForm } from "@/components/auth/SignInForm";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export default function Page() {

    return (

        <div className="max-w-lg mx-auto min-h-[90vh] mt-12 px-6 flex flex-col justify-center">

            <Logo size={56} />
            <h1 className="mt-10 text-2xl">Entre na sua conta</h1>

            <div className="mt-10 mb-14 flex flex-col gap-6">

                <SignInForm/>

            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:flex-row">
                <p className="text-gray-500">Ainda não tem uma conta?</p>
                <Link className="hover:underline" href="/signup">Cadastre-se</Link>
            </div>

        </div>

    )

}