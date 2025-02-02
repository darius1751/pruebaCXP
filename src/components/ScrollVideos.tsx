import { StaticImageData } from "next/image"
import { Reproductor } from "./Reproductor";

type Props = {
    images: string[] | StaticImageData[];
}
export const ScrollVideos = ({ images }: Props) => {
    return (
        <div
            className="
            bg-[#202020] px-4 mx-2 overflow-hidden 
            inline-block whitespace-nowrap lg:h-full max-h-[500px]
            -z-10
            "
        >
            <div className="scrollvideos-track flex flex-col">
                {
                    images.map(
                        (image, index) => (<Reproductor key={`reproductor-video-${index}`} image={image} />)
                    )
                }
            </div>
            <div className="scrollvideos-track flex flex-col">
                {
                    images.map(
                        (image, index) => (<Reproductor key={`reproductor-video-${index}`} image={image} />)
                    )
                }
            </div>
        </div>
    )
}