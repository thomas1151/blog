import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

export default function SectionTitle({ title, moreUrl }){
    return(
        <h2 className="mt-6 text-3xl md:text-4xl font-display mb-2 tracking-tight leading-tight dark:text-white">
            <span className="underline font-bold inline-block mr-4">{title}</span>
            {moreUrl &&
            <Link href={moreUrl} legacyBehavior>
                <a className="font-body font-bold px-2 text-xl bg-primary rounded-md no-underline text-white hover:bg-secondary select-none inline-block">
                    See&nbsp;More <BiRightArrowCircle className="inline-block" />
                </a>
            </Link> 
            }
        </h2>
    )
}