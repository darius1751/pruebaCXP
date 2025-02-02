import Image from "next/image"
import dashboard from '../../public/Dash board cap.png';
// import frontCar from '../../public/front car 1.png';
export const Hero2 = () => {
    return (
        <div className="hero2 w-full border-2 border-solid my-3 h-[48rem] rounded-lg flex relative">
            {/* <Marco className="relative left-8 top-7"> */}
                <div className='font-bold text-6xl w-[34rem] relative'>
                    Transforma tus finanzas 
                    con la <span className="text-[--primary]">economía del futuro.</span>
                </div>
            {/* </Marco> */}
            <Image src={dashboard} alt="dashboard" className="opacity-40 absolute top-0" />
        </div>
    )
}