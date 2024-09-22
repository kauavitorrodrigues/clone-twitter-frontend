export const RecommendationItemSkeleton = () => {
    return (
        <div className="flex gap-1 animate-pulse">
            <div className="size-10 mr-2 rounded-full bg-gray-500"></div>
            <div className="flex flex-col gap-1 flex-1">
                <div className="bg-gray-500 w-3/4 h-4"></div>
                <div className="bg-gray-500 w-1/4 h-4"></div>
            </div>
        </div>
    )
}