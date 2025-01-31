'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logo from '../../public/logo.svg';
import name from '../../public/name.svg';
export const Navbar = () => {
    const location = usePathname();
    return (
        <nav className="flex justify-around items-center flex-wrap">
            <div className="flex">
                <div className="flex border-r-2 p-3 border-[#EDBA00] mr-3">
                    <Image src={logo} alt="Logo" loading="lazy" />
                    <Image src={name} alt="Name" loading="lazy" />
                </div>
                <div className="flex flex-col text-gray-400">
                    <span>Crypto</span>
                    <span>Xperts</span>
                    <span>for Profits</span>
                </div>
            </div>
            <ul className="flex content-around justify-around w-2/5">
                <li><Link href={'/'} >Inicio</Link></li>
                <li><Link href={'/cxp-academia'}>CXP Academia</Link></li>
                <li><Link href={'/opera'}>Opera</Link></li>
                <li><Link href={'/'}>CXP Blog</Link></li>
                <li><Link href={'/prices'}>Precios</Link></li>
                <li><Link href={'/hype'}>Hype</Link></li>
            </ul>
            <div className="flex gap-2">
                <Link href={'/register'} className="btn-link-sm btn-primary">Registrate</Link>
                <Link href={'/sign'} className="btn-link-sm btn-simple">Inicio sesión</Link>
            </div>
        </nav>
    )
}