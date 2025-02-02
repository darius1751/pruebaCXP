'use client'
import Link from "next/link";
import Image from "next/image";
import logo from '../../public/logo.svg';
import name from '../../public/name.svg';
import { MenuBurger } from "./MenuBurger";
import { DropList } from "./DropList";
export const Navbar = () => {

    return (
        <nav className="flex lg:justify-around items-center flex-wrap p-2 sm:justify-between max-sm:justify-between">
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
            <div className="lg:flex items-center justify-around grow flex-wrap sm:hidden max-sm:hidden">

                <ul className="flex justify-center grow gap-4 text-xl">
                    <li><Link href={'/'}>Inicio</Link></li>
                    <li><Link href={'/cxp-academia'}>CXP Academia</Link></li>
                    <li><Link href={'/opera'}>Opera</Link></li>
                    {/* <li><Link href={'/'} >CXP Blog</Link></li> */}
                    <DropList label="CXP Blog" links={[{ text: 'Item 1', url: '/' }, { text: 'Item 2', url: '/' }, { text: 'Item 3', url: '/' }]} />
                    <li><Link href={'/prices'}>Precios</Link></li>
                    <li><Link href={'/hype'}>Hype</Link></li>
                </ul>
                <div className="flex gap-2 self-end">
                    <Link href={'/register'} className="btn-link-sm btn-primary">Registrate</Link>
                    <Link href={'/sign'} className="btn-link-sm btn-simple">Inicio sesión</Link>
                </div>
            </div>
            <MenuBurger />
        </nav>
    )
}