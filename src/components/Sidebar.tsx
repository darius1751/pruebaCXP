import Link from "next/link";
import { DropList } from "./DropList";

type Props = {
    open: boolean;
    // links: NavLink[];
}
export const Sidebar = ({ open }: Props) => {
    return (
        <aside className={`absolute ${open && 'hidden'} max-w-full w-[15rem] transition-[width] right-0 z-50 p-3 bg-[--background] rounded-xl border border-[--primary]`}>
            <ul className="flex flex-col items-center justify-center grow gap-4 text-xl mt-2">
                <li><Link href={'/'}>Inicio</Link></li>
                <li><Link href={'/cxp-academia'}>CXP Academia</Link></li>
                <li><Link href={'/opera'}>Opera</Link></li>
                <DropList label="CXP Blog" links={[{ text: 'Item 1', url: '/' }, { text: 'Item 2', url: '/' }, { text: 'Item 3', url: '/' }]} />
                <li><Link href={'/prices'}>Precios</Link></li>
                <li><Link href={'/hype'}>Hype</Link></li>
            </ul>
            <div className="flex gap-2 self-end flex-col my-2">
                <Link href={'/register'} className="btn-link-sm btn-primary">Registrate</Link>
                <Link href={'/sign'} className="btn-link-sm btn-simple">Inicio sesión</Link>
            </div>
        </aside>
    )
}