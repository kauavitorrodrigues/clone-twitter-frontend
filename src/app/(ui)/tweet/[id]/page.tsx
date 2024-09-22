import { GeneralHeader } from "@/components/ui/GeneralHeader";
import { TweetItem } from "@/components/ui/tweet/TweetItem";
import { TweetPost } from "@/components/ui/tweet/TweetPost";
import { tweet } from "@/data/tweet";

export default function Page() {

	return (
		<div>

			<GeneralHeader backHref="/">
				<div className="text-base font-semibold">Voltar</div>
			</GeneralHeader>

			<div className="border-t-2 border-gray-600">

				<TweetItem tweet={tweet}/>

				<div className="border-gray-900-border-y-8">
					<TweetPost/>
				</div>

				<TweetItem tweet={tweet} hideComments />
				<TweetItem tweet={tweet} hideComments />
				<TweetItem tweet={tweet} hideComments />

			</div>

		</div>
	)

}