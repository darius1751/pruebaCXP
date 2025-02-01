import { StaticImageData } from "next/image"
import { Reproductor } from "./Reproductor";

type Props = {
    images: string[] | StaticImageData[];
}
export const ScrollVideos = ({ images }: Props) => {
    return (
        <div className="bg-[#202020] px-4 mx-2 absolute top-0 bottom-0 left-0 overflow-hidden inline-block whitespace-nowrap">
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