import Image from "next/image"
import Link from "next/link";
import book from '../../../public/book.svg';
// import background from '../../../public/trade-11.png';
import chicaCorpo from '../../../public/chica-corpo.png';
import bitcoin from '../../../public/coins/bitcoin.svg';
import ethereum from '../../../public/coins/ethereum.svg';
import solana from '../../../public/coins/solana.svg';
import dogecoin from '../../../public/coins/dogecoin.svg';
export const Section1 = () => {
    return (
        <div className="flex justify-between my-6 pt-2 border-white border-2 rounded-lg flex-wrap max-w-100">

            <div className="flex items-end max-w-full z-10">
                <div className="background-section1 max-w-full flex relative">
                    <Image src={chicaCorpo} alt="chicaCorpo" className="max-w-full lg:ml-40 sm:ml-0" loading="lazy" height={1240} />

                    <div className=" absolute lg:top-32 lg:left-96 w-20 h-28 cursor-pointer z-10 activador sm:left-56 sm:top-28 max-sm:left-56 max-sm:top-28"></div>
                    <div className={`absolute w-[24rem] lg:top-8 lg:left-[14rem] sm:-top-4 sm:left-16 max-sm:-top-4 max-sm:left-16 opacity-0 transition-opacity duration-[1.5s] max-w-full`}>
                        <div className="flex justify-around mb-7">
                            <Image src={bitcoin} alt="" width={60} />
                            <Image src={ethereum} alt="" width={60} />
                        </div>

                        <div className="flex justify-between">
                            <Image src={solana} alt="" width={60} />
                            <Image src={dogecoin} alt="" width={60} />
                        </div>
                    </div>


                </div>

            </div>
            <div className="w-[45rem] p-5">
                <div className="flex flex-col h-full justify-around">
                    <div className="flex items-start content-center justify-center">
                        <Image src={book} alt="book" width={40} className="mr-4" />
                        <span className="text-3xl font-bold">
                            Prepárate para el ciclo más grande de <span className="text-[#EABC4D]"> la historia de las cryptos. </span>
                        </span>
                    </div>
                    <p className="text-2xl">
                        Nuestro equipo ha transformado más de 10 años de experiencia
                        en una rápida y sencilla curva de aprendizaje, estamos
                        definitivamente en el mejor momento para el mercado Crypto
                        y en CXP te traemos todo lo necesario para que tú también puedas
                        ser parte de esto.
                    </p>
                    <div className="flex justify-end">
                        <Link href={'/'} className="text-[#EABC4D] btn-link btn-outline border-[#EABC4D] border">Empieza Ahora</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}