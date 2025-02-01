import { Coin } from "@/interfaces/Coin"
import Image from "next/image";
import down from '../../../public/down.svg';
import up from '../../../public/up.svg';
type Props = {
    item: Coin;
}
export const CarrouselItem = ({ item }: Props) => {
    const { icon, changePercent, changePrice, name } = item;
    const isPositive = changePercent >= 0;
    return (
        <div className="inline-flex items-center gap-2 mx-6 border-r-[1px] pr-3">
            <Image src={icon} alt={name} width={40} height={40} />
            <span className="text-5xl font-bold">{name}</span>
            <div className="flex flex-col">
                <span className="font-bold">{changePrice}</span>
                <span className={`font-bold text-[${isPositive ? "#0CF800" : "#FF0000"}]`}>{isPositive && "+"}{changePercent.toFixed(2)}</span>
            </div>
            <Image src={isPositive ? up : down} alt={isPositive ? "up" : "down"} className="mx-5 mt-5 " />
        </div>
    )
}