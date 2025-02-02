import { Cite as CiteModel } from "@/interfaces/Cite"

type Props = CiteModel;
export const Cite = ({ author, cite, role }: Props) => {
    return (
        <div className="border border-[--primary] rounded-lg p-3 max-w-[40rem] mt-5">
            <p className="italic text-[#EFEBE7] text-xl mb-3">
                {`"${cite}"`}
            </p>
            <p className="text-2xl">
                <span className="font-bold text-[--primary] mr-2">{author}.</span>
                <span className="font-bold">{role}.</span>
            </p>
        </div>
    )
}