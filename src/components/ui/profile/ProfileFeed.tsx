import { tweet } from "@/data/tweet"
import { TweetItem } from "../tweet/TweetItem"

export const ProfileFeed = () => {
    return (
        <div>

            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>
            <TweetItem tweet={tweet}/>

        </div>
    )
}