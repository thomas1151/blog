import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

export default function SectionTitle({ title, moreUrl }){
    return(
        <h2 className="mt-6 text-3xl md:text-4xl font-display mb-2 tracking-tighter leading-tight dark:text-white">
            <span className="underline font-bold">{title}</span>
            {moreUrl &&
            <Link href={moreUrl} >
                <a className="mx-4 px-2 text-xl bg-primary rounded-md no-underline text-white font-light hover:bg-secondary select-none">
                    See&nbsp;More <BiRightArrowCircle className="inline-block" />
                </a>
            </Link> 
            }
        </h2>
    )
}