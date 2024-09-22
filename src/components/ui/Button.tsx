type Props = {
    label: string
    onClick?: () => void
    size: "big" | "medium" | "small"
}

export const Button = ({ label, onClick, size } : Props ) => {
    return (

        <div 
            className={`
                flex justify-center items-center cursor-pointer    
                bg-white rounded-3xl text-black
                hover:opacity-95 duration-500 font-semibold

                ${ size === "big" && "h-14 text-lg "}
                ${ size === "medium" && "h-10 text-md "}
                ${ size === "small" && "h-7 text-xs "}

            `}
            onClick={onClick} >
            { label }
        </div>

    )
}