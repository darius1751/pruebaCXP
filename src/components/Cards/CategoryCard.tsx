import Image from "next/image"
type Props = {
    icon: string;
    category: string;
}
export const CategoryCard = ({ icon, category }: Props) => {
    return (
        <div className="flex gap-1 bg-[#BEBEC066] backdrop-blur-2xl rounded mx-1 p-1 font-bold relative bottom-9 left-[4em] mr-2 h-8">
            <Image src={icon} alt={category} />
            <span>{category}</span> 
        </div>
    )
}