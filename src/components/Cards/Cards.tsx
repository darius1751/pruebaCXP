import { Card as CardModel } from "@/interfaces/Card"
import { Card } from "./Card";
import { useId } from "react";

type Props = {
    items: CardModel[];
}
export const Cards = ({ items }: Props) => {
    const id = useId();
    return (
        <div className="flex flex-wrap lg:justify-between md:justify-center">
            {
                items.map((item, index) => <Card {...item} key={`card-${id}-${index}`} />)
            }
        </div>
    )
}