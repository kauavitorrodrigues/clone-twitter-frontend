import { Tweet } from "@/types/Tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 1,
    user: user, 
    body: "Meu sonho é ir para esse lugar!",
    image: "https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg",
    likeCount: 565, 
    commentCount: 5,
    retweetCount: 312,
    liked: false,
    retweeted: false,
    dataPost: new Date(2024, 6, 22, 16, 48, 10)
}