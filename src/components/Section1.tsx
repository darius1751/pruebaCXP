import Image from "next/image"
import book from '../../public/book.svg';
// import background from '../../public/trade-11.png';
import chicaCorpo from '../../public/chica-corpo.png';
import Link from "next/link";
export const Section1 = () => {
    return (
        <div className="flex justify-between my-6 pt-2 border-white border-2 rounded-lg">
            <div>
                <div className="background-section1 flex items-end">
                    {/* <Image src={background} alt="background" /> */}
                    <Image src={chicaCorpo} alt="chicaCorpo" className="ml-40" />
                </div>
            </div>
            <div className="w-1/3 p-5">
                <div className="flex flex-col h-full justify-around">
                    <div className="flex items-start content-center justify-center ">
                        <Image src={book} alt="book" width={40} className="mr-4" />
                        <span className="text-3xl font-bold">
                            Prepárate para el ciclo más grande de <span className="text-[#EABC4D]"> la historia de las cryptos. </span>
                        </span>
                    </div>
                    <p className="text-xl">
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