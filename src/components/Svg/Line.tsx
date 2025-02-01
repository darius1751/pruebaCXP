export type PropsSVG = {
    className?: string;
}
export const Line = ({ className }: PropsSVG) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="780" height="12" fill="none" className={className}>
            <path
                d="M0.699503 6C0.699503 8.94552 3.08732 11.3333 6.03284 11.3333C8.97836 11.3333 11.3662 8.94552 11.3662 6C11.3662 3.05448 8.97836 0.666667 6.03284 0.666667C3.08732 0.666666 0.699504 3.05448 0.699503 6ZM780 5.00007L6.03284 5L6.03284 7L780 7.00007L780 5.00007Z"
                fill="#EABC4D"
                height={50}
            />
        </svg>
    )
}