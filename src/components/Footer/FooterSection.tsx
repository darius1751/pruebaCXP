// import Image from "next/image";
import Link from "next/link";
// import line from '../../../public/line.svg';
import { Line } from "../Svg/Line";
type FooterLink = {
    text: string;
    url: string;
}
type Props = {
    title: string;
    links?: FooterLink[];
    text?: string;
}
export const FooterSection = ({ title, text, links }: Props) => {
    return (
        <div className="text-[#EFEBE7] mx-3 w-96">
            <span className="text-[--primary] font-bold text-2xl">{title}</span>
            <Line className="max-w-full mb-2"/>
            {
                text && <p className="w-96 text-xl max-w-full">{text}</p>
            }
            {
                links && (
                    <ul className="flex flex-col">
                        {
                            links.map(
                                ({ text, url }, index) => (
                                    <li key={`footer-section-${title}-${index}`}>
                                        <Link href={url} className="hover:underline text-xl">{text}</Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                )
            }
        </div>
    )
}