"use client"

import { Tweet } from "@/types/Tweet"
import { formatRelativeTime } from "@/utils/formatRelativeTime"
import { Heart, MessageCircle, Repeat } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type Props = {
    tweet: Tweet
    hideComments?: boolean
}

export const TweetItem = ({ tweet, hideComments } : Props ) => {

    const [ likedTweet, setLikedTweet ] = useState(tweet.liked)
    const [ retweetedTweet, setRetweetedTweet ] = useState(tweet.retweeted)

    const handleRetweetTweet = () => {
        setRetweetedTweet(!retweetedTweet)
    }

    const handleLikeTweet = () => {
        setLikedTweet(!likedTweet)
    }

    return (

        <div className="flex gap-2 p-6 border-b-2 border-gray-800">  

            <div>

                <Link href={`/${tweet.user.slug}`}>
                    <img 
                        src={tweet.user.avatar} 
                        alt={tweet.user.name}
                        className="size-10 rounded-full"
                    />
                </Link>

            </div>

            <div className="flex-1">

                <div className="flex flex-wrap items-center gap-x-3">

                    <div className="font-semibold text-base">
                        <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
                    </div>

                    <div className="text-sm text-gray-400">
                        @{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}
                    </div>

                </div>

                <div className="pt-2 pb-3 text-sm">{tweet.body}</div>

                { tweet.image &&

                    <div className="w-full">
                        <img 
                            src={tweet.image} 
                            alt=""
                            className="w-full rounded-2xl"
                        />
                    </div>

                }

                <div className="flex mt-6 text-gray-400">

                    { !hideComments &&

                        <div className="flex-1">

                            <Link href={`/tweet/${tweet.id}`}>

                                <div className="inline-flex items-center gap-2">

                                    <MessageCircle size={24}/>

                                    <div className="text-base"
                                        >{tweet.commentCount}
                                    </div>

                                </div>

                            </Link>

                        </div>     

                    }

                    <div className="flex-1">

                        <div className="inline-flex items-center gap-2">

                            { retweetedTweet 
                                ?
                                    <Repeat
                                        color="#1DA1F2" 
                                        size={24}
                                        className="cursor-pointer transition-[fill] hover:opacity-80 duration-500"
                                        onClick={handleRetweetTweet}
                                    />
                                :
                                    <Repeat
                                        size={24}
                                        className="cursor-pointer transition-[fill] hover:opacity-80 duration-500"
                                        onClick={handleRetweetTweet}
                                    />
                            }
                            
                            
                            <div className={`
                                text-base
                                ${ retweetedTweet && "text-blue-400" }
                            `}
                                >{tweet.retweetCount}
                            </div>

                        </div>

                    </div>

                    <div 
                        className={`${!hideComments && "flex-1"}`} >

                        <div className="inline-flex items-center gap-2">

                            { likedTweet 
                                ?
                                    <Heart
                                        fill="red" 
                                        color="red" 
                                        size={24}
                                        className="cursor-pointer transition-[fill] hover:opacity-80 duration-500"
                                        onClick={handleLikeTweet}
                                    />
                                :
                                    <Heart
                                        size={24}
                                        className="cursor-pointer transition-[fill] hover:opacity-80 duration-500"
                                        onClick={handleLikeTweet}
                                    />
                            }
                            
                            <div className={`
                                text-base
                                ${ likedTweet && "text-red-400" }
                            `}
                                >{tweet.likeCount}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}