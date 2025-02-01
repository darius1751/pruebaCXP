import Image from 'next/image';
import sujeto from '../../public/hero/sujeto.png';
import Link from 'next/link';
import hero from '../../public/hero/background.png';
// import { BorderTop } from './Svg/border-top';
// import { BorderBottom } from './Svg/border-bottom';
import { Marco } from './Marco';
export const Hero = () => {
    return (
        <div className='relative h-[44.5rem]'>
            <Image src={hero} alt='hero' loading='lazy' className='w-full h-[44.5rem] -z-10 absolute' />
            <div className='flex justify-between container m-auto flex-wrap z-10'>
                <div className='w-[34rem] mt-16 gap-7 flex flex-col'>
                    <Marco>
                        <div className='font-bold text-6xl'>
                            Lo mejor de crypto en un solo lugar.
                        </div>
                    </Marco>
                    <div className='bg-[#FFFFFF2E] backdrop-blur-md text-2xl text-justify p-5 my-2 rounded'>
                        En CXP, accede a un equipo de expertos,
                        herramientas especializadas, formación en  criptomonedas
                        y una comunidad activa,
                        todo lo que necesitas en un solo lugar.
                    </div>
                    <div className='flex justify-end'>
                        <Link href={'/register'} className='btn-link btn-primary'>Registrate</Link>
                    </div>
                </div>
                <div className='absolute bottom-0 right-2'>
                    <div className='relative w-16 h-16 top-[28rem] left-[2rem] z-20'>
                        <div className='rounded-full absolute outline-8 outline-[--primary] outline animate-ping w-7 h-7 p-3'>
                        </div>
                        <div className='bg-[--primary] w-7 h-7 rounded-full cursor-pointer z-30 relative'></div>
                    </div>

                    <Image src={sujeto} alt='sujeto' loading='lazy' height={717} className='max-w-full z-10' />

                </div>

            </div>
        </div>
    )
}