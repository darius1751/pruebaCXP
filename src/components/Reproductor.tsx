import Image, { StaticImageData } from "next/image";
import play from '../../public/carrousel-vertical/play.svg';
import next from '../../public/carrousel-vertical/next.svg';
import maximize from '../../public/carrousel-vertical/maximize.svg';
type Props = {
    image: string | StaticImageData;
}
export const Reproductor = ({ image }: Props) => {
    return (
        <div className="w-[400px] border-[--background] border-[0.7rem] border-solid rounded-lg my-3">
            <Image src={image} alt="video" loading="lazy"/>
            <div className="flex justify-around p-2 bg-[#F58220] items-center">
                <Image src={play} alt="play" loading="lazy"/>
                <div className="rounded-lg h-2 bg-white w-2/3"></div>
                <small className="bg-[#F58220] rounded-xl border-[7px] inline-block w-8 text-center">cc</small>
                <Image src={next} alt="next" loading="lazy"/>
                <Image src={maximize} alt="maximize" loading="lazy"/>
            </div>
        </div>
    )
}