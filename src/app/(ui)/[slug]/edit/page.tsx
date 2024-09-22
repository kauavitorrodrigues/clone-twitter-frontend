import { Button } from "@/components/ui/Button";
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { user } from "@/data/user";
import { Camera, X } from "lucide-react";

export default function Page() {

    return (

        <div>

            <GeneralHeader backHref={`/${user.slug}`}>

                <div className="text-base">Editar Perfil</div>

            </GeneralHeader>

            <section className="border-b-2 border-gray-800 pb-5">

                <div 
                    className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center flex justify-center items-center gap-4"
                    style={{ backgroundImage: `url(${user.cover})` }}>

                    <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                        <Camera size={24}/>
                    </div>

                    <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                        <X size={24}/>
                    </div>

                </div>

                <div className="-mt-12 px-6">

                    <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="size-24 rounded-full"
                    />

                    <div className=" -mt-24 size-24 flex justify-center items-center">

                        <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                            <Camera size={24}/>
                        </div>

                    </div>

                </div>

            </section>

            <section className="p-6 flex flex-col gap-4">

                <label>
                    <p className="text-base text-gray-500 mb-2">Nome</p>
                    <Input 
                        placeholder="Digite seu nome"
                        value={user.name}
                    />
                </label>

                <label>
                    <p className="text-base text-gray-500 mb-2">Bio</p>
                    <TextArea
                        placeholder="Descreva você mesmo."
                        rows={4}
                        value={user.bio}
                    />
                </label>

                <label>
                    <p className="text-base text-gray-500 mb-2">Link</p>
                    <Input 
                        placeholder="Digite um link"
                        value={user.link}
                    />
                </label>

                <Button
                    label="Salvar Alterações"
                    size="big" 
                />

            </section>

        </div>
    )

}