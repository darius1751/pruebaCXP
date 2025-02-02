type Props = {
    className?: string
}
export const Line = ({ className }: Props) => {
    return (
        <div className={`flex w-full items-center ${className}`}>
            <div className="bg-[#e5a000] w-3 h-3 rounded-full ml-1"></div>
            <div className="grow w-full h-1 bg-[#e5a000]"></div>
        </div>
    )
}