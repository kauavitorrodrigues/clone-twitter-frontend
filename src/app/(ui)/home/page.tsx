import { HomeFeed } from "@/components/ui/home/HomeFeed";
import { HomeHeader } from "@/components/ui/home/HomeHeader";
import { TweetPost } from "@/components/ui/tweet/TweetPost";

export default function Page() {

	return (
		<div>
			<HomeHeader/>
			<TweetPost/>
			<HomeFeed/>		
		</div>
	)

}