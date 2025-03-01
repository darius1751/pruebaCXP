import Image from "next/image";
import { Line } from "./Line";
type Props = {
    children: React.ReactNode;
    icon: string;
    className?: string;
}
export const Separator = ({ children, icon, className = '' }: Props) => {
    return (
        <div className={`flex my-10 justify-between items-center ${className}`}>
            <div className="flex items-center">
                <Image src={icon} alt="icon" className="max-h-full" />
                <h2 className="text-5xl font-bold mx-3">{children}</h2>
            </div>
            <Line />
        </div>
    )
}