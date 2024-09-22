"use client"

import { Button } from "@/components/ui/Button";
import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { user } from "@/data/user";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {

    const isCurrentUser = true

    const handleFollowPageUser = () => {

    }

    return (

        <div>

            <GeneralHeader backHref="/">

                <div className="text-base">{user.name}</div>

                { user.postCount !== undefined && user.postCount === 0 && 
                    <div className="text-gray-500">{user.postCount} posts</div> 
                }

            </GeneralHeader>

            <section className="border-b-2 border-gray-800 pb-8">

                <div 
                    className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${user.cover})` }}
                >
                </div>

                <div className="-mt-12 flex justify-between items-end px-6">

                    <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="size-24 rounded-full"
                    />

                    <div className="w-32">

                        { isCurrentUser &&
                            <Link href={`/${user.slug}/edit`}>
                                <Button 
                                    label="Editar Perfil"
                                    size="medium"
                                />
                            </Link>
                        }

                        { !isCurrentUser &&
                            <Button 
                                label="Seguir"
                                size="medium"
                                onClick={handleFollowPageUser}
                            />
                        }

                    </div>

                </div>

                <div className="px-6 mt-4">

                    <div className="text-lg font-semibold">{user.name}</div>
                    <div className="text-base text-gray-500">@{user.slug}</div>

                    <div className="py-5 text-lg text-gray-500">{user.bio}</div>

                    { user.link &&

                        <div className="flex gap-2 items-center">

                            <LinkIcon size={20}/> 

                            <Link 
                                href={user.link} 
                                target="_blank"
                                className="hover:underline text-blue-400"
                                > {user.link}
                            </Link>

                        </div>
                    }

                    <div className="flex mt-5 gap-6">

                        <div className="text-base text-gray-500">
                            <span className="text-white">99</span> Seguindo
                        </div>

                        <div className="text-base text-gray-500">
                            <span className="text-white">99</span> Seguidores
                        </div>
                        
                    </div>
                    
                </div>

            </section>

        </div>
    )

}