// import Image from "next/image";
import Link from "next/link";
import { Line } from "../Line";
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
            <div className="max-w-full">
                <span className="text-[--primary] font-bold text-2xl ml-3">{title}</span>
                <Line />
            </div>
            <div className="pl-3">
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

        </div>
    )
}