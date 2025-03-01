import Image from 'next/image';
import sujeto from '../../public/hero/sujeto.png';
import Link from 'next/link';
import bitcoin from '../../public/coins/bitcoin.svg';
import ethereum from '../../public/coins/ethereum.svg';
import solana from '../../public/coins/solana.svg';
import dogecoin from '../../public/coins/dogecoin.svg';
// import { Marco } from './Marco';
export const Hero = () => {
    return (
        <div className='relative min-h-[44.8rem] hero px-8'>
            <div className='flex lg:justify-between m-auto flex-wrap z-10 md:justify-center'>
                <div className='w-[34rem] mt-16 gap-7 flex flex-col max-w-full'>
                    {/* <Marco className='max-w-full'> */}
                    <div className='font-bold text-6xl max-w-full'>
                        Lo mejor de crypto en un solo lugar.
                    </div>
                    {/* </Marco> */}
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
                <div className='flex items-end'>
                    <div className='relative w-16 h-16 z-30 lg:left-24 lg:bottom-[17.5rem] md:left-24 md:bottom-[17.5rem] max-sm:left-12 max-sm:bottom-[11.5rem]'>
                        <div
                            className='rounded-full absolute 
                            outline-8 outline-[--primary] outline animate-ping w-7 h-7 p-3'
                        >
                        </div>
                        <div className='bg-[--primary] w-7 h-7 rounded-full cursor-pointer relative point'></div>
                        <Image src={bitcoin} alt='bitcoin' width={70} className='absolute right-[4.5rem] opacity-0 delay-150 transition-opacity' />
                        <Image src={ethereum} alt='ethereum' width={70} className='absolute right-[1rem] bottom-72 opacity-0 delay-100 transition-opacity' />
                        <Image src={solana} alt='solana' width={70} className='absolute left-[11rem] bottom-64 opacity-0 delay-75 transition-opacity' />
                        <Image src={dogecoin} alt='dogecoin' width={70} className='absolute left-[19rem] bottom-32 opacity-0 delay-0 transition-opacity' />
                    </div>

                    <Image src={sujeto} alt='sujeto' loading='lazy' height={700} className='max-w-full z-20 self-end' />

                </div>

            </div>
        </div>
    )
}