import Image from "next/image"
import client from '../../../public/client.png'
import coins from '../../../public/coins/coins.png';
import { Cite } from "../Cite"
import { getCites } from "@/services/getCites";

export const Section2 = async () => {
    const cites = await getCites();

    return (
        <div className="flex lg:justify-between mt-32 flex-wrap md:justify-center">
            <div className="background-section2 flex relative">
                <Image src={client} alt="client" className="lg:ml-44 sm:ml-8" loading="lazy" width={400}/>
                <Image src={coins} alt="coins" className="w-[11rem] h-[11rem] absolute lg:left-[29rem] md:left-80 max-sm:left-64" loading="lazy"/>
            </div>
            <div className="mt-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-14">Lo que dicen nuestros Usuarios</h2>
                <div className="flex flex-col items-center">
                    {cites.map(
                        (cite, index) => (
                            <Cite {...cite} key={`cite-${index}`} />
                        )
                    )}
                </div>

            </div>
        </div>
    )
}