import { TrendingItem } from "./TrendingItem"
import { TrendingItemSkeleton } from "./TrendingItemSkeleton"

export const TrendingArea= () => {

    return (
        <div className="bg-gray-600 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo?</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TrendingItem label="#teste" postCount={1}/>
                <TrendingItem label="#teste" postCount={1}/>
                <TrendingItemSkeleton/>
                <TrendingItemSkeleton/>
            </div>
        </div>
    )

}