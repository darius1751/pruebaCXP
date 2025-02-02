import { Card as CardModel } from "@/interfaces/Card";
import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "./CategoryCard";

type Props = CardModel;
export const Card = ({ image, title, text, url, categories }: Props) => {
    return (
        <div className="flex flex-col border-white w-[23rem] h-[37rem] border-2 rounded-xl bg-[#474747] m-1 mb-3">
            <div>
                <Image src={image} alt={title} loading="lazy" />
                <div className="relative flex bottom-[2px] w-full">
                    {
                        categories.map((category, index) => <CategoryCard {...category} key={`category-${index}`} />
                        )}
                </div>

            </div>
            <div className="p-3">
                <span className="text-xl font-bold mb-2 inline-block">{title}</span>
                <p className="h-36 mb-7">
                    {text}
                </p>
                <div className="flex justify-end">
                    <Link href={url} className="btn-link-sm btn-outline border-white border">Ver más</Link>

                </div>
            </div>

        </div>
    )
}