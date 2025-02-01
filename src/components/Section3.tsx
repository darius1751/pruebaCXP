import Image from "next/image"
import Link from "next/link"
import telegram from '../../public/social/send.svg';
import discord from '../../public/social/discord.svg';
import kick from '../../public/social/kick.svg';
import student from '../../public/estudiante b.png'
import video1 from '../../public/carrousel-vertical/video1.png';
import video2 from '../../public/carrousel-vertical/video2.png';
import video3 from '../../public/carrousel-vertical/video3.png';
import video4 from '../../public/carrousel-vertical/video4.png';
import { ScrollVideos } from "./ScrollVideos";
import { Section3Icon } from "./Section3Icon";
export const Section3 = () => {
    return (

        <div className="flex justify-between my-6 pt-2 border-white border-2 rounded-lg flex-wrap relative">
            <div>
                <div className="flex">
                    <ScrollVideos images={[video1, video2, video3, video4]} />
                    <div className="background-coins z-10">
                        <Image src={student} alt="student" className="z-10" loading="lazy"/>
                    </div>


                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="flex flex-col h-full justify-evenly">
                    <div className="flex items-start content-center justify-center">
                        <span className="text-3xl font-bold">
                            Somos el mejor aliado para <span className="text-[#EABC4D]">potencializar tus finanzas</span>
                        </span>
                    </div>
                    <p className="text-2xl">
                        En CXP estamos motivados en potencializar la adopción masiva
                        de las criptomonedas facilitándote todas nuestras herramientas
                        y conocimientos a nuestra comunidad, nuestro equipo de expertos
                        con más de 10 años de experiencia ha desarrollado herramientas
                        para llevar tus finanzas al siguiente nivel.

                    </p>
                    <div className="flex justify-evenly h-20">
                        <Section3Icon icon={telegram} text="Free Telegram" url="/" />
                        <Section3Icon icon={discord} text="Free Discord" url="/" />
                        <Section3Icon icon={kick} text="Live on Kick" url="/" width={35} />
                    </div>
                </div>
            </div>
        </div>

    )
}