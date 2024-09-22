import Link from "next/link"

type Props = {
    label: string
    postCount: number
}

export const TrendingItem= ({ label, postCount } : Props ) => {

    return (
        <Link
            href={`/search?q=${encodeURIComponent(label)}`}
            className="group/item"
        >
            <div className="group-hover/item:underline font-semibold">{label}</div>
            <div className="text-sm text-gray-400">{postCount} posts</div>
        </Link>
    )

}