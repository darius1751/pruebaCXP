import { Coin } from "@/interfaces/Coin"
import { CarrouselItem } from "./CarrouselItem";

type Props = {
    items: Coin[];
}
export const Carrousel = ({ items }: Props) => {
    return (
        <div className="bg-[#5B5B5C] w-full py-3  overflow-x-hidden inline-block whitespace-nowrap">
            <div className="carrousel-coins-track inline-flex">
                {
                    items.map(
                        (item, index) => <CarrouselItem item={item} key={`carrousel-item-${index}`} />
                    )
                }
            </div>
            <div className="carrousel-coins-track inline-flex">
                {
                    items.map(
                        (item, index) => <CarrouselItem item={item} key={`carrousel-item-${index}`} />
                    )
                }
            </div>
        </div>
    )
}