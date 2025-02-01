
type Props = {
    className?: string;
    children: React.ReactNode;
}
export const Marco = ({ className, children }: Props) => {
    return (
        <div className={className}>
            <div className="flex flex-col relative mb-4 left-2 max-w-full">
                {/* Linea superior */}
                <div className="w-full h-1 bg-[#e5a000] inline-block"></div>
                <div className="relative translate-x-[18rem] translate-y-[-14px]">
                    {/* Linea superior derecha media */}
                    <div className="h-1 bg-[#e5a000] relative left-[40%] rotate-90 w-20 top-12"></div>
                    {/* Circulo */}
                    <div className="bg-[#e5a000] w-3 h-3 rounded-full left-[15.75rem] top-[85px] relative"></div>
                </div>
            </div>
            {children}
            <div className="flex flex-col relative mr-2 mt-4 right-2">
                {/* Linea Inferior */}
                <div className="w-full h-1 bg-[#e5a000] inline-block"></div>
                <div className="relative translate-x-[-16rem] translate-y-[-90px]">
                    {/* Linea inferior izquiera media */}
                    <div className="h-1 bg-[#e5a000] relative left-[40%] rotate-90 w-20 top-12"></div>
                    {/* Circulo */}
                    <div className="bg-[#e5a000] w-3 h-3 rounded-full left-[15.5rem] top-[-5px] relative"></div>
                </div>
            </div>
        </div>
    )
}
