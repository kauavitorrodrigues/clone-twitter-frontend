"use client"

import { user } from "@/data/user"
import { Image } from "lucide-react"
import { Button } from "../Button"

export const TweetPost = () => {

    const handleUploadImage = () => {

    }

    const handlePostCreate = () => {

    }

    return (

        <div className="flex gap-6 px-8 py-6 border-b-2 border-gray-800">

            <div>
                <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="size-12 rounded-full"
                />
            </div>

            <div className="flex-1">

                <div 
                    className="
                        min-h-14 outline-none text-lg text-white
                        empty:before:content-[attr(data-placeholder)]
                        empty:before:text-gray-500
                    "
                    role="textbox"              
                    contentEditable  
                    data-placeholder="O que está acontecendo?"
                >

                </div>

                <div className="flex justify-between items-center mt-2">

                    <div 
                        className="cursor-pointer hover:opacity-80 duration-500"
                        onClick={handleUploadImage}
                        > <Image size={24}/>
                    </div>

                    <div className="w-28">

                        <Button 
                            label="Postar" 
                            size="medium" 
                            onClick={handlePostCreate}
                        />

                    </div>

                </div>

            </div>

        </div>

    )

}