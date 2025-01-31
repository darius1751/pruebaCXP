import Image from "next/image"
import client from '../../public/client.png'
import coins from '../../public/coins/coins.png';
import { Cite } from "./Cite"
import { getCites } from "@/services/getCites";

export const Section2 = async () => {
    const cites = await getCites();

    return (
        <div className="flex justify-between content-between mt-32">
            <div className="background-section2 flex w-1/2">
                <Image src={client} alt="client" className="ml-44" />
                <Image src={coins} alt="coins" className="h-40 relative top-10 right-32" />
            </div>
            <div className="w-1/2 mt-4">
                <h2 className="text-3xl font-bold">Lo que dicen nuestros Usuarios</h2>
                {cites.map(
                    (cite, index) => (
                    <Cite {...cite} key={`cite-${index}`} />
                )
                )}
            </div>
        </div>
    )
}