import { BiLinkExternal } from "react-icons/bi";

export default function FormattedExternalLink({href, children, className}){
    return <a className={className} href={href}>{children}<BiLinkExternal className="mx-1 inline-block"/></a>
}