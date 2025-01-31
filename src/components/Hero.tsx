import Image from 'next/image';
import sujeto from '../../public/hero/sujeto.png';
import Link from 'next/link';
export const Hero = () => {
    return (
        <div className="hero w-[100%] h-[44.5rem] ">
            <div className='flex justify-between container m-auto flex-wrap'>
                <div className='w-[34rem] mt-16 gap-7 flex flex-col'>
                    <div className='font-bold text-6xl'>
                        Lo mejor de crypto en un solo lugar.
                    </div>
                    <div className='bg-[#FFFFFF2e] backdrop-blur-md text-2xl text-justify p-5 my-2 rounded'>
                        En CXP, accede a un equipo de expertos,
                        herramientas especializadas, formación en  criptomonedas
                        y una comunidad activa,
                        todo lo que necesitas en un solo lugar.
                    </div>
                    <div className='flex justify-end'>
                        <Link href={'/register'} className='btn-link btn-primary'>Registrate</Link>
                    </div>
                </div>
                <div>
                    {/* <div>
                        subjectOptions
                    </div> */}
                    <Image src={sujeto} alt='sujeto' loading='lazy' height={717}/>
                </div>
            </div>        
        </div>
    )
}