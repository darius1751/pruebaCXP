import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/interfaces/NavLink";
import list from '../../public/list.svg';
type Props = {
    label: string;
    links: NavLink[];
}
export const DropList = ({ label, links }: Props) => {
    const [open, setOpen] = useState(false);
    const toogleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className="flex flex-col relative">

            <span className="cursor-pointer mr-1 flex" onClick={toogleOpen}>
                <span className="mr-1">{label}</span>
                <Image src={list} alt="down" width={15} />
            </span>
            <ul className={`absolute top-5 flex flex-col gap-4 text-xl mt-2 bg-white text-[--background] ${open || 'hidden'} z-30 rounded-xl max-w-full w-[15rem] p-2`}>
                {
                    links.map(({ url, text }, index) => (
                        <li key={`dropbox-${label}-item-${index}`}><Link href={url}>{text}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}