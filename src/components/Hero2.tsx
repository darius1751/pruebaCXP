import Image from "next/image"
import dashboard from '../../public/Dash board cap.png';
import { Marco } from "./Marco";
export const Hero2 = () => {
    return (
        <div className="hero2 w-full border-2 border-solid my-3 h-[48rem] rounded-lg flex relative">
            {/* <Marco className="mt-7 ml-8 z-30"> */}
                <div className='font-bold text-6xl w-[34rem] relative max-w-full z-30 mt-7 ml-8'>
                    Transforma tus finanzas
                    con la <span className="text-[--primary]">economía del futuro.</span>
                </div>
            {/* </Marco> */}
            <div className="front-car absolute z-20 w-full h-full max-w-full"></div>
            <Image src={dashboard} alt="dashboard" className="opacity-40 absolute top-0" />
        </div>
    )
}