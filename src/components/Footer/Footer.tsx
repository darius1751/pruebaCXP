import Image from 'next/image';
import Link from 'next/link';
import group from '../../../public/Group.svg';
import groupText from '../../../public/Group-text.svg';
import linkedin from '../../../public/social/linkedin.svg';
import telegram from '../../../public/social/send.svg';
import kick from '../../../public/social/kick.svg';
import discord from '../../../public/social/discord.svg';
import { FooterSection } from './FooterSection';
export const Footer = () => {
    return (
        <footer className='flex justify-around bg-[#474747] py-2 max-w-full flex-wrap container'>
            <div className="flex flex-col items-center mr-2 mb-2">
                <Image src={group} alt='group-icon' />
                <Image src={groupText} alt='group-text' />
                <div className='flex gap-1 mt-2'>
                    <Link href={'/'}>
                        <Image src={linkedin} alt='linkedin' />
                    </Link>
                    <Link href={'/'}>
                        <Image src={telegram} alt='telegram' />
                    </Link>
                    <Link href={'/'}>
                        <Image src={kick} alt='kick' />
                    </Link>
                    <Link href={'/'}>
                        <Image src={discord} alt='discord' />
                    </Link>
                </div>
            </div>
            <div className='mb-2'>
                <form className="flex flex-col content-evenly">
                    <input
                        type="email"
                        placeholder="Correo"
                        className="rounded h-12 w-64 placeholder:text-black placeholder:text-xl my-4 pl-2 text-black text-xl outline-none"
                    />
                    <input type="submit" value={'Suscribete'} className="btn btn-primary font-bold text-2xl rounded bg-[#FFB000]" />
                </form>
            </div>
            <div className='flex justify-evenly flex-wrap'>
                <FooterSection title='About Us' text='Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' />
                <FooterSection title='Services' links={[{ text: 'CXP AI', url: '/' }, { text: 'CXP Academy', url: '/' }, { text: 'Trading room', url: '/' }]} />
                <FooterSection title='CXP Blog' links={[{ text: 'Guides', url: '/' }, { text: 'Trading Inside', url: '/' }, { text: 'E-books', url: '/' }, { text: 'Courses', url: '/' }]} />
            </div>
        </footer>
    )
}