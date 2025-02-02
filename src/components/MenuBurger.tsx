import Image from 'next/image'
import menuBurger from '../../public/menu-burger.svg'
import { useState } from 'react'
import { Sidebar } from './Sidebar';
export const MenuBurger = () => {
    const [open, setOpen] = useState(false);
    const toogleMenu = () => {
        setOpen(!open);
    }
    return (
        <div className="lg:hidden cursor-pointer">
            <Image src={menuBurger} alt="menu" onClick={toogleMenu} />
            <Sidebar open={open} />
        </div>
    )
}