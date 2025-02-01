import Image from "next/image"
import client from '../../public/client.png'
import coins from '../../public/coins/coins.png';
import { Cite } from "./Cite"
import { getCites } from "@/services/getCites";

export const Section2 = async () => {
    const cites = await getCites();

    return (
        <div className="flex justify-between content-between mt-32 flex-wrap">
            <div className="background-section2 flex w-1/2">
                <Image src={client} alt="client" className="ml-44" loading="lazy"/>
                <Image src={coins} alt="coins" className="h-40 relative top-10 right-32" loading="lazy"/>
            </div>
            <div className="mt-4 w-[40rem] flex flex-col items-center">
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