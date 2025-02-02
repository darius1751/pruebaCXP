import Image from "next/image";
import Link from "next/link";

type Props = {
    icon: string;
    text: string;
    url: string;
    width?: number;
}
export const Section3Icon = ({ icon, text, url, width = 43 }: Props) => {
    return (
        <div className="flex flex-col items-center w-1/3 overflow-hidden h-28">
            <Link href={url} className="flex flex-col items-center social-section3 relative mb-20 text-center">
                <Image src={icon} alt={text} width={width} loading="lazy"/>
            </Link>
            <span className="font-bold text-xl social-section3-text">{text}</span>
        </div>
    )
}